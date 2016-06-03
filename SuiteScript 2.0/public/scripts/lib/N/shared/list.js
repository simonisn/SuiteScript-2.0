/// <reference path="../N.js" />

'use strict';

/**
* Scriptable UI List page.
* @param delegate
* @protected
* @constructor
*/
N.shared.List = function () {
    /**
    * @name ListStyle  Display style for this list
    * @type string
    * @since 2015.2
    */
    this.style = undefined;

    /**
    * @name List#title  Display style for this list
    * @type string
    * @since 2015.2
    */
    this.title = undefined;

    /**
    * Add a Button to the list page
    * @param {Object} options
    * @param {string} options.id
    * @param {string} options.label
    * @param {string} options.script  (optional)
    * @return {Button}
    */
    this.addButton = function (options) { };

    /**
    * Add a Column to the List page
    * @param {Object} options
    * @param {string} options.id
    * @param {string} options.type
    * @param {string} options.label
    * @param {string} options.align (optional)
    * @return {ListColumn}
    */
    this.addColumn = function (options) { };

    /**
    * Add an Edit or Edit/View column
    * @param {Object} options
    * @param {string} options.column
    * @param {string} options.showView   (optional)
    * @param {string} options.showHrefCol (optional)
    * @return {ListColumn}
    */
    this.addEditColumn = function (options) { };

    /**
    * Adds a navigation cross-link to the list page
    * @param {Object} options
    * @param {string} options.type
    * @param {string} options.title
    * @param {string} options.url
    * @return {List}
    */
    this.addPageLink = function (options) { };

    /**
    * Add a row (Array of name/value pairs or search.Result)
    * @param {Object} options
    * @param {string} options.row
    * @return {ListColumn}
    */
    this.addRow = function (options) { };

    /**
    * Adds multiple rows (Array of search.Result or name/value pair Arrays)
    * @param {Object} options
    * @param {string} options.rows
    * @return {ListColumn}
    */
    this.addRows = function (options) { };

    /**
    * Sets the Client SuiteScript used for this page.
    * @param {Object} options
    * @param {string} options.id
    * @return {ListColumn}
    */
    this.clientScript = function (options) { };
};