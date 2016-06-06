/// <reference path="../N.js" />

'use strict';

/**
* Scriptable UI form page.
* @protected
* @constructor
*/
N.objects.Form = function () {
    /**
    * The form title
    * @name Form#title
    * @type string
    */
    this.title = undefined;

    /**
    * Helper function for http.writePage()
    */
    this._writeTo = undefined;

    /**
    * Adds a button to the ui form
    *
    * @param {Object} options
    * @param {String} options.id
    * @param {String} options.label
    * @param {String} options.script (optional)
    * @returns {Button}
    */
    this.addButton = function (options) { };

    /**
    *
    * @param {Object} options
    * @param {String} options.id
    * @param {String} options.label
    * @param {String[]} options.restrictToDomains (Optional)
    * @param {String} options.restrictToScriptId (Optional)
    * @param {boolean} options.restrictToCurrentUser (Optional)
    * @param {String} options.tab (Optional)
    * @returns {Field}
    */
    this.addCredentialField = function (options) { };

    /**
    *
    * @param {Object} options
    * @param {String} options.id
    * @param {String} options.label
    * @param {String} options.restrictToScriptId
    * @param {boolean} options.restrictToCurrentUser
    * @param {String} options.tab (Optional)
    * @returns {Field}
    */
    this.addSecretKeyField = function (options) { };

    /**
    * Add a field to the form
    * @param {Object} options
    * @param {string} options.id
    * @param {string} options.label
    * @param {string} options.type
    * @param {string} options.source (Optional)
    * @param {string} options.tab (Optional)
    * @returns {ui.Field}
    */
    this.addField = function (options) { };

    /**
    * Add a field group to the form
    * @param {Object} options
    * @param {string} options.id
    * @param {string} options.label
    * @param {string} options.tab (Optional)
    *
    * @return {FieldGroup}
    */
    this.addFieldGroup = function (options) { };

    /**
    * Add a link to the form
    * @param {Object} options
    * @param {string} options.type
    * @param {string} options.title
    * @param {string} options.url
    */
    this.addPageLink = function (options) { };

    /**
    * Add a Sublist to the form
    * @param {Object} options
    * @param {string} options.id
    * @param {string} options.label
    * @param {string} options.type
    * @param {string} options.tab (optional)
    * @return {Sublist}
    */
    this.addSublist = function (options) { };

    /**
    * Add a Subtab to the form
    * @param {Object} options
    * @param {string} options.id
    * @param {string} options.label
    * @param {string} options.tab (optional)
    * @return {Tab}
    */
    this.addSubtab = function (options) { };

    /**
    * Add a Tab to the form
    * @param {Object} options
    * @param {string} options.id
    * @param {string} options.label
    * @return {Tab}
    */
    this.addTab = function (options) { };

    /**
    * Add a Reset button to the form
    * @param {Object} options  (Optional)
    * @param {string} options.label (Optional)
    * @return {Button}
    */
    this.addResetButton = function (options) { };

    /**
    * Add a Submit button to the form
    * @param {Object} options  (Optional)
    * @param {string} options.label (Optional)
    * @return {Button}
    */
    this.addSubmitButton = function (options) { };

    /**
    * Get a Button object from its id
    * @param {Object} options
    * @param {string} options.id
    * @return {Button}
    */
    this.getButton = function (options) { };

    /**
    * Get a Field object from its id
    * @param {Object} options
    * @param {string} options.id
    * @return {ui.Field}
    */
    this.getField = function (options) { };

    /**
    * Get a Subtab object from its id
    * @param {Object} options
    * @param {string} options.id
    * @return {Tab}
    */
    this.getSubtab = function (options) { };

    /**
    * Get a Tab object from its id
    * @param {Object} options
    * @param {string} options.id
    * @return {ui.Tab}
    */
    this.getTab = function (options) { };

    /**
    * Get all the Tab objects
    * @return {String[]}
    */
    this.getTabs = function (options) { };

    /**
    * Get a Sublist object from its id
    * @param {Object} options
    * @param {string} options.id
    * @return {Sublist}
    */
    this.getSublist = function (options) { };

    /**
    * Insert a field before another field
    * @param {Object} options
    * @param {ui.Field} options.field
    * @param {String} options.nextfield
    */
    this.insertField = function (options) { };

    /**
    * Insert a sublist before another sublist
    * @param {Object} options
    * @param {ui.Sublist} options.sublist
    * @param {String} options.nextsublist
    */
    this.insertSublist = function (options) { };

    /**
    * Insert a Tab before another tab
    * @param {Object} options
    * @param {ui.Tab} options.tab
    * @param {String} options.nexttab
    */
    this.insertTab = function (options) { };

    /**
    * Remove a button given its id
    * @param {Object} options
    * @param {string} options.id
    */
    this.removeButton = function (options) { };

    /**
    * Set the default values of many fields
    * @param {Object[]} values
    */
    this.setDefaultValues = function (options) { };

    /**
    * Set the client script id to be used in the form
    * @param {Object}options
    * @param {String}options.script
    */
    this.clientScript = function (options) { };
};