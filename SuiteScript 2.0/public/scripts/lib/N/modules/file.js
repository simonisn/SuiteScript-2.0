/// <reference path="../N.js" />

/**
* SuiteScript file module
*
* @module N/file
* @suiteScriptVersion 2.x
*
*/

'use strict';

N.file = {};

N.file.module = function () {   

    /**
    * Instantiate a file object (specifying the name, type, and contents which are base-64 encoded for binary types.)
    * @restriction Server SuiteScript only
    *
    * @param {Object} options
    * @param {string} options.name file name
    * @param {string} options.fileType file type i.e. PLAINTEXT, HTMLDOC, PDF, WORD, see file.Type enum
    * @param {string} options.contents string containing file contents (must be base-64 encoded for binary types)
    * @return {N.objects.File}
    *
    * @throws {error.SuiteScriptError} REQUIRED_PARAM_MISSING if options is missing or one of mandatory options properties not set
    * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG if options.fileType is an invalid type
    *
    * @since 2015.2
    */
    this.create = function (options) { };

    /**
    * Load a file from the file cabinet (via its internal ID or path).
    *
    * @governance 10 units
    * @restriction Server SuiteScript only
    *
    * @param {Object} options
    * @param {number|string} options.id internal ID or path to file in the file cabinet (i.e. /SuiteScript/foo.js)
    * @return {N.objects.File}
    *
    * @throws {error.SuiteScriptError} REQUIRED_PARAM_MISSING if idOrPath parameter is missing
    * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST attempt to load a file from non-existing path
    * @throws {error.SuiteScriptError} INSUFFICIENT_PERMISSION attempt to load a file with non-existing ID
    *
    * @since 2015.2
    */
    this.load = function (options) { return new File(); };

    /**
    * Delete a file from the file cabinet.
    *
    * @governance 20 units
    * @restriction Server SuiteScript only
    *
    * @param {Object} options
    * @param {number|string} options.id internal ID of file to be deleted
    *
    * @throws {error.SuiteScriptError} REQUIRED_PARAM_MISSING if id parameter is missing
    *
    * @since 2015.2
    */
    this['delete'] = function (options) { };

    /**
    * Enum for file types.
    * @enum {string}
    * @readonly
    */
    function FileType() {
        this.AUTOCAD = 'AUTOCAD';
        this.BMPIMAGE = 'BMPIMAGE';
        this.CSV = 'CSV';
        this.EXCEL = 'EXCEL';
        this.FLASH = 'FLASH';
        this.FREEMARKER = 'FREEMARKER';
        this.GIFIMAGE = 'GIFIMAGE';
        this.GZIP = 'GZIP';
        this.HTMLDOC = 'HTMLDOC';
        this.ICON = 'ICON';
        this.JAVASCRIPT = 'JAVASCRIPT';
        this.JPGIMAGE = 'JPGIMAGE';
        this.JSON = 'JSON';
        this.MESSAGERFC = 'MESSAGERFC';
        this.MP3 = 'MP3';
        this.MPEGMOVIE = 'MPEGMOVIE';
        this.MSPROJECT = 'MSPROJECT';
        this.PDF = 'PDF';
        this.PJPGIMAGE = 'PJPGIMAGE';
        this.PLAINTEXT = 'PLAINTEXT';
        this.PNGIMAGE = 'PNGIMAGE';
        this.POSTSCRIPT = 'POSTSCRIPT';
        this.POWERPOINT = 'POWERPOINT';
        this.QUICKTIME = 'QUICKTIME';
        this.RTF = 'RTF';
        this.SMS = 'SMS';
        this.STYLESHEET = 'STYLESHEET';
        this.TAR = 'TAR';
        this.TIFFIMAGE = 'TIFFIMAGE';
        this.VISIO = 'VISIO';
        this.WEBAPPPAGE = 'WEBAPPPAGE';
        this.WEBAPPSCRIPT = 'WEBAPPSCRIPT';
        this.WORD = 'WORD';
        this.XMLDOC = 'XMLDOC';
        this.ZIP = 'ZIP';
    }

    /**
    * File Type         
    * @returns {String}
    */
    this.Type = new FileType();

    /**
    * Enum for file encodings.
    * @enum {string}
    * @readonly
    */
    function FileEncoding() {
        this.UTF_8 = 'UTF-8';
        this.WINDOWS_1252 = 'windows-1252';
        this.ISO_8859_1 = 'ISO-8859-1';
        this.GB18030 = 'GB18030';
        this.SHIFT_JIS = 'SHIFT_JIS';
        this.MAC_ROMAN = 'MacRoman';
        this.GB2312 = 'GB2312';
        this.BIG5 = 'Big5';
    }
    /**
    * File Encoding
    * @returns {String}
    */
    this.Encoding = new FileEncoding();
};

N.file.objects = (function () {
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
    function File() {
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
    }

    return {
        File: File
    };
})();

define([], function () {
    return new N.file.module();
});