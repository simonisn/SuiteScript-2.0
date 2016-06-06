/// <reference path="../N.js" />

/**
* SuiteScript module
*
* @module N/runtime
* @suiteScriptVersion 2.x
*
*/

'use strict';

N.runtime = {};

N.runtime.module = function () {    

    /**
    * Get the current log in user object
    * @return {N.runtime.objects.User}
    */
    this.getCurrentUser = function (options) {
        return new N.runtime.objects.User();
    };

    /**
    * Get the current executing Script object
    * @return {N.runtime.objects.Script}
    */
    this.getCurrentScript = function (options) {
        return new N.runtime.objects.Script();
    };

    /**
    * Get the current session object
    * @return {N.runtime.objects.Session}
    */
    this.getCurrentSession = function (options) {
        return new N.runtime.objects.Session();
    };

    /**
    * Check if a feature is turned on and in effect
    * @param {Object} options
    * @param { string } options.feature id of the feature
    * @return {boolean}
    */
    this.isFeatureInEffect = function (options) { };

    /**
    * @name runtime#queueCount
    * @type number
    * @readonly
    * @since 2015.2
    */
    this.queueCount = undefined;

    /**
    * @name runtime#version
    * @type string
    * @readonly
    * @since 2015.2
    */
    this.version = undefined;

    /**
    * @name runtime#accountId
    * @type string
    * @readonly
    * @since 2015.2
    */
    this.accountId = undefined;

    /**
    * @name runtime#envType
    * @type string
    * @readonly
    * @since 2015.2
    */
    this.envType = undefined;

    /**
    * @name runtime#executionContext
    * @type string
    * @readonly
    * @since 2015.2
    */
    this.executionContext = undefined;

    /**
    * get JSON format of the object
    * @return {Object}
    *
    */
    this.toJSON = function (options) { };

    /**
    * @return {string}
    *
    */
    this.toString = function (options) { };

    /**
    * @enum
    */
    function RuntimeEnvType() {
        this.SANDBOX = 'SANDBOX';
        this.PRODUCTION = 'PRODUCTION';
        this.BETA = 'BETA';
        this.INTERNAL = 'INTERNAL';
    }
    this.EnvType = new RuntimeEnvType();

    /**
        * @enum
        */
    function RuntimeContextType() {
        this.USER_INTERFACE = 'USERINTERFACE';
        this.WEBSERVICES = 'WEBSERVICES';
        this.WEBSTORE = 'WEBSTORE';
        this.PORTLET = 'PORTLET';
        this.SCHEDULED = 'SCHEDULED';
        this.SUITELET = 'SUITELET';
        this.CSV_IMPORT = 'CSVIMPORT';
        this.CUSTOM_MASSUPDATE = 'CUSTOMMASSUPDATE';
        this.WORKFLOW = 'WORKFLOW';
        this.USEREVENT = 'USEREVENT';
        this.OFFLINE_CLIENT = 'OFFLINECLIENT';
        this.ACTION = 'ACTION';
        this.DEBUGGER = 'DEBUGGER';
        this.CLIENT = 'CLIENT';
        this.SYSTEM = 'SYSTEM';
        this.BUNDLE_INSTALLATION = 'BUNDLE_INSTALLATION';
        this.RESTLET = 'RESTLET';
        this.WEBAPPLICATION = 'WEBAPPLICATION';
        this.APPPKG_INSTALL = 'APPPKGINSTALL';
        this.PAYMENTGATEWAY = 'PAYMENTGATEWAY';
        this.CONSOLRATEADJUSTOR = 'CONSOLRATEADJUSTOR';
        this.TESTPLUGIN = 'TESTPLUGIN';
        this.PROMOTIONS = 'PROMOTIONS';
        this.CUSTOMGLLINES = 'CUSTOMGLLINES';
        this.TAX_CALCULATION = 'TAXCALCULATION';
        this.SHIPPING_PARTNERS = 'SHIPPINGPARTNERS';
        this.EMAIL_CAPTURE = 'EMAILCAPTURE';
    }

    this.ContextType = new RuntimeContextType();

    /**
    * @enum
    */
    function RuntimePermission() {
        this.FULL = 4.0;
        this.EDIT = 3.0;
        this.CREATE = 2.0;
        this.VIEW = 1.0;
        this.NONE = 0.0;
    }
    this.Permission = new RuntimePermission();
};

