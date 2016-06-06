/// <reference path="../N.js" />

/**
* SuiteScript module
*
* @module N/config
* @suiteScriptVersion 2.x
*/

'use strict';

N.config.module = function () {

    /**
    * Load a configuration object with a specific type
    * @governance 10 units
    * @restriction Server SuiteScript only
    *
    * @param {Object} options
    * @param {string} options.type one of the Type values
    * @param {boolean} options.isDynamic load record in dynamic or deferred dynamic mode
    * @return {N.record.objects.Record}
    *
    * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE
    *
    * @since 2015.2
    */
    this.load = function (options) { };

    /**
    * Enum configuration type values.
    * @readonly
    * @enum {string}
    * @since 2015.2
    */
    function ConfigType() {
        this.USER_PREFERENCES = 'USERPREFERENCES';
        this.COMPANY_INFORMATION = 'COMPANYINFORMATION';
        this.COMPANY_PREFERENCES = 'COMPANYPREFERENCES';
        this.ACCOUNTING_PREFERENCES = 'ACCOUNTINGPREFERENCES';
        this.ACCOUNTING_PERIODS = 'ACCOUNTINGPERIODS';
        this.TAX_PERIODS = 'TAXPERIODS';
        this.FEATURES = 'COMPANYFEATURES';
    }

    this.Type = new ConfigType();
};

define([], function () {
    return new N.config.module();
});