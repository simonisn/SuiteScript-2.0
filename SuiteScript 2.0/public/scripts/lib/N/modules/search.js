/// <reference path="../N.js" />

/**
* SuiteScript module
*
* @module N/search
* @suiteScriptVersion 2.x
*
*/

'use strict';

N.search = {};

N.search.module = function () {   

    /**
    * Creates a new search. The search can be modified and run as an ad-hoc search, without saving it. Alternatively,
    * calling Search.save() will save the search to the database, so it can be reused later in the UI or using search.load().
    * @param {Object} options  the options object
    * @param {string} options.type  the record internal ID of the record type you are searching
    * @param {N.search.objects.Filter|Filter[]|Array[]} options.filters (optional)  a single filter object or an array of filter objects or a search filter expression
    * @param {N.search.objects.Column|Column[]|string} options.columns (optional)  a single search.Column or string or an array that contains elements of the two types
    * @param {string} options.title (optional)  name of the search (when saved)
    * @param {string} options.id (optional)  customer ID of the search (when saved), it's a string starting with 'customsearch'
    * @returns {N.search.objects.Search} the created search
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
    * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_FILTER_EXPR when filters parameter is not a valid filter, array of filters or filter expression
    * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COLUMN when columns parameter is not a valid column, string, or array of the two
    * @since 2015.2
    */
    this.create = function (options) {
        return new N.search.objects.Search();
    };

    /**
    * Loads an existing saved search. The saved search could have been created using the UI, or created using search.create()
    * in conjunction with Search.save().
    * @governance 5 units
    * @param {Object} options  the options object
    * @param {string} options.id  the customer ID or internal ID of the search
    * @returns {N.search.objects.Search} the loaded search
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
    * @throws {error.SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
    * @since 2015.2
    */
    this.load = function (options) {
        return new N.search.objects.Search();
    };

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
    * @returns {N.search.objects.Result[]} array of result objects corresponding to the duplicate records; results are limited to 1000 rows; returns empty array if nothing is found
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
    * @since 2015.2
    */
    this.duplicates = function (options) { return []; };

    /**
    * Performs a global search against a single keyword or multiple keywords.
    * @governance 10 units
    * @param {Object} options  the options object
    * @param {string} options.keywords  global search keywords string or expression
    * @returns {N.search.objects.Result[]} array of result objects containing the following four columns: name, type (as shown in the UI), info1, and info2
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
    * @returns {N.search.objects.Column} the created column object
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
    * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COLUMN_SUM if an unknown summary type is provided
    * @throws {error.SuiteScriptError} INVALID_SRCH_FUNCTN if an unknown function is provided
    * @since 2015.2
    */
    this.createColumn = function (options) {
        return new N.search.objects.Column();
    };

    /**
    * Creates a search.Filter object.
    * @param {Object} options  the options object
    * @param {string} options.name  internal ID of the search field
    * @param {string} options.join (optional)  if executing a joined search, this is the join ID used for the search field specified in the name parameter
    * @param {string} options.operator  search operator
    * @param {string|Date|number|string[]|Date[]} options.values (optional)  values to be used as filter parameters
    * @param {string} options.formula (optional)  formula used for this filter
    * @param {Summary} options.summary (optional)  summary type used for this filter
    * @returns {N.search.objects.Filter} the created filter object
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
    * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_OPERATOR if an unknown operator is provided
    * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_FILTER_SUM if an unknown summary type is provided
    * @since 2015.2
    */
    this.createFilter = function (options) {
        return new N.search.objects.Filter();
    };

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

N.search.objects = (function () {
    /**
    * Return a new instance of search.Result object.
    *
    * @classDescription Encapsulation of a search result.
    * @protected
    * @constructor
    *
    * @since 2015.2
    */
    function Result() {

        /**
        * Record type of the result.
        * @name Result#recordType
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.recordType = undefined;

        /**
        * Record internal ID of the result.
        * @name Result#id
        * @type number
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.id = undefined;

        /**
        * List of columns contained in this result.
        * @name Result#columns
        * @type Column[]
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.columns = undefined;

        /**
        * Returns the value of a specified search return column. The column may be specified in two ways:
        * 1) by providing a search.Column object
        * 2) by providing name, join and summary parameters
        * @param {search.Column} column  search return column object whose value you want to return
        * - or -
        * @param {Object} options  the options object
        * @param {string} options.name  the name of the search column whose value you want to return
        * @param {string} options.join (optional)  the join ID for this search column
        * @param {Summary} options.summary (optional)  the summary type used for this search column
        * @returns {string} string value of the search result column
        * @since 2015.2
        */
        this.getValue = function (options) { };

        /**
        * Returns the UI display name (i.e. the text value) of a specified search return column.
        * Note that this method is supported on select, image and document fields only.
        * The column may be specified in two ways:
        * 1) by providing a search.Column object
        * 2) by providing name, join and summary parameters
        * @param {Column} column  search return column object whose value you want to return
        * - or -
        * @param {Object} options  the options object
        * @param {string} options.name  the name of the search column whose value you want to return
        * @param {string} options.join (optional)  the join ID for this search column
        * @param {Summary} options.summary (optional)  the summary type used for this search column
        * @returns {string} UI display name (text value) of the search result column
        * @since 2015.2
        */
        this.getText = function (options) { };

        /**
        * Returns the object type name (search.Result)
        * @returns {string}
        */
        this.toString = function (options) { };

        /**
        * JSON.stringify() implementation.
        * @returns {Object}
        */
        this.toJSON = function (options) { };
    }

    /**
    * Return a new instance of search.ResultSet object.
    *
    * @classDescription Encapsulation of a search result set.
    * @protected
    * @constructor
    *
    * @since 2015.2
    */
    function ResultSet() {
        /**
        * List of columns contained in this result set.
        * @name ResultSet#columns
        * @type Column[]
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.columns = undefined;

        /**
        * Retrieve a slice of the search result set. Only 1000 results can be returned at a time. If there are fewer results
        * available than requested, then the array will be truncated.
        * @governance 10 units
        * @param {Object} options  the options object
        * @param {number} options.start  the index number of the first result to return, inclusive
        * @param {number} options.end  the index number of the last result to return, exclusive
        * @returns {Result[]} the requested slice of the search result set
        * @since 2015.2
        */
        this.getRange = function (options) { };

        /**
        * Calls the developer-defined callback function for every result in this set. The result set processed by each() may have maximum 4000 rows.
        * The callback function has the following signature:
        *   boolean callback(result.Result result);
        * If the return value of the callback is false, the iteration over results is stopped, otherwise it continues.
        * Note that the work done in the context of the callback function counts towards the governance of the script that called it.
        * @governance 10 units
        * @param {Function} callback  the function called for each result in the result set
        * @returns {void}
        * @since 2015.2
        */
        this.each = function (options) { };

        /**
        * Returns the object type name (search.ResultSet)
        * @returns {string}
        */
        this.toString = function (options) { };

        /**
        * JSON.stringify() implementation.
        * @returns {object}
        */
        this.toJSON = function (options) { };
    }

    /**
    * Return a new instance of search.Search object.
    *
    * @classDescription Encapsulation of a search.
    * @constructor
    * @param {string} type (optional)  the record type you are searching
    * @param {number} id  the internal ID of the search
    * @param {Filter | array of search.Filter} filters (optional)  a single filter object or an array of filters used to filter the search
    * @param {Column | string | array of [search.Column or string]} columns (optional)  columns to be returned from the search
    * @return {Search}
    * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_FILTER when provided filters contain a different type than search.Filter
    * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COLUMN when provided columns contain a different type than search.Column or string
    *
    * @since 2015.2
    */
    function Search() {
        /**
        * Search type.
        * @name Search#searchType
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.searchType = undefined;

        /**
        * Internal ID of the search.
        * @name Search#searchId
        * @type number
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.searchId = undefined;

        /**
        * Search filters.
        * @name Search#filters
        * @type Filter[] (setter accepts also a single search.Filter object)
        * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_FILTER when setting value of different type than search.Filter
        */
        this.filters = undefined;

        /**
        * Allows to set or get the search filters in the form of a search filter expression.
        * @name Search#filterExpression
        * @type Array[]
        * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_FILTER_EXPR when setting invalid search filter expression
        */
        this.filterExpression = undefined;

        /**
        * Columns to be returned from the search.
        * @name Search#columns
        * @type Column[]|string[] (setter accepts also a single search.Column or string)
        * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COLUMN when setting value of different type than search.Column or string
        */
        this.columns = undefined;

        /**
        * Name of the saved search. Needs to be set before saving the search.
        * @name Search#title
        * @type string
        */
        this.title = undefined;

        /**
        * Customer ID of the saved search (string starting with 'customsearch'). If not set, then it is automatically generated upon save.
        * @name Search#id
        * @type string
        */
        this.id = undefined;

        /**
        * Specifies whether the search is public or private.
        * @name Search#isPublic
        * @type boolean
        */
        this.isPublic = undefined;

        /**
        * Saves the current search as a saved search. Before calling save() the title property must be set. The optional
        * id property may also be set, if it's not then it's automatically generated. The title and id properties may be set:
        * 1) upon creation (parameters title and id of the options object)
        * 2) by explicitly setting the properties (e.g. Search.title = 'foo'; Search.id = 'customsearch_bar'; )
        * 3) by loading a previously saved search (the properties are inherited)
        * @governance 5 units
        * @returns {number} the internal search ID of the saved search
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if title property is not set
        * @throws {error.SuiteScriptError} NAME_ALREADY_IN_USE if the search name (title property) is not unique
        * @throws {error.SuiteScriptError} SSS_DUPLICATE_SEARCH_SCRIPT_ID if the search ID (id property) is not unique
        * @since 2015.2
        */
        this.save = function (options) { };

        /**
        * Runs the current search.
        * @returns {ResultSet} the result set object
        * @since 2015.2
        */
        this.run = function (options) { };

        /**
        * Returns the object type name (search.Search)
        * @returns {string}
        */
        this.toString = function (options) { };

        /**
        * JSON.stringify() implementation.
        * @returns {Object}
        */
        this.toJSON = function (options) { };
    }

    /**
    * Return a new instance of search.Filter object.
    *
    * @classDescription Encapsulation of a search filter.
    * @protected
    * @constructor
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
    * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_OPERATOR if an unknown operator is provided
    *
    * @since 2015.2
    */
    function Filter() {
        /**
        * Field name for this search filter.
        * @name Filter#name
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.name = undefined;

        /**
        * Join ID for this search filter.
        * @name Filter#join
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.join = undefined;

        /**
        * Filter operator.
        * @name Filter#operator
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.operator = undefined;

        /**
        * Summary type for this search filter.
        * @name Filter#summary
        * @type Summary
        * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_FILTER_SUM when setting invalid summary type
        */
        this.summary = undefined;

        /**
        * Formula used for this search filter.
        * @name Filter#formula
        * @type string
        */
        this.formula = undefined;

        /**
        * Returns the object type name (search.Filter)
        * @returns {string}
        */
        this.toString = function (options) { };

        /**
        * JSON.stringify() implementation.
        * @returns {Object}
        */
        this.toJSON = function (options) { };
    }

    /**
    * Return a new instance of search.Column object.
    *
    * @classDescription Encapsulation of a search column.
    * @protected
    * @constructor
    * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COLUMN_SUM if an unknown summary type is provided
    *
    * @since 2015.2
    */
    function Column() {
        /**
        * The name of the search column.
        * @name Column#name
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.name = undefined;

        /**
        * The join ID for this search column.
        * @name Column#join
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.join = undefined;

        /**
        * The summary type for this search column.
        * @name Column#summary
        * @type Summary
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.summary = undefined;

        /**
        * The formula used for this search column.
        * @name Column#formula
        * @type string
        */
        this.formula = undefined;

        /**
        * The label used for this search column.
        * @name Column#label
        * @type string
        */
        this.label = undefined;

        /**
        * The function used in this search column.
        * @name Column#function
        * @type string
        * @throws {error.SuiteScriptError} INVALID_SRCH_FUNCTN when setting an unknown function is attempted
        */
        this['function'] = undefined;

        /**
        * The sort direction for this search column. Use values from the Sort enum.
        * @name Column#sort
        * @type string
        */
        this.sort = undefined;

        /**
        * Returns the search column for which the minimal or maximal value should be found when returning the search.Column value.
        * For example, can be set to find the most recent or earliest date, or the largest or smallest amount for a record,
        * and then the search.Column value for that record is returned. Can only be used when summary type is MIN or MAX.
        * @param {Object} options  the options object
        * @param {string} options.name  name of the search column for which the minimal or maximal value should be found
        * @param {string} options.join  join id for this search column
        * @returns {search.Column} this search column
        * @since 2015.2
        */
        this.setWhenOrderedBy = function (options) { };

        /**
        * Returns the object type name (search.Column)
        * @returns {string}
        */
        this.toString = function (options) { };

        /**
        * JSON.stringify() implementation.
        * @returns {Object}
        */
        this.toJSON = function (options) { };
    }

    return {
        Result: Result,
        ResultSet: ResultSet,
        Filter: Filter,
        Column: Column,
        Search: Search
    };
})();

define([], function () {
    return new N.search.module();
});