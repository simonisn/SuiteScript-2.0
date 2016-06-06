/// <reference path="../N.js" />

/**
* SuiteScript module
*
* @module N/redirect
* @suiteScriptVersion 2.x
*
*/

'use strict';

N.redirect = {};

N.redirect.module = function () {
    /**
    * Redirect to a URL
    *
    * @governance 0 units
    * @restriction Can only direct to external URL by suitelet without login
    *
    * @param {Object} options
    * @param {string} options.url
    * @param {Object} options.parameters (optional)
    */
    this.redirect = function (options) { };

    /**
    * Redirect to a suitelet
    *
    * @governance 0 units
    * @restriction Suitelet and UE only
    *
    * @param {Object} options
    * @param {string} options.scriptId  script Id
    * @param {string} options.deploymentId deployment Id
    * @param {boolean} options.isExternal (optional) default to false indicate it is external Suitelet URL
    * @param {Object} options.parameters (optional)
    */
    this.toSuitelet = function (options) { };

    /**
    * Redirect to a record
    *
    * @governance 0 units
    * @restriction Suitelet and UE only
    *
    * @param {Object} options
    * @param {string} options.type record type
    * @param {string} options.id  record Id
    * @param {boolean} options.isEditMode (optional) default to false
    * @param {Object} options.parameters (optional)
    */
    this.toRecord = function (options) { };

    /**
    * Redirect to a task link
    *
    * @governance 0 units
    * @restriction Suitelet and UE only
    *
    * @param {Object} options
    * @param {string} options.id task Id
    * @param {Object} options.parameters (optional)
    */
    this.toTaskLink = function (options) { };

    /**
    * Redirect to saved search
    *
    * @governance 5 units
    * @restriction Supppprted only by afterSubmit user event scripts and client scripts
    *
    * @param {Object} options
    * @param {number} options.id search id
    */
    this.toSavedSearch = function (options) { };

    /**
    * Redirect to saved search results
    *
    * @governance 5 units
    * @restriction Supppprted only by afterSubmit user event scripts and client scripts
    *
    * @param {Object} options
    * @param {number} options.id search id
    */
    this.toSavedSearchResult = function (options) { };

    /**
    * Redirect to search
    *
    * @governance 0 units
    * @restriction Supppprted only by afterSubmit user event scripts and client scripts
    *
    * @param {Object} options
    * @param {Search} options.search
    */
    this.toSearch = function (options) { };

    /**
    * Redirect to search results
    *
    * @governance 0 units
    * @restriction Supppprted only by afterSubmit user event scripts and client scripts
    *
    * @param {Object} options
    * @param {Search} options.Search
    */
    this.toSearchResult = function (options) { };
};

define([], function () {
    return new N.redirect.module();
});