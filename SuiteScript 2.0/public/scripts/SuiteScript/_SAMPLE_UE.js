﻿/// <reference path="../lib/N/modules/record.js" />
/// <reference path="../lib/N/modules/search.js" />
/// <reference path="../lib/N/modules/ui/serverWidget.js" />
/// <reference path="../lib/N/scriptcontext.js" />


/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */

'use strict';

define(['N/record', 'N/search', 'N/ui/serverWidget'],
    /**
    * Anonymous function executed when module loads
    *
    * @param {N.record.module} record
    * @param {N.search.module} search
    * @param {N.ui.serverWidget.module} serverWidget
    */
    function (record, search, serverWidget) {
        
        var beforeLoad,
            beforeSubmit,
            afterSubmit;        
        
        /** 
        * Executed whenever a read operation occurs on a record, and prior to returning the record or page.
        * These operations include navigating to a record in the UI, reading a record in web services, and loading a record.
        * This event cannot be used to source standard records. Use the pageInit client script for this purpose.
        * NOTE: beforeLoad user events cannot be triggered when you load/access an online form.
        *
        * @param {N.scriptContext.UE} context
        */
        beforeLoad = function (context) {                        
            
        };

        /**
        * Executed prior to any write operation on the record.
        * Changes made to the current record in this script persist after the write operation.
        * This event can be used to validate the submitted record, perform any restriction and permission checks, and perform any last-minute changes to the current record.
        *
        * @param {N.scriptContext.UE} context
        */
        beforeSubmit = function (context) {            

        };

        /**
        * Executed immediately after a write operation on a record.
        * This event can be used to include email notification, re-direct the browser, create dependent records, and synchronize with an external system.
        * NOTE: Asynchronous afterSubmit user events are only supported during webstore checkout.
        *
        * @param {N.scriptContext.UE} context
        */
        afterSubmit = function (context) {

        };

    return {
        beforeLoad: beforeLoad,
        beforeSubmit: beforeSubmit,
        afterSubmit: afterSubmit
    };
});