/// <reference path="../N.js" />

/**
* SuiteScript module
*
* @module N/url
* @suiteScriptVersion 2.x
*
*/

'use strict';

N.url = {};

N.url.module = function () {
    /**
    * @param {Object} opts
    * @param {string} opts.recordType
    * @param {string} opts.recordId
    * @param {boolean} opts.isEditMode
    * @param {Object} opts.params Per url.format({query
    *
    * @return {String} url
    *
    * @since 2015.1
    */
    this.resolveRecord = function (options) { };

    /**
    *
    * @param {Object} options
    * @param {string} options.id
    * @param {Map} options.parameters (optional) url parameters
    *
    * @return {String} url
    *
    * @since 2015.1
    */
    this.resolveTaskLink = function (options) { };

    /**
    * @param {Object} opts
    * @param {string} opts.scriptId
    * @param {string} opts.deploymentId
    * @param {boolean} opts.returnExternalUrl
    * @param {Object} opts.params Per url.format({query
    *
    * @return {String} url
    *
    * @since 2015.1
    */
    this.resolveScript = function (options) { };

    /**
    * @param {Object} options
    * @param {string} options.domain
    * @param {Object} options.parameters query string data params as an object
    *
    * @return {String} url
    *
    * @since 2015.1
    */
    this.format = function (options) { };
};

define([], function () {
    return new N.url.module();
});