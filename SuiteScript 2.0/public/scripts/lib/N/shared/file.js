/// <reference path="../N.js" />

'use strict';

/**
* Return a new instance of file.File used for accessing and manipulating files in the file cabinet.
*
* @protected
* @class File
* @classdesc Encapsulation of files (media items) in the file cabinet.
* @alias file.File
*
* @since 2015.2
*/
N.shared.File = function () {
    /**
    * The id of the file (if stored in the FC).
    * @name File#id
    * @type number
    * @readonly
    * @throws READ_ONLY when setting the property is attempted
    */
    this.id = undefined;
    /**
    * The size of the file in bytes.
    * @name File#size
    * @type number
    * @readonly
    * @throws READ_ONLY when setting the property is attempted
    */
    this.size = undefined;
    /**
    * Return the URL of the file (if stored in the FC).
    * @name File#url
    * @type string
    * @readonly
    * @throws READ_ONLY when setting the property is attempted
    */
    this.url = undefined;
    /**
    * The path to the file in the file cabinet.
    * @name File#path
        
    * @type string
    * @readonly
    * @throws READ_ONLY when setting the property is attempted
    */
    this.path = undefined;
    /**
    * The type of the file.
    * @name File#fileType
    * @type string
    * @readonly
    * @throws READ_ONLY when setting the property is attempted
    */
    this.fileType = undefined;
    /**
    * The type of the file is text-based.
    * @name File#isText
    * @type boolean
    * @readonly
    * @throws READ_ONLY when setting the property is attempted
    */
    this.isText = undefined;
    /**
    * The character encoding for the file.
    * @name File#encoding
    * @type string
    */
    this.encoding = undefined;
    /**
    * The name of the file.
    * @name File#name
    * @type string
    */
    this.name = undefined;
    /**
    * The internal ID of the folder that this file is in.
    * @name File#folder
    * @type number
    */
    this.folder = undefined;
    /**
    * The file description.
    * @name File#description
    * @type string
    */
    this.description = undefined;
    /**
    * The file's inactive status.
    * @name File#isInactive
    * @type boolean
    */
    this.isInactive = undefined;
    /**
    * The file's "Available without Login" status.
    * @name File#isOnline
    * @type boolean
    */
    this.isOnline = undefined;

    /**
    * Return the value (base64 encoded for binary types) of the file.
    * Note: Contents are lazy loaded and must be less than 5MB in size in order to access.
    * @returns {string}
    */
    this.getContents = function (options) { };

    /**
    * Add/update a file in the file cabinet based on the properties of this object.
    *
    * @governance 20 units
    * @restriction Server SuiteScript only
    *
    * @throws REQUIRED_PARAM_MISSING when the folder property is not set
    * @throws CANNOT_SAVE_FILE if trying to save to a non-existing folder or a different save error occurs
    *
    * @return {number} return internal ID of file in the file cabinet
    *
    * @since 2015.2
    */
    this.save = function (options) { };

    /**
    * Returns the object type name (file.File)
    *
    * @returns {string}
    */
    this.toString = function (options) { };

    /**
    * JSON.stringify() implementation.
    *
    * @returns {{type: string, id: *, name: *, description: *, path: *, url: *, folder: *, fileType: *, isText: *, size: *, encoding: *, isInactive: *, isOnline: *, contents: *}}
    */
    this.toJSON = function (options) { };
};