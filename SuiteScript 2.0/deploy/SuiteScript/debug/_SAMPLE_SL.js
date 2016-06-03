/**
 *@NApiVersion 2.x
 *@NScriptType Suitelet
 */

/// <reference path="../lib/N/modules/ui.js" />
/// <reference path="../lib/N/modules/runtime.js" />
/// <reference path="../lib/N/modules/email.js" />
/// <reference path="../lib/N/shared/scriptcontext.js" />

'use strict';

define(['N/ui', 'N/email', 'N/runtime'],
    /**
    *
    * @param {N.modules.UI} ui
    * @param {N.modules.Email} email
    * @param {N.modules.Runtime} runtime
    */
    function (ui, email, runtime) {
        var onRequest;

        /**
        * Definition of the Suitelet script trigger point.
        *
        * @param {N.shared.ScriptContext.SL} context
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
        }
        return {
            onRequest: onRequest
        };
    });