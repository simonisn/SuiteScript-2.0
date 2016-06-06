/// <reference path="../N.js" />

/**
* SuiteScript module
*
* @module N/transaction
* @suiteScriptVersion 2.x
*
*/

'use strict';

N.transaction = {};

N.transaction.module = function () {
    /**
    * Void a transaction record object based on provided type, id
    *
    * @param {string} type record type to be voided
    * @param {number|string} id record id to be voided
    * @return {number} the id is the voided record or new reverse journal entry based on preference
    *
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
    * @throws {error.SuiteScriptError} INVALID_RECORD_TYPE if type is not voidable
    * @throws {error.SuiteScriptError} THAT_RECORD_DOES_NOT_EXIST if record does not exist
    *
    * @since 2015.2
    */
    this['void'] = function (options) { };
};
 
define([], function () {
    return new N.transaction.module();
});