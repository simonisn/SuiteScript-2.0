/**
* SuiteScript log global object
* @namespace
* @global
* @name log
* @type {Object}
*/

'use strict';

var log = {
    /**
    * Log a debug statement into the Script Execution Log
    *
    * @memberof log
    * @name log.debug
    * @param {string} title
    * @param details
    */
    debug: function (title, details) { },

    /**
    * Log an audit statement into the Script Execution Log
    *
    * @memberof log
    * @name log.audit
    * @param {string} title
    * @param details
    */
    audit: function (title, details) { },
    /**
    * Log an error statement into the Script Execution Log
    *
    * @memberof log
    * @name log.error
    * @param {string} title
    * @param details
    */
    error: function (title, details) { },
    /**
    * Log an emergency statement into the Script Execution Log
    *
    * @memberof log
    * @name log.emergency
    * @param {string} title
    * @param details
    */
    emergency: function (title, details) { }
};