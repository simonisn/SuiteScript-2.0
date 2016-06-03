/**
* SuiteScript error module
*
* @module N/error
* @suiteScriptVersion 2.x
*
*/

'use strict';


function Error() {
    /**
    *
    * @protected
    * @constructor
    */
    function SuiteScriptError() {
        /**
        * @name SuiteScriptError#id
        * @type string
        * @readonly
        * @since 2015.2
        */
        this.id = undefined;
        /**
        * @name SuiteScriptError#name
        * @type string
        * @readonly
        * @since 2015.2
        */
        this.name = undefined;
        /**
        * @name SuiteScriptError#message
        * @type string
        * @readonly
        * @since 2015.2
        */
        this.message = undefined;
        /**
        * @name SuiteScriptError#stack
        * @type string[]
        * @readonly
        * @since 2015.2
        */
        this.stack = undefined;
    }

    /**
    *
    * @protected
    * @constructor
    */
    function UserEventError() {
        /**
        * @name SuiteScriptError#recordId
        * @type string
        * @readonly
        * @since 2015.2
        */
        this.recordId = undefined;
        /**
        * @name SuiteScriptError#eventType
        * @type string
        * @readonly
        * @since 2015.2
        */
        this.eventType = undefined;
    }

    /**
    * Create a new Error object
    *
    * @param {Object} options
    * @param {string} options.name
    * @param {string} options.message
    * @param {string} options.notifyOff
    * @return {SuiteScriptError}
    */
    this.create = function (options) { return new SuiteScriptError(); };
}

define([], function () {
    return new Error();
});