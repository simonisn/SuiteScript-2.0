/// <reference path="../N.js" />

/**
* SuiteScript module
*
* @module N/https
* @suiteScriptVersion 2.x
*
*/

'use strict';

N.modules.HTTPS = function () {
    /**
    * Enum for HTTP methods.
    * @enum {string}
    */
    function HttpsMethod() {
        this.GET = 'GET';
        this.POST = 'POST';
        this.PUT = 'PUT';
        this.DELETE = 'DELETE';
        this.HEAD = 'HEAD';
    }
    this.Method = new HttpsMethod();

    /**
    * Enum describing available Commerce API Cache Durations.
    * @enum {string}
    * @readonly
    */
    function HttpsCacheDuration() {
        this.UNIQUE = 'UNIQUE';
        this.SHORT = 'SHORT';
        this.MEDIUM = 'MEDIUM';
        this.LONG = 'LONG';
    }
    this.CacheDuration = new HttpsCacheDuration();

    /**
    *
    * @protected
    * @constructor
    */
    function SecureString() {
        /**
        *
        * @param {Object} options
        * @param {string} options.toEncoding
        * @returns {SecureString}
        */
        this.convertEncoding = function (options) {
            return new SecureString();
        };

        /**
        *
        * @param {Object} options
        * @param {string} options.input
        * @param {string} options.inputEncoding
        * @returns {SecureString}
        */
        this.appendString = function (options) {
            return new SecureString();
        };

        /**
        *
        * @param {Object} options
        * @param {SecureString} options.secureString
        * @returns {SecureString}
        */
        this.appendSecureString = function (options) {
            return new SecureString();
        };
        /**
        * Helper function for token.appendToken()
        */
        this._appendMe = undefined;

        /**
        *
        * @param {Object} options
        * @param {string} options.algorithm
        * @returns {SecureString}
        */
        this.hash = function (options) {
            return new SecureString();
        };

        /**
        *
        * @param {Object}options
        * @param {string} options.algorithm
        * @param {SecretKey} options.key
        * @returns {SecureString}
        */
        this.hmac = function (options) {
            return new SecureString();
        };
    }

    /**
    * Return a new instance of ClientResponse used to store the result of a HTTP request.
    *
    * @protected
    * @classDescription Encapsulation of nlobjServerResponse.
    * @return {http.ClientResponse}
    * @constructor
    *
    * @since 2015.2
    */
    function ClientResponse() {
        /**
        * Response code.
        * @name ClientResponse#code
        * @type number
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.code = undefined;
        /**
        * Response headers.
        * @name ClientResponse#headers
        * @type Object
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.headers = undefined;
        /**
        * Response body.
        * @name ClientResponse#body
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.body = undefined;

        /**
        * Returns the object type name (http.ClientResponse)
        *
        * @returns {string}
        */
        this.toString = function (options) { };

        /**
        * JSON.stringify() implementation.
        *
        * @returns {{type: string, code: *, headers: *, body: *}}
        */
        this.toJSON = function (options) { };
    }

    /**
    * Returns a new instance of SecretKey used for hmac, cipher and decipher
    *
    * @protected
    * @class
    * @classdesc
    * @param guid
    * @param encoding
    * @return {crypto.SecretKey}
    *
    * @constructor
    */
    function SecretKey() {
        /**
        * @type string
        */
        this.guid = undefined;
        /**
        * @type string
        */
        this.encoding = undefined;
    }

    /**
    * Send a HTTPS GET request and return server response.
    *
    * @governance 10 units
    * @restriction Server SuiteScript only
    *
    * @param {Object} config
    * @param {string} config.url the HTTP URL being requested
    * @param {Object} config.headers (optional) request HTTP headers
    * @return {ClientResponse}
    *
    * @throws {error.SuiteScriptError} REQUIRED_PARAM_MISSING if a required parameter is missing
    * @throws {error.SuiteScriptError} UNKNOWN_PARAM if an unknown parameter is present in config
    * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
    *
    * @since 2015.2
    */
    this.get = function (options) {
        return new ClientResponse();
    };

    /**
    * Send a HTTPS POST request and return server response.
    *
    * @governance 10 units
    * @restriction Server SuiteScript only
    *
    * @param {Object} config
    * @param {string} config.url the HTTP URL being requested
    * @param {string|Object} config.body POST data
    * @param {Object} config.headers (optional) request HTTP headers
    * @return {ClientResponse}
    *
    * @throws {error.SuiteScriptError} REQUIRED_PARAM_MISSING if a required parameter is missing
    * @throws {error.SuiteScriptError} UNKNOWN_PARAM if an unknown parameter is present in config
    * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
    *
    * @since 2015.2
    */
    this.post = function (options) {
        return new ClientResponse();
    };

    /**
    * Send a HTTPS PUT request and return server response.
    *
    * @governance 10 units
    * @restriction Server SuiteScript only
    *
    * @param {Object} config
    * @param {string} config.url the HTTP URL being requested
    * @param {string|Object} config.body PUT data
    * @param {Object} config.headers (optional) request HTTP headers
    * @return {ClientResponse}
    *
    * @throws {error.SuiteScriptError} REQUIRED_PARAM_MISSING if a required parameter is missing
    * @throws {error.SuiteScriptError} UNKNOWN_PARAM if an unknown parameter is present in config
    * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
    *
    * @since 2015.2
    */
    this.put = function (options) {
        return new ClientResponse();
    };

    /**
    * Send a HTTPS DELETE request and return server response.
    *
    * @governance 10 units
    * @restriction Server SuiteScript only
    *
    * @param {Object} config
    * @param {string} config.url the HTTP URL being requested
    * @param {Object} config.headers (optional) request HTTP headers
    * @return {ClientResponse}
    *
    * @throws {error.SuiteScriptError} REQUIRED_PARAM_MISSING if a required parameter is missing
    * @throws {error.SuiteScriptError} UNKNOWN_PARAM if an unknown parameter is present in config
    * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
    *
    * @since 2015.2
    */
    this['delete'] = function (options) {
        return new ClientResponse();
    };

    /**
    * Send a HTTP request and return server response.
    *
    * @governance 10 units
    * @restriction Server SuiteScript only
    *
    * @param {Object} config
    * @param {http.Method} config.method HTTP method of the request
    * @param {string} config.url the HTTP URL being requested
    * @param {string|Object} config.body POST data; must be present if and only if method is POST
    * @param {Object} config.headers (optional) request HTTP headers
    * @return {ClientResponse}
    *
    * @throws {error.SuiteScriptError} REQUIRED_PARAM_MISSING if a required parameter is missing
    * @throws {error.SuiteScriptError} UNKNOWN_PARAM if an unknown parameter is present in config
    * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
    *
    * @since 2015.2
    */
    this.request = function (options) {
        return new ClientResponse();
    };

    /**
    *
    * @param {Object} options
    * @string {string} options.guid
    * @string {string} options.encoding
    * @return {SecretKey}
    */
    this.createSecretKey = function (options) {
        return new SecretKey();
    };

    /**
    *
    * @param {Object} options
    * @param {string} options.input
    * @param {string} options.inputEncoding (Optional) defaults to UTF_8
    * @returns {SecureString}
    */
    this.createSecureString = function (options) {
        return new SecureString();
    };

    /**
    * @enum
    */
    function HttpsEncoding() {
        this.UTF_8 = 'UTF_8';
        this.BASE_16 = 'BASE_16';
        this.BASE_32 = 'BASE_32';
        this.BASE_64 = 'BASE_64';
        this.BASE_64_URL_SAFE = 'BASE_64_URL_SAFE';
        this.HEX = 'HEX';
    }
    this.Encoding = new HttpsEncoding();

    /**
    * @enum
    */
    function HttpsHashAlg() {
        this.SHA1 = 'SHA1';
        this.SHA256 = 'SHA256';
        this.SHA512 = 'SHA512';
        this.MD5 = 'MD5';
    }
    this.HashAlg = new HttpsHashAlg();
};

define([], function () {
    return new N.modules.HTTPS();
});