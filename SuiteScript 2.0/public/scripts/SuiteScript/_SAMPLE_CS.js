/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */

/// <reference path="../lib/N/objects/scriptcontext.js" />
/// <reference path="../lib/N/modules/record.js" />
/// <reference path="../lib/N/modules/search.js" />

'use strict';

define(['N/record', 'N/search'],
    /**
    * Anonymous function executed when module loads
    *
    * @param {N.modules.Record} record
    * @param {N.modules.Search} search
    */
    function (record, search) {
    
    var fieldChanged,
        lineInit,
        pageInit,
        postSourcing,
        saveRecord,
        sublistChanged,
        validateDelete,
        validateField,
        validateInsert,
        validateLine;        

    /**    
    * Executed when a field is changed by a user or client side call.
    * This event may also execute directly through beforeLoad user event scripts.
    *
    * @param {N.objects.ScriptContext.CS} context
    */
    fieldChanged = function (context) {
        
    };

    /**
    * Executed when an existing line is selected.
    * This event can behave like a pageInit event for line items in an inlineeditor or editor sublist.
    *
    * @param {N.objects.ScriptContext.CS} context
    */
    lineInit = function (context) {

    };

    /** 
    * Executed when the page completes loading or when the form is reset.    
    *
    * @param {N.objects.ScriptContext.CS} context
    */
    pageInit = function (context) {

    };

    /**
    * Executed on transaction forms when a field that sources information from another field is modified.
    * This event behaves like a fieldChanged event after all dependent field values have been set. 
    * The event waits for any slaved or cascaded field changes to complete before calling the user defined function.
    * NOTE: The event is not triggered by field changes for a field that does not have any slaved fields.
    *
    * @param {N.objects.ScriptContext.CS} context
    */
    postSourcing = function (context) {

    };

    /**
    * Executed after the submit button is pressed but before the form is submitted.
    *
    * @param {N.objects.ScriptContext.CS} context
    * @returns {Boolean} Boolean true if the record is valid. Boolean false to suppress form submission
    */
    saveRecord = function (context) {

    };

    /**
    * Executed after a sublist is inserted, removed, or edited.
    *
    * @param {N.objects.ScriptContext.CS} context
    */
    sublistChanged = function (context) {

    };

    /**
    * Executed when removing an existing line from an edit sublist.
    * 
    * @param {N.objects.ScriptContext.CS} context
    * @returns {Boolean} Boolean true if the sublist line is valid. Boolean false to block the removal.
    */
    validateDelete = function (context) {

    };

    /**
    * Executes when a field is about to be changed by a user or client side call.
    * This event executes on fields added in beforeLoad user event scripts.
    * NOTE: This event does not apply to drop-down select or check box fields.
    *
    * @param {N.objects.ScriptContext.CS} context
    * @returns {Boolean} Boolean true if the field is valid. Boolean false to prevent the field value from changing.
    */
    validateField = function (context) {

    };

    /**
    * Executed when you insert a line into an edit sublist.
    *
    * @param {N.objects.ScriptContext.CS} context
    * @returns {Boolean} Boolean true if the sublist line is valid. Boolean false to block the insert.
    */
    validateInsert = function (context) {

    };

    /**
    * Executed before a line is added to an inlineeditor or editor sublist.
    * This event can behave like a saveRecord event for line items in an inlineeditor and editor sublist.
    *
    * @param {N.objects.ScriptContext.CS} context
    * @returns {Boolean} Boolean true if the sublist line is valid. Boolean false to reject the operation.
    */
    validateLine = function (context) {

    };

    return {        
        fieldChanged: fieldChanged,
        lineInit: lineInit,
        pageInit: pageInit,
        postSourcing: postSourcing,
        saveRecord: saveRecord,
        sublistChanged: sublistChanged,
        validateDelete: validateDelete,
        validateField: validateField,
        validateInsert: validateInsert,
        validateLine: validateLine
    };
});