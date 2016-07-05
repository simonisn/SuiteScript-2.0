/// <reference path="../lib/N/scriptcontext.js" />
/// <reference path="../lib/N/modules/search.js" />
/// <reference path="../lib/N/modules/runtime.js" />
/// <reference path="../lib/N/modules/record.js" />
/// <reference path="../lib/N/modules/log.js" />
/// <reference path="../lib/N/modules/email.js" />
/// <reference path="../lib/N/modules/error.js" />

/**
 * @NApiVersion 2.0
 * @NScriptType MapReduceScript
 */

'use strict';

define(['N/search', 'N/record', 'N/email', 'N/runtime', 'N/error'],
    /**
    * @param {N.search.module} search
    * @param {N.record.module} record
    * @param {N.email.module} email
    * @param {N.runtime.module} runtime
    * @param {N.error.module} error
    */
    function (search, record, email, runtime, error) {
        function handleErrorAndSendNotification(e, stage) {
            log.error('Stage: ' + stage + ' failed', e);

            var author = -5;
            var recipients = 'notify@company.com';
            var subject = 'Map/Reduce script ' + runtime.getCurrentScript().id + ' failed for stage: ' + stage;
            var body = 'An error occurred with the following information:\n' +
                       'Error code: ' + e.name + '\n' +
                       'Error msg: ' + e.message;

            email.send({
                author: author,
                recipients: recipients,
                subject: subject,
                body: body
            });
        }

        /**
        * @param {N.scriptContext.MR.Summary} summary
        */
        function handleErrorIfAny(summary) {
            var inputSummary = summary.inputSummary;
            var mapSummary = summary.mapSummary;
            var reduceSummary = summary.reduceSummary;
            
            if (inputSummary.error) {
                var e = error.create({
                    name: 'INPUT_STAGE_FAILED',
                    message: inputSummary.error
                });
                handleErrorAndSendNotification(e, 'getInputData');
            }

            handleErrorInStage('map', mapSummary);
            handleErrorInStage('reduce', reduceSummary);
        }

        /**
        * @param {String} stage
        * @param {N.scriptContext.MR.MapSummary} summary
        */
        function handleErrorInStage(stage, summary) {            
            var errorMsg = [];
            summary.errors.iterator().each(function (key, value) {
                var msg = 'Failure to accept payment from customer id: ' + key + '. Error was: ' + JSON.parse(value).message + '\n';
                errorMsg.push(msg);
                return true;
            });
            if (errorMsg.length > 0) {
                var e = error.create({
                    name: 'RECORD_TRANSFORM_FAILED',
                    message: JSON.stringify(errorMsg)
                });
                handleErrorAndSendNotification(e, stage);
            }
        }

        function createSummaryRecord(summary) {
            try {
                var seconds = summary.seconds;
                var usage = summary.usage;
                var yields = summary.yields;

                var rec = record.create({
                    type: 'customrecord_summary',
                });

                rec.setValue({
                    fieldId: 'name',
                    value: 'Summary for M/R script: ' + runtime.getCurrentScript().id
                });

                rec.setValue({
                    fieldId: 'custrecord_time',
                    value: seconds
                });
                rec.setValue({
                    fieldId: 'custrecord_usage',
                    value: usage
                });
                rec.setValue({
                    fieldId: 'custrecord_yields',
                    value: yields
                });

                rec.save();
            }
            catch (e) {
                handleErrorAndSendNotification(e, 'summarize');
            }
        }

        function applyLocationDiscountToInvoice(recordId) {
            var invoice = record.load({
                    type: record.Type.INVOICE,
                    id: recordId,
                    isDynamic: true
                });

            var location = invoice.getText({
                fieldId: 'location'
            });

            var discount;

            if (location === 'East Coast') {
                discount = 'Eight Percent';
            } else if (location === 'West Coast') {
                discount = 'Five Percent';
            } else if (location === 'United Kingdom') {
                discount = 'Nine Percent';
            } else {
                discount = '';
            }

            invoice.setText({
                fieldId: 'discountitem',
                text: discount,
                ignoreFieldChange: false
            });
            log.debug(recordId + ' has been updated with location-based discount.');
            invoice.save();
        }

        /**
        * @param {N.scriptContext.MR.GetInputContext} context
        */
        function getInputData(context) {            
            return search.create({
                type: record.Type.INVOICE,
                filters: [['status', search.Operator.IS, 'open']],
                columns: ['entity'],
                title: 'Open Invoice Search'
            });
        }

        /**
        * @param {N.scriptContext.MR.MapContext} context
        */
        function map(context) {
            var searchResult = JSON.parse(context.value);
            var invoiceId = searchResult.id;
            var entityId = searchResult.values.entity.value;

            applyLocationDiscountToInvoice(invoiceId);

            context.write(entityId, invoiceId);
        }

        /**
        * @param {N.scriptContext.MR.ReduceContext} context
        */
        function reduce(context) {            
            var customerId = context.key;

            var custPayment = record.transform({
                fromType: record.Type.CUSTOMER,
                fromId: customerId,
                toType: record.Type.CUSTOMER_PAYMENT,
                isDynamic: true
            });

            var lineCount = custPayment.getLineCount('apply');
            for (var j = 0; j < lineCount; j += 1) {
                custPayment.selectLine({
                    sublistId: 'apply',
                    line: j
                });
                custPayment.setCurrentSublistValue({
                    sublistId: 'apply',
                    fieldId: 'apply',
                    value: true
                });
            }

            var custPaymentId = custPayment.save();
            context.write(custPaymentId);
        }

        /**        
        * @param {N.scriptContext.MR.Summary} summary
        */
        function summarize(summary) {
            handleErrorIfAny(summary);
            createSummaryRecord(summary);
        }

        return {
            getInputData: getInputData,
            map: map,
            reduce: reduce,
            summarize: summarize
        };
    });