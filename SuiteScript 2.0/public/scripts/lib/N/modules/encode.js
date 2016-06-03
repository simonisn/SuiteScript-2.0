/// <reference path="../N.js" />

/**
* SuiteScript encode module
*
* @module N/encode
* @suiteScriptVersion 2.x
*
*/

'use strict';


N.modules.Encode = function () {
    /**
    * @param {Object} options
    * @param {string} options.string String to encode
    * @param {string} options.inputEncoding Encoding of the input string.
    * @param {string} options.outputEncoding Encoding to apply to the output string.
    * @return {string} Reencoded string
    *
    * @since 2015.1
    */
    this.convert = function (options) { };

    /**
    * @enum
    */
    function EncodeEncoding() {
        this.UTF_8 = 'UTF_8';
        this.BASE_16 = 'BASE_16';
        this.BASE_32 = 'BASE_32';
        this.BASE_64 = 'BASE_64';
        this.BASE_64_URL_SAFE = 'BASE_64_URL_SAFE';
        this.HEX = 'HEX';
    }
    this.Encoding = new EncodeEncoding();
};
   
define([], function () {
    return new N.modules.Encode();
});