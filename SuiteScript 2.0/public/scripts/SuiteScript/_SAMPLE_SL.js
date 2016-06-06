/// <reference path="../lib/N/N.js" />
/// <reference path="../lib/N/scriptcontext.js" />
/// <reference path="../lib/N/modules/ui.js" />
/// <reference path="../lib/N/modules/runtime.js" />
/// <reference path="../lib/N/modules/email.js" />


/**
 *@NApiVersion 2.x
 *@NScriptType Suitelet
 */

'use strict';

define(['N/ui', 'N/email', 'N/runtime'],
    /**
    *
    * @param {N.ui.module} ui
    * @param {N.email.module} email
    * @param {N.runtime.module} runtime
    */
    function (ui, email, runtime) {
        var onRequest;
        
        /**
        * Definition of the Suitelet script trigger point.
        *
        * @param {N.scriptContext.SL} context
        */        
        onRequest = function (context) {
            
            if (context.request.method === 'GET') {
                var form = ui.createForm({
                    title: 'Demo Suitelet Form'
                });
                var subject = form.addField({
                    id: 'subject',
                    type: ui.FieldType.TEXT,
                    label: 'Subject'
                });
                subject.layoutType = ui.FieldLayoutType.NORMAL;
                subject.breakType = ui.FieldBreakType.STARTCOL;
                subject.isMandatory = true;
                var recipient = form.addField({
                    id: 'recipient',
                    type: ui.FieldType.EMAIL,
                    label: 'Recipient email'
                });
                recipient.isMandatory = true;
                var message = form.addField({
                    id: 'message',
                    type: ui.FieldType.TEXTAREA,
                    label: 'Message'
                });
                message.displaySize = {
                    width: 60,
                    height: 10
                };
                form.addSubmitButton({
                    label: 'Send Email'
                });
                context.response.writePage(form);
            } else {
                var request = context.request;
                email.send({
                    author: runtime.getCurrentUser().id,
                    recipients: request.parameters.recipient,
                    subject: request.parameters.subject,
                    body: request.parameters.message
                });
            }
        };

        return {
            onRequest: onRequest
        };
    });