N.runtime.objects = (function () {
    /**
    * @protected
    * @constructor
    */
    function Script() {
        /**
        * Current script log level
        * @name Script#logLevel
        * @type string
        * @readonly
        * @since 2015.2
        */
        this.logLevel = undefined;

        /**
        * Current script id
        * @name Script#id
        * @type string
        * @readonly
        * @since 2015.2
        */
        this.id = undefined;

        /**
        * Current script runtime version
        * @name Script#apiVersion
        * @type string
        * @readonly
        * @since 2015.2
        */
        this.apiVersion = undefined;

        /**
        * Percentage complete specified for the current scheduled script execution
        * @name Script#percentComplete
        * @type number
        * @throws {error.SuiteScriptError} SSS_OPERATION_UNAVAILABLE
        * @since 2015.2
        */
        this.percentComplete = undefined;

        /**
        * The deploymentId for the current script deployment
        * @name Script#deploymentId
        * @type string
        * @readonly
        * @since 2015.2
        */

        this.deploymentId = undefined;
        /**
        * The bundle IDs the current script belongs to
        * @name Script#bundleIds
        * @type array
        * @readonly
        * @since 2015.2
        */
        this.bundleIds = undefined;

        /**
        * Returns the remaining amount of unit usage for the current script
        * @return {number}
        *
        */
        this.getRemainingUsage = function (options) { };

        /**
        * Returns script parameter value which is defined per script
        *
        * @param {Object} options
        * @param { string } options.name The name of the parameter
        * @return {number|Date|string|Array}
        *
        */
        this.getParameter = function (options) { };

        /**
        * get JSON format of the object
        * @return {string}
        *
        */
        this.toJSON = function (options) { };

        /**
        * @return {string}
        *
        */
        this.toString = function (options) { };
    }

    /**
    * @protected
    * @constructor
    */
    function Session() {
        /**
        * Get the value of a user-defined session object for the current user.
        * @param {Object} options
        * @param { string } options.name The key used to store the session object
        * @return {string}
        *
        */
        this.get = function (options) { };

        /**
        * Add or set the value of a user-defined session object for the current user.
        * @param {Object} options
        * @param { string } options.name The key used to store the session object
        * @param { string } options.value The value to associate with this key in the user's session
        * @return {undefined}
        *
        */
        this.set = function (options) { };

        /**
        * get JSON format of the object
        * @return {string}
        *
        */
        this.toJSON = function (options) { };

        /**
        * @return {string}
        *
        */
        this.toString = function (options) { };
    }

    /**
    * @protected
    * @constructor
    */
    function User() {
        /**
        * Returns the currently logged in user's e-mail address
        * @name User#email
        * @type string
        * @readonly
        * @since 2015.2
        */
        this.email = undefined;

        /**
        * Returns the currently logged in user's name
        * @name User#name
        * @type string
        * @readonly
        * @since 2015.2
        */
        this.name = undefined;

        /**
        * Returns the internal ID of the currently logged in user's location
        * @name User#location
        * @type number
        * @readonly
        * @since 2015.2
        */
        this.location = undefined;

        /**
        * Returns the internal ID of the currently logged in user's department
        * @name User#department
        * @type number
        * @readonly
        * @since 2015.2
        */
        this.department = undefined;

        /**
        * Returns the internal ID of the currently logged in user's role
        * @name User#role
        * @type number
        * @readonly
        * @since 2015.2
        */
        this.role = undefined;

        /**
        * Returns the internal ID of the currently logged in user's center type (role center)
        * @name User#roleCenter  The string value of the logged in user's center - for example, SALES, ACCOUNTING, CLASSIC.
        * @type string
        * @readonly
        * @since 2015.2
        */
        this.roleCenter = undefined;

        /**
        * Returns the custom scriptId of the role (as opposed to the internal numerical ID).
        * @name User#roleId
        * @type string
        * @readonly
        * @since 2015.2
        */
        this.roleId = undefined;

        /**
        * Returns the currently logged in user's internal ID
        * @name User#id
        * @type number
        * @readonly
        * @since 2015.2
        */
        this.id = undefined;

        /**
        * Returns the internal ID of the currently logged in user's subsidiary
        * @name User#subsidiary
        * @type number
        * @readonly
        * @since 2015.2
        */
        this.subsidiary = undefined;

        /**
        * Get a user's permission level for a given permission
        * @param {Object} options
        * @param { string } options.name The internal ID of a permission
        * @return {number} one value of the Permission
        *
        */
        this.getPermission = function (options) { };

        /**
        * Get the value of a NetSuite preference
        * @param {Object} options
        * @param { string } name The internal ID of the preference
        * @return {string} The value of a system or script preference for the current user
        *
        */
        this.getPreference = function (options) { };

        /**
        * get JSON format of the object
        * @return {string}
        *
        */
        this.toJSON = function (options) { };

        /**
        * @return {string}
        *
        */
        this.toString = function (options) { };
    }

    return {
        Script: Script,
        Session: Session,
        User: User
    };
})();

define([], function () {
    return new N.runtime.module();
});