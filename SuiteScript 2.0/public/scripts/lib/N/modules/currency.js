/// <reference path="../N.js" />

/**
* SuiteScript currency module
*
* @module N/currency
* @suiteScriptVersion 2.x
*
*/

'use strict';

N.modules.Currency = function () {
    /**
    * Retrieves the exchange rate between two currencies based on the specified date.
    * The return value comes from the Exchange Rate column of the Currency Exchange Rates record.
    *
    * @governance 10 units
    *
    * @param {Object} options
    * @param {int|string} options.source The source currency ID or String
    * @param {int|string} options.target The target currency ID or String
    * @param {Date} options.date [optional] The date of the desired effective currency rate. Defaults to today.
    *
    * @return {number}
    *
    * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if id parameter is missing
    * @throws {error.SuiteScriptError} SSS_INVALID_CURRENCY_ID if an invalid currency (source or target) is specified
    *
    * @since 2015.2
    */
    this.exchangeRate = function (options) { };
};

define([], function () {
    return new N.modules.Currency();
});