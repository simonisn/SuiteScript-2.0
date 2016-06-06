/// <reference path="../N.js" />

/**
* SuiteScript module
*
* @module N/search
* @suiteScriptVersion 2.x
*
*/

'use strict';

N.modules.Search = function () {
    


    /**
    * Creates a new search. The search can be modified and run as an ad-hoc search, without saving it. Alternatively,
    * calling Search.save() will save the search to the database, so it can be reused later in the UI or using search.load().
    * @param {Object} options  the options object
    * @param {string} options.type  the record internal ID of the record type you are searching
    * @param {N.objects.Filter|Filter[]|Array[]} options.filters (optional)  a single filter object or an array of filter objects or a search filter expression
    * @param {N.objects.Column|Column[]|string} options.columns (optional)  a single search.Column or string or an array that contains elements of the two types
    * @param {string} options.title (optional)  name of the search (when saved)
    * @param {string} options.id (optional)  customer ID of the search (when saved), it's a string starting with 'customsearch'
    * @returns {N.objects.Search} the created search
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
    * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_FILTER_EXPR when filters parameter is not a valid filter, array of filters or filter expression
    * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COLUMN when columns parameter is not a valid column, string, or array of the two
    * @since 2015.2
    */
    this.create = function (options) { };

    /**
    * Loads an existing saved search. The saved search could have been created using the UI, or created using search.create()
    * in conjunction with Search.save().
    * @governance 5 units
    * @param {Object} options  the options object
    * @param {string} options.id  the customer ID or internal ID of the search
    * @returns {N.objects.Search} the loaded search
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
    * @throws {error.SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
    * @since 2015.2
    */
    this.load = function (options) { };

    /**
    * Deletes an existing saved search.
    * @governance 5 units
    * @param {Object} options  the options object
    * @param {string} options.id  the customer ID or internal ID of the search
    * @returns {void}
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
    * @throws {error.SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
    * @since 2015.2
    */
    this['delete'] = function (options) { };

    /**
    * Performs a search for duplicate records based on the account's Duplicate Detection configuration.
    * Note that this API only works for records that support duplicate record detection. These records include
    * customers, leads, prospects, contacts, partners, and vendors. Use either field or id parameter depending
    * on how you want to search for duplicates.
    * @governance 10 units
    * @param {Object} options  the options object
    * @param {string} options.type  the record type you are checking duplicates for
    * @param {Object} options.fields (optional)  a set of key/value pairs used to detect duplicate (e.g. email:'foo@bar.com')
    * @param {number} options.id (optional)  internalId of existing record
    * @returns {N.objects.Result[]} array of result objects corresponding to the duplicate records; results are limited to 1000 rows; returns empty array if nothing is found
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
    * @since 2015.2
    */
    this.duplicates = function (options) { return []; };

    /**
    * Performs a global search against a single keyword or multiple keywords.
    * @governance 10 units
    * @param {Object} options  the options object
    * @param {string} options.keywords  global search keywords string or expression
    * @returns {N.objects.Result[]} array of result objects containing the following four columns: name, type (as shown in the UI), info1, and info2
    *                                   results are limited to 1000 rows; returns empty array if nothing is found
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
    * @since 2015.2
    */
    this.global = function (options) { return []; };

    /**
    * Performs a search for one or more body fields on a record. This function supports joined-field lookups.
    * Note that the notation for joined fields is: join_id.field_name
    * @governance 1 unit
    * @param {Object} options  the options object
    * @param {string} options.type  the record internal ID of the record type you are searching
    * @param {string} options.id  the internalId of the record
    * @param {string|string[]} options.columns  array of column/field names to look up, or a single column/field name
    * @returns {Object} search results in the form of key/value pairs; example:
    *     {
    *         foo: 'bar',
    *         name.join: 'othervalue',
    *         select: [{
    *             value: '123',
    *             text: 'Some UI text'
    *         }],
    *         multiselect1: [],
    *         multiselect2: [{
    *             value: '3',
    *             text: 'Green'
    *         },{
    *             value: '5',
    *             text: 'Pinkish yellow'
    *         }]
    *     }
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
    * @since 2015.2
    */
    this.lookupFields = function (options) { };

    /**
    * Creates a search.Column object.
    * @param {Object} options  the options object
    * @param {string} options.name  the search return column name
    * @param {string} options.join (optional)  the join ID for this search return column
    * @param {Summary} options.summary (optional)  the summary type for this column
    * @param {string} options.formula (optional)  formula used for this column
    * @param {string} options.function (optional)  function used for this column
    * @param {string} options.label (optional)  label used for this column
    * @param {string} options.sort (optional)  sort direction for this column; use values from the Sort enum
    * @returns {N.objects.Column} the created column object
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
    * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COLUMN_SUM if an unknown summary type is provided
    * @throws {error.SuiteScriptError} INVALID_SRCH_FUNCTN if an unknown function is provided
    * @since 2015.2
    */
    this.createColumn = function (options) { };

    /**
    * Creates a search.Filter object.
    * @param {Object} options  the options object
    * @param {string} options.name  internal ID of the search field
    * @param {string} options.join (optional)  if executing a joined search, this is the join ID used for the search field specified in the name parameter
    * @param {string} options.operator  search operator
    * @param {string|Date|number|string[]|Date[]} options.values (optional)  values to be used as filter parameters
    * @param {string} options.formula (optional)  formula used for this filter
    * @param {Summary} options.summary (optional)  summary type used for this filter
    * @returns {N.objects.Filter} the created filter object
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
    * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_OPERATOR if an unknown operator is provided
    * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_FILTER_SUM if an unknown summary type is provided
    * @since 2015.2
    */
    this.createFilter = function (options) { };

    /**
    * Enum for search operators.
    * @enum {string}
    */
    function SearchOperator() {
        this.AFTER = 'after';
        this.ALLOF = 'allof';
        this.ANY = 'any';
        this.ANYOF = 'anyof';
        this.BEFORE = 'before';
        this.BETWEEN = 'between';
        this.CONTAINS = 'contains';
        this.DOESNOTCONTAIN = 'doesnotcontain';
        this.DOESNOTSTARTWITH = 'doesnotstartwith';
        this.EQUALTO = 'equalto';
        this.GREATERTHAN = 'greaterthan';
        this.GREATERTHANOREQUALTO = 'greaterthanorequalto';
        this.HASKEYWORDS = 'haskeywords';
        this.IS = 'is';
        this.ISEMPTY = 'isempty';
        this.ISNOT = 'isnot';
        this.ISNOTEMPTY = 'isnotempty';
        this.LESSTHAN = 'lessthan';
        this.LESSTHANOREQUALTO = 'lessthanorequalto';
        this.NONEOF = 'noneof';
        this.NOTAFTER = 'notafter';
        this.NOTALLOF = 'notallof';
        this.NOTBEFORE = 'notbefore';
        this.NOTBETWEEN = 'notbetween';
        this.NOTEQUALTO = 'notequalto';
        this.NOTGREATERTHAN = 'notgreaterthan';
        this.NOTGREATERTHANOREQUALTO = 'notgreaterthanorequalto';
        this.NOTLESSTHAN = 'notlessthan';
        this.NOTLESSTHANOREQUALTO = 'notlessthanorequalto';
        this.NOTON = 'noton';
        this.NOTONORAFTER = 'notonorafter';
        this.NOTONORBEFORE = 'notonorbefore';
        this.NOTWITHIN = 'notwithin';
        this.ON = 'on';
        this.ONORAFTER = 'onorafter';
        this.ONORBEFORE = 'onorbefore';
        this.STARTSWITH = 'startswith';
        this.WITHIN = 'within';
    }
    this.Operator = new SearchOperator();

    /**
    * Enum for search summary types.
    * @enum {string}
    */
    function SearchSummary() {
        this.GROUP = 'GROUP';
        this.COUNT = 'COUNT';
        this.SUM = 'SUM';
        this.AVG = 'AVG';
        this.MIN = 'MIN';
        this.MAX = 'MAX';
    }
    this.Summary = new SearchSummary();

    /**
    * Enum for sort directions.
    * @enum {string}
    */
    function SearchSort() {
        this.ASC = 'ASC';
        this.DESC = 'DESC';
        this.NONE = 'NONE';
    }
    this.Sort = new SearchSort();
};

define([], function () {
    return new N.modules.Search();
});