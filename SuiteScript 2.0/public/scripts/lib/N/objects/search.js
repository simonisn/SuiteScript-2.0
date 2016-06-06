/// <reference path="../N.js" />

'use strict';

/**
* Return a new instance of search.Result object.
*
* @classDescription Encapsulation of a search result.
* @protected
* @constructor
*
* @since 2015.2
*/
N.objects.Result = function() {

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
};


/**
* Return a new instance of search.ResultSet object.
*
* @classDescription Encapsulation of a search result set.
* @protected
* @constructor
*
* @since 2015.2
*/
N.objects.ResultSet = function() {
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
};

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
N.objects.Search = function() {
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
};

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
N.objects.Filter = function () {
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
};

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
N.objects.Column = function() {
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
};
