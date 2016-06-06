/// <reference path="../N.js" />
/// <reference path="file.js" />

/**
* SuiteScript module
*
* @module N/render
* @suiteScriptVersion 2.x
*
*/

'use strict';

N.modules.Render = function () {

    /**
    * @protected
    * @constructor
    */
    function EmailMergeResult() {
        /**
        * @name EmailMergeResult#subject
        * @type string
        * @readonly
        * @since 2015.2
        */
        this.subject = undefined;
        /**
        * @name EmailMergeResult#body
        * @type string
        * @readonly
        * @since 2015.2
        */
        this.body = undefined;

        /**
        * get JSON format of the object
        * @return {string}
        *
        */
        this.toJSON = function (options) { };

        /**
        * @return {string}
        *
        */
        this.toString = function (options) { };
    }

    /**
    * @protected
    * @constructor
    */
    function TemplateRenderer() {
        /**
        * Template content
        * @name TemplateRenderer#templateContent
        * @type string
        * @since 2015.2
        */
        this.templateContent = undefined;

        /**
        * @param {Object} options
        * @param { string } options.templateName
        * @param { record.Record } options.record
        * @return {undefined}
        *
        */
        this.addRecord = function (options) { };

        /**
        * @param {Object} options
        * @param { string } options.templateName
        * @param { search.Result } options.searchResult
        * @return {undefined}
        *
        */
        this.addSearchResults = function (options) { };

        /**
        * @return {string}
        *
        */
        this.renderAsString = function (options) { };

        /**
        * @param {Object} options
        * @param { http.ServerResponse } options.response
        * @return {undefined}
        *
        */
        this.renderToResponse = function (options) { };

        /**
        * @return {file.File}
        *
        */
        this.renderAsPdf = function (options) { };

        /**
        * @param { http.ServerResponse } response
        * @return {undefined}
        *
        */
        this.renderPdfToResponse = function (options) { };

        /**
        * get JSON format of the object
        * @return {string}
        *
        */
        this.toJSON = function (options) { };

        /**
        * @return {string}
        *
        */
        this.toString = function (options) { };
    }


    /**
    *
    * @governance 10 units
    * @restriction Supported by all server side scirpts
    *
    * @param {Object} options
    * @param {number} options.entityId The internal ID of the transaction being printed
    * @param {string} options.printMode (optional) The output type: PDF|HTML|DEFAULT. DEFAULT uses the user/company preference for print output
    * @param {number} options.formId (optional)
    *
    * @returns {N.objects.File}
    */
    this.transaction = function (options) { };

    /**
    * @governance 10 units
    * @restriction Supported by all server side scirpts
    *
    * @param {Object} options
    * @param {number} options.entityId
    * @param {string} options.printMode (optional)
    * @param {number} options.formId  (optional)
    * @param {date} options.startDate (optional)
    * @param {date} options.statementDate (optional)
    * @param {boolean} options.openTransactionsOnly  (optional)
    *
    * @returns {N.objects.File}
    */
    this.statement = function (options) { };

    /**
    * @governance 10 units
    * @restriction Supported by all server side scirpts
    *
    * @param {Object} options
    * @param {number} options.entityId
    * @param {string} options.printMode (optional)
    * @param {number} options.formId  (optional)
    * @param {number} options.fulfillmentId (optional)
    *
    * @returns {N.objects.File}
    */
    this.packingSlip = function (options) { };

    /**
    * @governance 10 units
    * @restriction Supported by all server side scirpts
    *
    * @param {Object} options
    * @param {number} options.entityId
    * @param {string} options.printMode (optional)
    * @param {number} options.formId  (optional)
    * @param {number} options.shipgroup (optional)
    * @param {number} options.location (optional)
    *
    * @returns {N.objects.File}
    */
    this.pickingTicket = function (options) { };

    /**
    * @governance 10 units
    * @restriction Supported by all server side scirpts
    *
    * @param {Object} options
    * @param {number} options.entityId
    * @param {string} options.printMode (optional)
    *
    * @returns {N.objects.File}
    */
    this.bom = function (options) { };

    /**
    * @governance 0 units
    * @restriction Supported by all server side scirpts
    
    * @returns {TemplateRenderer}
    */
    this.create = function (options) {
        return new TemplateRenderer();
    };

    /**
    * @governance 10 units
    * @restriction Supported by all server side scirpts
    *
    * @param {Object} options
    * @param {Document|string} options.xmlString
    * @returns {N.objects.File}
    */
    this.xmlToPdf = function (options) { };

    /**
    *
    * RecordRef Encapsulates the type and id of a particular record instance.
    * @typedef {Object} RecordRef
    * @property {number} id - Internal ID of the record instance.
    * @property {string} type - Record type id.
    *
    * @governance 0 units
    * @param {Object} options
    * @param {number} options.templateId
    * @param {RecordRef} options.entity
    * @param {RecordRef} options.recipient
    * @param {RecordRef} options.customRecord
    * @param {number} options.supportCaseId
    * @param {number} options.transactionId
    *
    * @returns {EmailMergeResult}
    *
    */
    this.mergeEmail = function (options) {
        return new EmailMergeResult();
    };

    /**
    * Enum print mode type values.
    * @readonly
    * @enum {string}
    */
    function RenderPrintMode() {
        this.PDF = 'PDF';
        this.HTML = 'HTML';
        this.DEFAULT = 'DEFAULT';
    }

    /** 
    * Print Mode
    * @returns {string}
    **/
    this.PrintMode = new RenderPrintMode();
};

define([], function () {
    return new N.modules.Render();
});