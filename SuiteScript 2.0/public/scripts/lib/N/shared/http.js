/// <reference path="../N.js" />
/// <reference path="form.js" />

'use strict';

/**
* Returns a new instance of HTTP Request
* NOTE: This structure is not currently available
*
*/
N.shared.httpRequest = function () {
    /**
    * Method - 'GET' or 'POST'
    * NOTE: Currently, no ENUM exists.
    *
    * @type {string} 
    */
    this.method = undefined;

    /**
    * Parameters - Object containing received parameters
    *
    * @type {Object}
    */
    this.parameters = {};
};

N.shared.httpResponse = function () {
    /**
    * Generates a page using a page element object (Form)
    *
    * @param {N.shared.Form} form
    */
    this.writePage = function (form) { };
};