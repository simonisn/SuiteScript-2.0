/// <reference path="../N.js" />

/**
* SuiteScript module
*
* @module N/ui
* @suiteScriptVersion 2.x
*
*/

'use strict';

N.ui = {};

N.ui.module = function () {
    /**
    * Instantiate a assistant object (specifying the title, and whether to hide the menu)
    * @restriction Server SuiteScript only
    * @param {Object} config
    * @param {string} config.title form title
    * @param {boolean} config.hideNavBar (optional)
    * @return {N.ui.objects.Assistant}
    * @throws {error.SuiteScriptError} REQUIRED_PARAM_MISSING if config is missing or one of mandatory config properties not set
    * @throws {error.SuiteScriptError} CANNOT_CREATE_FORM if an error occurs during form creation
    * @since 2015.2
    */
    this.createAssistant = function (options) { };

    /**
    * Instantiate a form object (specifying the title, and whether to hide the menu)
    * @restriction Server SuiteScript only
    * @param {Object} config
    * @param {string} config.title form title
    * @param {boolean} config.hideNavBar (optional)
    * @return {N.ui.objects.Form}
    * @throws {error.SuiteScriptError} REQUIRED_PARAM_MISSING if config is missing or one of mandatory config properties not set
    * @throws {error.SuiteScriptError} CANNOT_CREATE_FORM if an error occurs during form creation
    * @since 2015.2
    */
    this.createForm = function (options) { };

    /**
    * Instantiate a List object (specifying the title, and whether to hide the navigation bar)
    * @restriction This API is available to Suitelets only.
    * @param {Object} config
    * @param {string} config.title list title
    * @param {boolean} config.hideNavBar (optional)
    * @return {N.ui.objects.List}
    * @since 2015.2
    */
    this.createList = function (options) { };

    /**
    * @enum
    */
    function UIFieldType() {
        this.TEXT = 'TEXT';
        this.RADIO = 'RADIO';
        this.LABEL = 'LABEL';
        this.EMAIL = 'EMAIL';
        this.PHONE = 'PHONE';
        this.DATE = 'DATE';
        this.DATETIME = 'DATETIME';
        this.DATETIMETZ = 'DATETIMETZ';
        this.CURRENCY = 'CURRENCY';
        this.FLOAT = 'FLOAT';
        this.INTEGER = 'INTEGER    ';
        this.CHECKBOX = 'CHECKBOX';
        this.SELECT = 'SELECT';
        this.URL = 'URL';
        this.TIMEOFDAY = 'TIMEOFDAY';
        this.TEXTAREA = 'TEXTAREA';
        this.MULTISELECT = 'MULTISELECT';
        this.IMAGE = 'IMAGE';
        this.INLINEHTML = 'INLINEHTML';
        this.PASSWORD = 'PASSWORD';
        this.HELP = 'HELP';
        this.PERCENT = 'PERCENT';
        this.LONGTEXT = 'LONGTEXT';
        this.RICHTEXT = 'RICHTEXT';
        this.FILE = 'FILE';
    }
    this.FieldType = new UIFieldType();

    /**
    * @enum
    */
    function UIFormPageLinkType() {
        this.BREADCRUMB = 'BREADCRUMB';
        this.CROSSLINK = 'CROSSLINK';
    }
    this.FormPageLinkType = new UIFormPageLinkType();

    /**
    * @enum
    */
    function UISublistType() {
        this.EDITOR = 'EDITOR';
        this.INLINEEDITOR = 'INLINEEDITOR';
        this.LIST = 'LIST';
        this.STATICLIST = 'STATICLIST';
    }
    this.SublistType = new UISublistType();

    /**
    * @enum
    */
    function UIFieldBreakType() {
        this.NONE = 'NONE';
        this.STARTCOL = 'STARTCOL';
        this.STARTROW = 'STARTROW';
    }
    this.FieldBreakType = new UIFieldBreakType();

    /**
    * @enum
    */
    function UIFieldLayoutType() {
        this.NORMAL = 'NORMAL';
        this.OUTSIDE = 'OUTSIDE';
        this.OUTSIDEBELOW = 'OUTSIDEBELOW';
        this.OUTSIDEABOVE = 'OUTSIDEABOVE';
        this.STARTROW = 'STARTROW';
        this.MIDROW = 'MIDROW';
        this.ENDROW = 'ENDROW';
    }
    this.FieldLayoutType = new UIFieldLayoutType();

    /**
    * @enum
    */
    function UIFieldDisplayType() {
        this.NORMAL = 'NORMAL';
        this.HIDDEN = 'HIDDEN';
        this.READONLY = 'READONLY';
        this.DISABLED = 'DISABLED';
        this.ENTRY = 'ENTRY';
        this.INLINE = 'INLINE';
    }
    this.FieldDisplayType = new UIFieldDisplayType();

    /**
    * @enum
    */
    function UISublistDisplayType() {
        this.NORMAL = 'NORMAL';
        this.HIDDEN = 'HIDDEN';
    }
    this.SublistDisplayType = new UISublistDisplayType();

    /**
    * @enum
    */
    function UILayoutJustification() {
        this.CENTER = 'CENTER';
        this.LEFT = 'LEFT';
        this.RIGHT = 'RIGHT';
    }
    this.LayoutJustification = new UILayoutJustification();

    /**
    * @enum
    */
    function UIListStyle() {
        this.GRID = 'grid';
        this.REPORT = 'report';
        this.PLAIN = 'plain';
        this.NORMAL = 'normal';
    }
    this.ListStyle = new UIListStyle();

    /**
    * Return an instance of ui.Tab
    * @protected
    * @constructor
    */

};

