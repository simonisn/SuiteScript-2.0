/// <reference path="../N.js" />

/**
* SuiteScript module
*
* @module N/sso
* @suiteScriptVersion 2.x
*
*/

'use strict';

N.sso = {};

N.sso.module = function () {
    /**
    * Generate a new SuiteSignOn token for a user
    *
    * @governance 20 units
    *
    * @param {Object} options
    * @param {string} options.suiteSignOnId
    * @return {string}
    * @throws {error.SuiteScriptError} SSO_CONFIG_REQD
    * @throws {error.SuiteScriptError} INVALID_SSO
    */
    this.generateSuiteSignOnToken = function (options) { };
};

define([], function () {
    return new N.sso.module();
});