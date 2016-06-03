/// <reference path="../N.js" />

/**
* SuiteScript file module
*
* @module N/file
* @suiteScriptVersion 2.x
*
*/

'use strict';

N.modules.File = function () {   

    /**
    * Instantiate a file object (specifying the name, type, and contents which are base-64 encoded for binary types.)
    * @restriction Server SuiteScript only
    *
    * @param {Object} options
    * @param {string} options.name file name
    * @param {string} options.fileType file type i.e. PLAINTEXT, HTMLDOC, PDF, WORD, see file.Type enum
    * @param {string} options.contents string containing file contents (must be base-64 encoded for binary types)
    * @return {N.shared.File}
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
    * @return {N.shared.File}
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

define([], function () {
    return new N.modules.File();
});