N.ui.objects = (function () {   

    function Tab() {
        /**
        * The label of the field group
        * @name Field#label
        * @type String
        */
        this.label = undefined;

        /**
        * @name Field#helpText
        * @type number
        * @readonly
        */
        this.helpText = undefined;

        /**
        * Helper property for insertTab
        */
        this._insertTab = undefined;
    }

    /**
    * Return an instance on ui.Sublist
    * @protected
    * @constructor
    */
    function Sublist() {
        /**
        * The label of the field group
        * @name Field#label
        * @type String
        */
        this.label = undefined;

        /**
        * The number of lines in the list.
        * @name Field#lineCount
        * @type number
        * @readonly
        */
        this.lineCount = undefined;

        /**
        * @name Field#uniqueFieldId
        * @type number
        * @readonly
        */
        this.uniqueFieldId = undefined;

        /**
        *
        * @name Field#totallingFieldId
        * @type string
        * @readonly
        */
        this.totallingFieldId = undefined;

        /**
        *
        * @name Field#displayType
        * @type string
        * @readonly
        */
        this.displayType = undefined;

        /**
        *
        * @name Field#helpText
        * @type string
        * @readonly
        */
        this.helpText = undefined;

        /**
        * Helper property for insertSubList
        */
        this._insertSublist = undefined;

        /**
        * Adds a button to the sublit
        *
        * @param {Object} options
        * @param {String} options.id
        * @param {String} options.label
        * @param {String} options.script (optional)
        * @returns {Button}
        */
        this.addButton = function (options) { };

        /**
        * Get the value of a field on the list
        *
        * @param {Object} options
        * @param {String} options.id
        * @param {number} options.line
        * @returns {String}
        */
        this.getSublistValue = function (options) { };

        /**
        * Set the value of a field on the list
        *
        * @param {Object} options
        * @param {String} options.id
        * @param {number} options.line
        * @param {String} options.value
        * @returns {String}
        */
        this.setSublistValue = function (options) { };

        /**
        * Adds refresh all buttons to the sublist
        *
        * @returns {Button}
        */
        this.addRefreshButton = function (options) { };

        /**
        * Adds a mark all button to the sublist
        *
        * @returns {Button[]}
        */
        this.addMarkAllButtons = function (options) { };

        /**
        * Add a field to the form
        * @param {Object} options
        * @param {string} options.id
        * @param {string} options.label
        * @param {string} options.type
        * @param {string} options.source (Optional)
        * @param {string} options.tab (Optional)
        * @returns {Field}
        */
        this.addField = function (options) { };
    }

    /**
    * Return an instance of ui.FieldGroup
    * @protected
    * @constructor
    */
    function FieldGroup() {
        /**
        * Is the field group collapsible.
        * @name Field#isCollapsible
        * @type boolean
        */
        this.isCollapsible = undefined;

        /**
        * Is the field group collapsed
        * @name Field#isCollapsed
        * @type boolean
        */
        this.isCollapsed = undefined;

        /**
        * Is the field group's border hidden
        * @name Field#isBorderHidden
        * @type boolean
        */
        this.isBorderHidden = undefined;

        /**
        * Is the field group single column
        * @name Field#isBorderHidden
        * @type boolean
        */
        this.isSingleColumn = undefined;

        /**
        * The label of the field group
        * @name Field#label
        * @type String
        */
        this.label = undefined;
    }

    /**
    * Return an instance of ui.Field
    * @protected
    * @constructor
    */
    function Field() {
        /**
        * The id of the field.
        * @name Field#id
        * @type String
        * @readonly
        */
        this.id = undefined;

        /**
        * The type of the field.
        * @name Field#FieldType
        * @type ui.FieldType
        * @readonly
        */
        this.type = undefined;

        /**
        * The breakType of the field
        * @name Field#type
        * @type string
        */
        this.breakType = undefined;

        /**
        * The layout type of the field
        * @name Field#type
        * @type ui.layoutType
        */
        this.layoutType = undefined;

        /**
        * The link text of the field
        * @name Field#type
        * @type string
        */
        this.linkText = undefined;

        /**
        * The max length of the field
        * @name Field#maxLength
        * @type number
        */
        this.maxLength = undefined;

        /**
        * Is the field mandatory
        * @name Field#isMandatory
        * @type boolean
        */
        this.isMandatory = undefined;

        /**
        * The alias of the field
        * @name Field#alias
        * @type String
        */
        this.alias = undefined;

        /**
        * The default value of the field
        * @name Field#defaultValue
        * @type String
        */
        this.defaultValue = undefined;

        /**
        * The display size of the field
        * @name Field#displaySize
        * @type String
        */
        this.displaySize = undefined;

        /**
        * The display type of the field
        * @name Field#displayType
        * @type String
        */
        this.displayType = undefined;

        /**
        * The display type of the field
        * @name Field#richTextHeight
        * @type number
        */
        this.richTextHeight = undefined;

        /**
        * The display type of the field
        * @name Field#richTextWidth
        * @type number
        */
        this.richTextWidth = undefined;

        /**
        * The label of the field
        * @name Field#label
        * @type String
        */
        this.label = undefined;

        /**
        * The padding of the field
        * @name Field#label
        * @type number
        */
        this.padding = undefined;

        /**
        * Helper property for insertField
        */
        this._insertField = undefined;

        /**
        * Get the select options for a field
        * @param {Object} options
        * @param {string} options.filter (optional)
        * @param {string} options.filteroperator (optional)
        * @returns {*|Array}
        */
        this.getSelectOptions = function (options) { };

        /**
        * Set help text for a field
        * @param {Object} options
        * @param {string} options.help
        * @param {boolean} options.showInlineForAssistant (optional)
        */
        this.setHelpText = function (options) { };

        /**
        * Add a select option to a select field
        * @param {Object} options
        * @param {string} options.value
        * @param {string} options.text
        * @param {boolean} options.isSelected (optional)
        */
        this.addSelectOption = function (options) { };
    }

    /**
    *
    * @protected
    * @constructor
    */
    function Button() {
        /**
        * Is the button disabled
        * @name Button#isDisabled
        * @type boolean
        */
        this.isDisabled = undefined;

        /**
        * The label of the button
        * @name Button#label
        * @type string
        */
        this.label = undefined;

        /**
        * Is the button hidden
        * @name Button#isHidden
        * @type boolean
        *
        */
        this.isHidden = undefined;
    }

    /**
    *
    * @protected
    * @constructor
    */
    function AssistantStep() {
        /**
        * The id of the field.
        * @name Field#id
        * @type String
        * @readonly
        */
        this.id = undefined;

        /**
        * The label of the step
        * @name Field#label
        * @type String
        */
        this.label = undefined;

        /**
        * @name Field#stepNumber
        * @type Number
        */
        this.stepNumber = undefined;

        /**
        * @name Field#helpText
        * @type Number
        */
        this.helpText = undefined;

        /**
        * Helper function for assistant.setCurrentStep()
        */
        this._makeMeCurrentStep = undefined;

        /**
        * Get all ids for fields in a list
        * @param {Object} options
        * @param {String} options.group
        * @return {String[]}
        */
        this.getSublistFieldIds = function (options) { };

        /**
        * @return {String[]}
        */
        this.getSubmittedSublistIds = function (options) { };

        /**
        * Get all ids for fields in the assistant step
        * @return {String[]}
        */
        this.getFieldIds = function (options) { };

        /**
        * Get the value of a field
        * @param {Object} options
        * @param {String} options.id
        * @return {String|String[]}
        */
        this.getValue = function (options) { };

        /**
        * Get the number of lines in a sublist
        * @param {Object} options
        * @param {String} options.group
        * @return {number}
        */
        this.getLineCount = function (options) { };

        /**
        * Get the number of lines in a sublist
        * @param {Object} options
        * @param {String} options.group
        * @param {String} options.id
        * @param {String} options.line
        * @return {String}
        */
        this.getSublistValue = function (options) { };
    }

    /**
    * Scriptable UI assistant page.
    * @protected
    * @constructor
    */
    function Assistant() {
        /**
        * Is the button disabled
        * @name Assistant#currentStep
        * @type AssistantStep
        */
        this.currentStep = undefined;

        /**
        *
        * @name Assistant#errorHtml
        * @type {String}
        */
        this.errorHtml = undefined;

        /**
        *
        * @name Assistant#finishedHtml
        * @type {String}
        */
        this.finishedHtml = undefined;

        /**
        *
        * @name Assistant#hideStepNumber
        * @type {boolean}
        */
        this.hideStepNumber = undefined;

        /**
        *
        * @name Assistant#isNotOrdered
        * @type {boolean}
        */
        this.isNotOrdered = undefined;

        /**
        *
        * @name Assistant#title
        * @type {String}
        */
        this.title = undefined;

        /**
        *
        * @name Assistant#hideAddToShortcutsLink
        * @type {boolean}
        */
        this.hideAddToShortcutsLink = undefined;

        /**
            * Set the default values of many fields
            * @name {Object[]} Assistant#defaultValues
            */
        this.defaultValues = undefined;

        /**
        * Set the client script id to be used in the form
        * @param {Object}options
        * @param {String}options.script
        */
        this.clientScript = function (options) { };

        /**
        * @param {Object}options
        * @param {String}options.title
        * @param {String}options.text1
        * @param {String}options.text2
        */
        this.setSplash = function (options) { };

        /**
        * Get a Field object assistant its id
        * @param {Object} options
        * @param {string} options.id
        * @return {Field}
        */
        this.getField = function (options) { };

        /**
        * Get a FieldGroup  object from its id
        * @param {Object} options
        * @param {string} options.id
        * @return {Field}
        */
        this.getFieldGroup = function (options) { };

        /**
        * Get the last action taken buy the uset
        * @return {String}
        */
        this.getLastAction = function (options) { };

        /**
        * Get the last step in  taken buy the user
        * @return {AssistantStep}
        */
        this.getLastStep = function (options) { };

        /**
        * Get the next step in the assistant
        * @return {AssistantStep}
        */
        this.getNextStep = function (options) { };

        /**
        * Get the number of steps
        * @return {number}
        */
        this.getStepCount = function (options) { };

        /**
        * Has error
        * @return {boolean}
        */
        this.hasErrorHtml = function (options) { };

        /**
        * Is the assistant finished
        * @return {boolean}
        */
        this.isFinished = function (options) { };

        /**
        * Get the a step given its id
        * @param {Object} options
        * @param {string} options.id
        * @return {AssistantStep}
        */
        this.getStep = function (options) { };

        /**
        * Get a Sublist  object from its id
        * @param {Object} options
        * @param {string} options.id
        * @return {Sublist}
        */
        this.getSublist = function (options) { };

        /**
        * Add a step to the assistant
        * @param {Object} options
        * @param {string} options.id
        * @param {string} options.label
        */
        this.addStep = function (options) { };

        /**
        * Add a field to the form
        * @param {Object} options
        * @param {string} options.id
        * @param {string} options.label
        * @param {string} options.type
        * @param {string} options.source (Optional)
        * @param {string} options.tab (Optional)
        * @returns {Field}
            */
        this.addField = function (options) { };

        /**
        * Add a field group to the assistnat
        * @param {Object} options
        * @param {string} options.id
        * @param {string} options.label
        * @return {FieldGroup}
        */
        this.addFieldGroup = function (options) { };

        /**
        * Add a Sublist to the assistant
        * @param {Object} options
        * @param {string} options.id
        * @param {string} options.label
        * @param {string} options.type
        * @return {Sublist}
        */
        this.addSublist = function (options) { };

        /**
        * Get all ids for fields in the assistant
        *
        * @return {String[]}
        */
        this.getFieldIds = function (options) { };

        /**
        * Get all ids for field groups in the assistant
        *
        * @return {String[]}
        */
        this.getFieldGroupIds = function (options) { };

        /**
        * Get all ids for sublists in the assistant
        *
        * @return {String[]}
        */
        this.getSublistIds = function (options) { };

        /**
        * Get all steps in the assistant
        *
        * @return {AssistantStep[]}
        */
        this.getSteps = function (options) { };

        /**
        * Helper function for http.writePage()
        */
        this._writeTo = undefined;
    }

    /**
    * Scriptable UI List Column.
    * @param delegate
    * @protected
    * @constructor
    */
    function ListColumn() {
        /**
        * Adds a URL parameter (optionally defined per row) to the list column's URL
        * @param {Object} options
        * @param {string} options.param
        * @param {string} options.value
        * @param {string} options.dynamic  (optional)
        * @return {ListColumn}
        */
        this.addParamToURL = function (options) { };

        /**
        * @name ColumnList#label Label this list column
        * @type string
        */
        this.label = undefined;

        /**
            * 
        * Sets the base URL for the list column
        * @param {Object} options
        * @param {string} options.url
        * @param {string} options.dynamic  (optional)
        * @return {ListColumn}
        */
        this.setURL = function (options) { };
    }

    /**
    * Scriptable UI form page.
    * @protected
    * @constructor
    */
    function Form() {
        /**
        * The form title
        * @name Form#title
        * @type string
        */
        this.title = undefined;

        /**
        * Helper function for http.writePage()
        */
        this._writeTo = undefined;

        /**
        * Adds a button to the ui form
        *
        * @param {Object} options
        * @param {String} options.id
        * @param {String} options.label
        * @param {String} options.script (optional)
        * @returns {Button}
        */
        this.addButton = function (options) { };

        /**
        *
        * @param {Object} options
        * @param {String} options.id
        * @param {String} options.label
        * @param {String[]} options.restrictToDomains (Optional)
        * @param {String} options.restrictToScriptId (Optional)
        * @param {boolean} options.restrictToCurrentUser (Optional)
        * @param {String} options.tab (Optional)
        * @returns {Field}
        */
        this.addCredentialField = function (options) { };

        /**
        *
        * @param {Object} options
        * @param {String} options.id
        * @param {String} options.label
        * @param {String} options.restrictToScriptId
        * @param {boolean} options.restrictToCurrentUser
        * @param {String} options.tab (Optional)
        * @returns {Field}
        */
        this.addSecretKeyField = function (options) { };

        /**
        * Add a field to the form
        * @param {Object} options
        * @param {string} options.id
        * @param {string} options.label
        * @param {string} options.type
        * @param {string} options.source (Optional)
        * @param {string} options.tab (Optional)
        * @returns {Field}
        */
        this.addField = function (options) { };

        /**
        * Add a field group to the form
        * @param {Object} options
        * @param {string} options.id
        * @param {string} options.label
        * @param {string} options.tab (Optional)
        *
        * @return {FieldGroup}
        */
        this.addFieldGroup = function (options) { };

        /**
        * Add a link to the form
        * @param {Object} options
        * @param {string} options.type
        * @param {string} options.title
        * @param {string} options.url
        */
        this.addPageLink = function (options) { };

        /**
        * Add a Sublist to the form
        * @param {Object} options
        * @param {string} options.id
        * @param {string} options.label
        * @param {string} options.type
        * @param {string} options.tab (optional)
        * @return {Sublist}
        */
        this.addSublist = function (options) { };

        /**
        * Add a Subtab to the form
        * @param {Object} options
        * @param {string} options.id
        * @param {string} options.label
        * @param {string} options.tab (optional)
        * @return {Tab}
        */
        this.addSubtab = function (options) { };

        /**
        * Add a Tab to the form
        * @param {Object} options
        * @param {string} options.id
        * @param {string} options.label
        * @return {Tab}
        */
        this.addTab = function (options) { };

        /**
        * Add a Reset button to the form
        * @param {Object} options  (Optional)
        * @param {string} options.label (Optional)
        * @return {Button}
        */
        this.addResetButton = function (options) { };

        /**
        * Add a Submit button to the form
        * @param {Object} options  (Optional)
        * @param {string} options.label (Optional)
        * @return {Button}
        */
        this.addSubmitButton = function (options) { };

        /**
        * Get a Button object from its id
        * @param {Object} options
        * @param {string} options.id
        * @return {Button}
        */
        this.getButton = function (options) { };

        /**
        * Get a Field object from its id
        * @param {Object} options
        * @param {string} options.id
        * @return {Field}
        */
        this.getField = function (options) { };

        /**
        * Get a Subtab object from its id
        * @param {Object} options
        * @param {string} options.id
        * @return {Tab}
        */
        this.getSubtab = function (options) { };

        /**
        * Get a Tab object from its id
        * @param {Object} options
        * @param {string} options.id
        * @return {Tab}
        */
        this.getTab = function (options) { };

        /**
        * Get all the Tab objects
        * @return {String[]}
        */
        this.getTabs = function (options) { };

        /**
        * Get a Sublist object from its id
        * @param {Object} options
        * @param {string} options.id
        * @return {Sublist}
        */
        this.getSublist = function (options) { };

        /**
        * Insert a field before another field
        * @param {Object} options
        * @param {Field} options.field
        * @param {String} options.nextfield
        */
        this.insertField = function (options) { };

        /**
        * Insert a sublist before another sublist
        * @param {Object} options
        * @param {Sublist} options.sublist
        * @param {String} options.nextsublist
        */
        this.insertSublist = function (options) { };

        /**
        * Insert a Tab before another tab
        * @param {Object} options
        * @param {Tab} options.tab
        * @param {String} options.nexttab
        */
        this.insertTab = function (options) { };

        /**
        * Remove a button given its id
        * @param {Object} options
        * @param {string} options.id
        */
        this.removeButton = function (options) { };

        /**
        * Set the default values of many fields
        * @param {Object[]} values
        */
        this.setDefaultValues = function (options) { };

        /**
        * Set the client script id to be used in the form
        * @param {Object}options
        * @param {String}options.script
        */
        this.clientScript = function (options) { };
    }

    /**
    * Scriptable UI List page.
    * @param delegate
    * @protected
    * @constructor
    */
    function List() {
        /**
        * @name ListStyle  Display style for this list
        * @type string
        * @since 2015.2
        */
        this.style = undefined;

        /**
        * @name List#title  Display style for this list
        * @type string
        * @since 2015.2
        */
        this.title = undefined;

        /**
        * Add a Button to the list page
        * @param {Object} options
        * @param {string} options.id
        * @param {string} options.label
        * @param {string} options.script  (optional)
        * @return {Button}
        */
        this.addButton = function (options) { };

        /**
        * Add a Column to the List page
        * @param {Object} options
        * @param {string} options.id
        * @param {string} options.type
        * @param {string} options.label
        * @param {string} options.align (optional)
        * @return {ListColumn}
        */
        this.addColumn = function (options) { };

        /**
        * Add an Edit or Edit/View column
        * @param {Object} options
        * @param {string} options.column
        * @param {string} options.showView   (optional)
        * @param {string} options.showHrefCol (optional)
        * @return {ListColumn}
        */
        this.addEditColumn = function (options) { };

        /**
        * Adds a navigation cross-link to the list page
        * @param {Object} options
        * @param {string} options.type
        * @param {string} options.title
        * @param {string} options.url
        * @return {List}
        */
        this.addPageLink = function (options) { };

        /**
        * Add a row (Array of name/value pairs or search.Result)
        * @param {Object} options
        * @param {string} options.row
        * @return {ListColumn}
        */
        this.addRow = function (options) { };

        /**
        * Adds multiple rows (Array of search.Result or name/value pair Arrays)
        * @param {Object} options
        * @param {string} options.rows
        * @return {ListColumn}
        */
        this.addRows = function (options) { };

        /**
        * Sets the Client SuiteScript used for this page.
        * @param {Object} options
        * @param {string} options.id
        * @return {ListColumn}
        */
        this.clientScript = function (options) { };
    }

    return {
        Tab: Tab,
        Sublist: Sublist,
        FieldGroup: FieldGroup,
        Field: Field,
        Button: Button,
        AssistantStep: AssistantStep,
        Assistant: Assistant,
        ListColumn: ListColumn,
        Form: Form,
        List: List
    };
})();

define([], function () {
    return new N.modules.ui();
});