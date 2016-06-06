/// <reference path="../N.js" />

'use strict';

/**
* Primary object used to encapsulate a record object.
*
* @protected
* @param {Object} options
* @param {{id: *, remoteId: *, isDynamic: boolean, isUserEvent: boolean, isSubrecord: boolean, recordContext: *, metadata: *, data: *}} options.recordObj
* @return {N.objects.Record}
* @constructor
*/
N.objects.Record = function () {

    /**
    * The id of the record
    * @name Record#id
    * @type number
    * @readonly
    * @throws READ_ONLY when setting the property is attempted
    */
    this.id = undefined;

    /**
    * The type of the record
    * @name Record#type
    * @type string
    * @readonly
    * @throws READ_ONLY when setting the property is attempted
    */
    this.type = undefined;

    /**
    * return true if record is a dynamic record
    * @name Record#isDynamic
    * @type boolean
    * @readonly
    * @throws READ_ONLY when setting the property is attempted
    */
    this.isDynamic = undefined;

    /**
    * save record updates to the system
    * @governance 20 units for transactions, 4 for custom records, 10 for all other records
    *
    * @param {Object} options
    * @param {boolean} [options.enablesourcing=false] enable sourcing during record update
    * @param {boolean} [options.ignoremandatoryfields=false] ignore mandatory field during record submission
    * @return {number} id of submitted record
    */
    this.save = function (options) { };

    /**
    * JSON.stringify() implementation.
    * @returns {Object}
    */
    this.toJSON = function (options) { };

    /**
    * Returns the object type name (Record)
    * @returns {string}
    */
    this.toString = function (options) { };

    /**
    * remove body field data
    * @param {Object} options
    * @param {string} options.fieldId
    * @return {N.objects.Record}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
    */
    this.removeField = function (options) { };

    /**
    * return array of names of all body fields, including machine header field and matrix header fields
    * @return {Array}
    */
    this.getFields = function (options) { };

    /**
    * returns the specified sublist
    * @param {Object} options
    * @param {string} options.sublistId
    * @return {Sublist}
    * @return {Array}
    */
    this.getSublist = function (options) { };

    /**
    * return array of names of all sublists
    * @return {Array}
    */
    this.getSublists = function (options) { };

    /**
    * return array of names of all fields in a sublist
    * @param {Object} options
    * @param {string} options.sublistId
    * @return {Array}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined
    */
    this.getSublistFields = function (options) { };

    /**
    * return value of the field
    * @param {Object} options
    * @param {string} options.fieldId
    * @return {number|Date|string|Array}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
    * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
    */
    this.getValue = function (options) { };

    /**
    * set value of the field
    * @param {Object} options
    * @param {string} options.fieldId
    * @param {number|Date|string|Array} options.value
    * @return {N.objects.Record}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
    */
    this.setValue = function (options) { };

    /**
    * get value of the field in text representation
    * @param {Object} options
    * @param {string} options.fieldId
    * @return {string}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
    * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setText
    */
    this.getText = function (options) { };

    /**
    * set value of the field by text representation
    *
    * @param {Object} options
    * @param {string} options.fieldId
    * @param {string} options.text
    * @return {N.objects.Record}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
    */
    this.setText = function (options) { };

    /**
    * return field object from record's sublist
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {string} options.fieldId
    * @param {boolean} options.line
    * @return {Record.Field}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
    * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
    */
    this.getSublistField = function (options) { };

    /**
    * return line count of sublist
    * @param {Object} options
    * @param {string} options.sublistId
    * @return {number}
    */
    this.getLineCount = function (options) { };

    /**
    * insert a sublist line
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {number} options.line
    * @param {boolean} [ignoreRecalc=fasle] options.ignoreRecalc ignore recalc scripting
    * @return {N.objects.Record}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
    * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not editable
    */
    this.insertLine = function (options) { };

    /**
    * remove a sublist line
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {number} options.line
    * @param {boolean} [ignoreRecalc=fasle] options.ignoreRecalc ignore recalc scripting
    * @return {N.objects.Record}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
    * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not editable
    */
    this.removeLine = function (options) { };

    /**
    * return the line number for the first occurrence of a field value in a sublist and return -1 if not found
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {string} options.fieldId
    * @param {number|Date|string|Array} options.value
    * @return {number}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing or undefined
    */
    this.findSublistLineWithValue = function (options) { };

    /**
    * return value of a sublist field
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {string} options.fieldId
    * @param {number} options.line
    * @return {number|Date|string|Array}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
    * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
    * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
    */
    this.getSublistValue = function (options) { };

    /**
    * set the value of a sublist field
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {string} options.fieldId
    * @param {number} options.line
    * @param {number|Date|string|Array} options.value
    * @return {N.objects.Record}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
    * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
    * @restriction only available in deferred dynamic record
    */
    this.setSublistValue = function (options) { };

    /**
    * return value of a sublist field in text representation
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {string} options.fieldId
    * @param {number} options.line
    * @return {string}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
    * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
    * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setSublistText
    */
    this.getSublistText = function (options) { };

    /**
    * set the value of a sublist field in text representation
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {string} options.fieldId
    * @param {number} options.line
    * @param {string} options.text
    * @return {N.objects.Record}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
    * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
    * @restriction only available in deferred dynamic record
    */
    this.setSublistText = function (options) { };

    /**
    * return a value indicating if the field has a subrecord
    * @param {Object} options
    * @param {string} options.fieldId
    * @return {boolean}
    */
    this.hasSubrecord = function (options) { };

    /**
    * get the subrecord for the associated field
    * @param {Object} options
    * @param {string} options.fieldId
    * @return {Subrecord}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
    * @throws {error.SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
    * @throws {error.SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
    */
    this.getSubrecord = function (options) { };

    /**
    * remove the subrecord for the associated field
    * @param {Object} options
    * @param {string} options.fieldId
    * @return {N.objects.Record}
    */
    this.removeSubrecord = function (options) { };

    /**
    * return a value indicating if the associated sublist field has a subrecord
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {string} options.fieldId
    * @param {number} options.line
    * @restriction only available in deferred dynamic record
    * @return {boolean}
    */
    this.hasSublistSubrecord = function (options) { };

    /**
    * get the subrecord for the associated sublist field
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {string} options.fieldId
    * @param {number} options.line
    * @restriction only available in deferred dynamic record
    * @return {Subrecord}
    */
    this.getSublistSubrecord = function (options) { };

    /**
    * remove the subrecord for the associated sublist field
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {string} options.fieldId
    * @param {number} options.line
    * @restriction only available in deferred dynamic record
    * @return {N.objects.Record}
    */
    this.removeSublistSubrecord = function (options) { };

    /**
    * set the value for the associated header in the matrix
    * @param {Object} options
    * @param {string} options.sublistId the id of sublist in which the matrix is in.
    * @param {string} options.fieldId the id of the matrix field
    * @param {number} options.column the column number for the field
    * @param {string} options.value the value to set it to
    * @param {boolean} [options.ignoreFieldChange] Ignore the field change script (default false)
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
    * @return {N.objects.Record}
    */
    this.setMatrixHeaderValue = function (options) { };

    /**
    * get the value for the associated header in the matrix
    * @param {Object} options
    * @param {string} options.sublistId the id of sublist in which the matrix is in.
    * @param {string} options.fieldId the id of the matrix field
    * @param {number} options.column the column number for the field
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
    * @return {number|Date|string}
    */
    this.getMatrixHeaderValue = function (options) { };

    /**
    * set the value for the associated field in the matrix
    * @param {Object} options
    * @param {string} options.sublistId the id of sublist in which the matrix is in.
    * @param {string} options.fieldId the id of the matrix field
    * @param {number} options.line the line number for the field
    * @param {number} options.column the column number for the field
    * @param {string} options.value the value to set it to
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
    * @restriction only available in deferred dynamic record
    * @return {N.objects.Record}
    */
    this.setMatrixSublistValue = function (options) { };

    /**
    * get the value for the associated field in the matrix
    * @param {Object} options
    * @param {string} options.sublistId the id of sublist in which the matrix is in.
    * @param {string} options.fieldId the id of the matrix field
    * @param {number} options.line the line number for the field
    * @param {number} options.column the column number for the field
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
    * @return {number|Date|string}
    */
    this.getMatrixSublistValue = function (options) { };

    /**
    * get the field for the specified header in the matrix
    * @param {Object} options
    * @param {string} options.sublistId the id of sublist in which the matrix is in.
    * @param {string} options.fieldId the id of the matrix field
    * @param {number} options.column the column number for the field
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
    * @return {Record.Field}
    */
    this.getMatrixHeaderField = function (options) { };

    /**
    * get the field for the specified sublist in the matrix
    * @param {Object} options
    * @param {string} options.sublistId the id of sublist in which the matrix is in.
    * @param {string} options.fieldId the id of the matrix field
    * @param {number} options.column the column number for the field
    * @param {number} options.line the line number for the field
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
    * @return {Record.Field}
    */
    this.getMatrixSublistField = function (options) { };

    /**
    * returns the line number of the first line that contains the specified value in the specified column of the matrix
    * @param {Object} options
    * @param {string} options.sublistId the id of sublist in which the matrix is in.
    * @param {string} options.fieldId the id of the matrix field
    * @param {number} options.value the column number for the field
    * @param {number} options.column the line number for the field
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
    * @return {number}
    */
    this.findMatrixSublistLineWithValue = function (options) { };

    /**
    * returns the number of columns for the specified matrix.
    * @param {Object} options
    * @param {string} options.sublistId the id of sublist in which the matrix is in.
    * @param {string} options.fieldId the id of the matrix field
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
    * @return {number}
    */
    this.getMatrixHeaderCount = function (options) { };

    /**
    * cancel the current selected line
    * @param {Object} options
    * @param {string} options.sublistId
    * @return {N.objects.Record}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
    * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
    * @restriction only available in dynamic record
    */
    this.cancelLine = function (options) { };

    /**
    * commit the current selected line
    * @param {Object} options
    * @param {string} options.sublistId
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing
    * @return {N.objects.Record}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
    * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
    * @restriction only available in dynamic record
    */
    this.commitLine = function (options) { };

    /**
    * select line
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {number} options.line
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
    * @return {DynamicRecord}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing or undefined
    * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or line index
    * @restriction only available in dynamic record
    */
    this.selectLine = function (options) { };

    /**
    * select a new line at the end of sublist
    * @param {Object} options
    * @param {string} options.sublistId
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing
    * @return {N.objects.Record}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
    * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
    * @restriction only available in dynamic record
    */
    this.selectNewLine = function (options) { };

    /**
    * return value of a sublist field on the current selected sublist line
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {string} options.fieldId
    * @return {number|Date|string|Array}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
    * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
    * @restriction only available in dynamic record
    */
    this.getCurrentSublistValue = function (options) { };

    /**
    * set the value for field in the current selected line
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {string} options.fieldId
    * @param {number|Date|string|Array} options.value
    * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
    * @returns {DynamicRecord}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
    * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
    * @restriction only available in dynamic record
    */
    this.setCurrentSublistValue = function (options) { };

    /**
    * return the value for field in the current selected line by text representation
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {string} options.fieldId
    * @return {number|Date|string|Array}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
    * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
    * @restriction only available in dynamic record
    */
    this.getCurrentSublistText = function (options) { };

    /**
    * set the value for field in the current selected line by text representation
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {string} options.fieldId
    * @param {number|Date|string|Array} options.text
    * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
    * @returns {DynamicRecord}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
    * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
    * @restriction only available in dynamic record
    */
    this.setCurrentSublistText = function (options) { };

    /**
    * return the line number of current selected line
    * @param {Object} options
    * @param {string} options.sublistId
    * @returns {number}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
    * @restriction only available in dynamic record
    */
    this.getCurrentSublistIndex = function (options) { };

    /**
    * return a value indicating if the associated sublist field has a subrecord on the current line
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {string} options.fieldId
    * @restriction only available in dynamic record
    * @return {boolean}
    */
    this.hasCurrentSublistSubrecord = function (options) { };

    /**
    * get the subrecord for the associated sublist field on the current line
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {string} options.fieldId
    * @restriction only available in dynamic record
    * @return {Subrecord}
    */
    this.getCurrentSublistSubrecord = function (options) { };

    /**
    * remove the subrecord for the associated sublist field on the current line
    * @param {Object} options
    * @param {string} options.sublistId
    * @param {string} options.fieldId
    * @restriction only available in dynamic record
    * @return {N.objects.Record}
    */
    this.removeCurrentSublistSubrecord = function (options) { };

    /**
    * set the value for the line currently selected in the matrix
    * @param {Object} options
    * @param {string} options.sublistId - the id of sublist in which the matrix is in.
    * @param {string} options.fieldId - the id of the matrix field
    * @param {number} options.column - the column number for the field
    * @param {string} options.value - the value to set it to
    * @param {boolean} options.ignoreFieldChange (optional) - Ignore the field change script (default false)
    * @param {boolean} options.fireSlavingSync (optional) - Flag to perform slaving synchronously (default false)
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
    * @restriction only available in dynamic record
    * @return {N.objects.Record}
    */
    this.setCurrentMatrixSublistValue = function (options) { };

    /**
    * get the value for the line currently selected in the matrix
    * @param {Object} options
    * @param {string} options.sublistId - the id of sublist in which the matrix is in.
    * @param {string} options.fieldId - the id of the matrix field
    * @param {number} options.column - the column number for the field
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
    * @restriction only available in dynamic record
    * @return {number|Date|string}
    */
    this.getCurrentMatrixSublistValue = function (options) { };
};

