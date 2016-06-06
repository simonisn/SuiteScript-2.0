/// <reference path="../N.js" />

/**
* SuiteScript module
*
* @module N/record
* @suiteScriptVersion 2.x
*/

'use strict';

N.record = {};

N.record.module = function () {

    /**
    * Create a new record object based on provided type
    *
    * @governance 10 units for transactions, 2 for custom records, 5 for all other records
    *
    * @param {Object} options
    * @param {string} options.type record type
    * @param {boolean} [options.isDynamic=false] record is dynamic
    * @param {Object} [options.defaultValues={}] record default values
    * @return {N.record.objects.Record}
    *
    * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type is missing
    *
    * @since 2015.2
    */
    this.create = function (options) { };

    /**
        * Load an existing nlobjRecord from the database based on provided type, id
        *
        * @governance 10 units for transactions, 2 for custom records, 5 for all other records
        *
        * @param {Object} options
        * @param {string} options.type record type
        * @param {number|string} options.id record id
        * @param {boolean} [options.isDynamic=false] record is dynamic
        * @param {Object} [options.defaultValues={}] record default values
        * @return {N.record.objects.Record}
        *
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
        *
        * @since 2015.2
        */
    this.load = function (options) { };

    /**
        * Copy a record object based on provided type, id
        *
        * @governance 10 units for transactions, 2 for custom records, 5 for all other records
        *
        * @param {Object} options
        * @param {string} options.type record type
        * @param {number|string} options.id record id
        * @param {boolean} [options.isDynamic=false] record is dynamic
        * @param {Object} [options.defaultValues={}] record default values
        * @return {N.record.objects.Record}
        *
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
        *
        * @since 2015.2
        */
    this.copy = function (options) { };

    /**
        * Transform a record into another type (i.e. salesOrder -> invoice -or- opportunity -> estimate)
        *
        * @governance 10 units for transactions, 2 for custom records, 5 for all other records
        *
        * @param {Object} options
        * @param {string} options.fromType record type to be transformed from
        * @param {number|string} options.fromId record id to be transformed from
        * @param {string} options.toType record type to be transformed to
        * @param {boolean} [options.isDynamic=false] record is dynamic
        * @param {Object} [options.defaultValues={}] transformed record's default values
        * @return {N.record.objects.Record}
        *
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
        *
        * @since 2015.2
        */
    this.transform = function (options) { };

    /**
        * Delete a record object based on provided type, id and return the id of deleted record
        *
        * @governance 20 units for transactions, 4 for custom records, 10 for all other records
        *
        * @param {Object} options
        * @param {string} options.type record type
        * @param {number|string} options.id record id
        * @return {number} recordId
        *
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
        *
        * @since 2015.2
        */
    this['delete'] = function (options) { };

    /**
        * commit record field updates to the system
        *
        * @governance 10 units for transactions, 2 for custom records, 5 for all other records
        * @restriction only supported for records and fields where DLE (Direct List Editing) is supported
        *
        * @param {Object} options
        * @param {string} options.type record type
        * @param {number|string} options.id record id
        * @param {Object} options.values field and value mapping to be submitted
        * @param {Object} [options.options] additonal flags for submission
        * @param {boolean} [options.options.enablesourcing=true] enable sourcing during record update
        * @param {boolean} [options.options.ignoreMandatoryFields=false] ignore mandatory field during record submission
        *
        * @return {number} id of submitted record
        *
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
        *
        * @since 2015.2
        */
    this.submitFields = function (options) { };

    /**
        * attach record to another record
        *
        * @governance 10 units
        *
        * @param {Object} options
        * @param {Object} options.record record to be attached
        * @param {Object} options.record.type the type of the record to be attached
        * @param {number|string} options.record.id the id of the record to be attached
        * @param {Object} options.to the destination record where options.record will be attached to
        * @param {string} options.to.type the type of the destination
        * @param {number|string} options.to.id the id of the destination
        * @param {Object} [options.attributes=null] name/value pairs containing attributes
        *
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or to (and their type and id) are missing
        *
        * @since 2015.2
        */
    this.attach = function (options) { };

    /**
        * detach record from another record
        *
        * @governance 10 units
        *
        * @param {Object} options
        * @param {Object} options.record record to be detached
        * @param {Object} options.record.type the type of the record to be detached
        * @param {number|string} options.record.id the id of the record to be detached
        * @param {Object} options.from the destination record where options.record will be detached from
        * @param {string} options.from.type the type of the destination
        * @param {number|string} options.from.id the id of the destination
        * @param {Object} [options.attributes=null] name/value pairs containing attributes
        *
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or from (and their type and id) are missing
        *
        * @since 2015.2
        */
    this.detach = function (options) { };

    /**
        * @enum
        */
    function RecordType() {
        this.ACCOUNT = 'account';
        this.ACCOUNTING_BOOK = 'accountingbook';
        this.ADDRESS = 'addressbookaddress';
        this.AMORTIZATION_SCHEDULE = 'amortizationschedule';
        this.AMORTIZATION_TEMPLATE = 'amortizationtemplate';
        this.ACTIVITY = 'activity';
        this.ASSEMBLY_BUILD = 'assemblybuild';
        this.ASSEMBLY_UNBUILD = 'assemblyunbuild';
        this.BILLING_CLASS = 'billingclass';
        this.BILLING_SCHEDULE = 'billingschedule';
        this.BIN = 'bin';
        this.BIN_PUTAWAY_WORKSHEET = 'binworksheet';
        this.BIN_TRANSFER = 'bintransfer';
        this.BLANKET_PURCHASE_ORDER = 'blanketpurchaseorder';
        this.BUILD_ASSEMBLY = 'assemblyitem';
        this.CAMPAIGN = 'campaign';
        this.CAMPAIGN_TEMPLATE = 'campaigntemplate';
        this.CASE = 'supportcase';
        this.CASH_REFUND = 'cashrefund';
        this.CASH_SALE = 'cashsale';
        this.CHARGE = 'charge';
        this.CHECK = 'check';
        this.CLASS = 'classification';
        this.COMPETITOR = 'competitor';
        this.CONTACT = 'contact';
        this.COUPON_CODE = 'couponcode';
        this.CREDIT_MEMO = 'creditmemo';
        this.CURRENCY = 'currency';
        this.CUSTOMER = 'customer';
        this.CUSTOMER_CATEGORY = 'customercategory';
        this.CUSTOMER_DEPOSIT = 'customerdeposit';
        this.CUSTOMER_PAYMENT = 'customerpayment';
        this.CUSTOMER_REFUND = 'customerrefund';
        this.CUSTOM_LIST = 'customlist *';
        this.DEPARTMENT = 'department';
        this.DEPOSIT = 'deposit';
        this.DEPOSIT_APPLICATION = 'depositapplication';
        this.DESCRIPTION = 'descriptionitem';
        this.DISCOUNT = 'discountitem';
        this.DOWNLOAD_ITEM = 'downloaditem';
        this.EMAIL_TEMPLATE = 'emailtemplate';
        this.EMPLOYEE = 'employee';
        this.ENTITY = 'entity';
        this.ESTIMATE_QUOTE = 'estimate';
        this.EVENT = 'calendarevent';
        this.EXPENSE_CATEGORY = 'expensecategory';
        this.EXPENSE_REPORT = 'expensereport';
        this.FOLDER = 'folder';
        this.GIFT_CERTIFICATE = 'giftcertificate';
        this.GIFT_CERTIFICATE_ITEM = 'giftcertificateitem';
        this.GLOBAL_ACCOUNT_MAPPING = 'globalaccountmapping';
        this.GROUP = 'entitygroup';
        this.INTERCOMPANY_JOURNAL_ENTRY = 'intercompa​n​y​j​o​u​r​n​a​l​e​n​t​r​y';
        this.INVENTORY_ADJUSTMENT = 'inventoryadjustment';
        this.INVENTORY_COST_REVALUATION = 'inventoryc​o​s​t​r​e​v​a​l​u​a​t​i​o​n';
        this.INVENTORY_COUNT = 'inventorycount';
        this.INVENTORY_DETAIL = 'inventorydetail';
        this.INVENTORY_ITEM = 'inventoryitem';
        this.INVENTORY_NUMBER = 'inventorynumber';
        this.INVENTORY_TRANSFER = 'inventorytransfer';
        this.INVOICE = 'invoice';
        this.ISSUE = 'issue';
        this.ITEM_ACCOUNT_MAPPING = 'itemaccountmapping';
        this.ITEM_SEARCH = 'item';
        this.ITEM_DEMAND_PLAN = 'itemdemandplan';
        this.ITEM_FULFILLMENT = 'itemfulfillment';
        this.ITEM_GROUP = 'itemgroup';
        this.ITEM_RECEIPT = 'itemreceipt';
        this.ITEM_REVISION = 'itemrevision';
        this.ITEM_SUPPLY_PLAN = 'itemsupplyplan';
        this.JOURNAL_ENTRY = 'journalentry';
        this.KIT = 'kititem';
        this.LANDED_COST = 'landedcost';
        this.LEAD = 'lead';
        this.LOCATION = 'location';
        this.LOT_NUMBERED_ASSEMBLY_ITEM = 'lotnumbere​d​a​s​s​e​m​b​l​y​i​t​e​m';
        this.LOT_NUMBERED_INVENTORY_ITEM = 'lotnumbere​d​i​n​v​e​n​t​o​r​y​i​t​e​m';
        this.MANUFACTURING_COST_TEMPLATE = 'manufactur​i​n​g​c​o​s​t​t​e​m​p​l​a​t​e';
        this.MANUFACTURING_PLANNED_TIME = 'mfgplannedtime';
        this.MANUFACTURING_OPERATION_TASK = 'manufactur​i​n​g​o​p​e​r​a​t​i​o​n​t​a​s​k';
        this.MANUFACTURING_ROUTING = 'manufacturingrouting';
        this.MARKUP = 'markupitem';
        this.MESSAGE = 'message';
        this.MULTIBOOK_ACCOUNTING_TRANSACTION = 'accountingtransaction';
        this.NEXUS = 'nexus';
        this.NON_INVENTORY_PART = 'noninventoryitem';
        this.NOTE = 'note';
        this.OPPORTUNITY = 'opportunity';
        this.OTHER_CHARGE_ITEM = 'otherchargeitem';
        this.OTHER_NAME = 'othername';
        this.PARTNER = 'partner';
        this.PAYCHECK_JOURNAL = 'paycheckjournal';
        this.PAYMENT = 'paymentitem';
        this.PAYROLL_ITEM = 'payrollitem';
        this.PHONE_CALL = 'phonecall';
        this.PRICE_LEVEL = 'pricelevel';
        this.PROJECT_JOB = 'job';
        this.PROJECT_EXPENSE_TYPE = 'projectexpensetype';
        this.PROJECT_TASK = 'projecttask';
        this.PROMOTION = 'promotioncode';
        this.PROSPECT = 'prospect';
        this.PURCHASE_CONTRACT = 'purchasecontract';
        this.PURCHASE_ORDER = 'purchaseorder';
        this.REALLOCATE_ITEMS = 'reallocateItem';
        this.REQUISITION = 'purchaserequisition';
        this.RESOURCE_ALLOCATION = 'resourceallocation';
        this.RETURN_AUTHORIZATION = 'returnauthorization';
        this.REVENUE_COMMITMENT = 'revenuecommitment';
        this.REVENUE_COMMITMENT_REVERSAL = 'revenuecom​m​i​t​m​e​n​t​r​e​v​e​r​s​a​l';
        this.REVENUE_RECOGNITION_SCHEDULE = 'revrecschedule';
        this.REVENUE_RECOGNITION_TEMPLATE = 'revrectemplate';
        this.SALES_ORDER = 'salesorder';
        this.SALES_TAX_ITEM = 'salestaxitem';
        this.SCHEDULED_SCRIPT_INSTANCE = '';
        this.SERIALIZED_ASSEMBLY_ITEM = 'serializedassemblyitem';
        this.SERIALIZED_INVENTORY_ITEM = 'serializedinventoryitem';
        this.SERVICE = 'serviceitem';
        this.SOLUTION = 'solution';
        this.STATISTICAL_JOURNAL_ENTRY = 'statisticaljournalentry';
        this.SUBSIDIARY = 'subsidiary';
        this.SUBTOTAL = 'subtotalitem';
        this.TASK = 'task';
        this.TAX_CONTROL_ACCOUNT = 'taxacct';
        this.TAX_GROUP = 'taxgroup';
        this.TAX_PERIOD = 'taxperiod';
        this.TAX_TYPE = 'taxtype';
        this.TERM = 'term';
        this.TIME = 'timebill';
        this.TIME_ENTRY = 'timeentry';
        this.TIMESHEET = 'timesheet';
        this.TOPIC = 'topic';
        this.TRANSACTION_SEARCH = 'transaction';
        this.TRANSFER_ORDER = 'transferorder';
        this.UNIT_OF_MEASURE = 'unitstype';
        this.VENDOR = 'vendor';
        this.VENDOR_BILL = 'vendorbill';
        this.VENDOR_CATEGORY = 'vendorcategory';
        this.VENDOR_CREDIT = 'vendorcredit';
        this.VENDOR_PAYMENT = 'vendorpayment';
        this.VENDOR_RETURN_AUTHORIZATION = 'vendorretu​r​n​a​u​t​h​o​r​i​z​a​t​i​o​n';
        this.WEB_SITE_SETUP = 'website';
        this.WORK_ORDER = 'workorder';
        this.WORK_ORDER_CLOSE = 'workorderclose';
        this.WORK_ORDER_COMPLETION = 'workordercompletion';
        this.WORK_ORDER_ISSUE = 'workorderissue';
    }

    this.Type = new RecordType();
};

N.record.objects = (function () {
    /**
    * Primary object used to encapsulate a record object.
    *
    * @protected
    * @param {Object} options
    * @param {{id: *, remoteId: *, isDynamic: boolean, isUserEvent: boolean, isSubrecord: boolean, recordContext: *, metadata: *, data: *}} options.recordObj
    * @return {N.record.objects.Record}
    * @constructor
    */
    function Record() {

        /**
        * The id of the record
        * @name Record#id
        * @type number
        * @readonly
        * @throws READ_ONLY when setting the property is attempted
        */
        this.id = undefined;

        /**
        * The type of the record
        * @name Record#type
        * @type string
        * @readonly
        * @throws READ_ONLY when setting the property is attempted
        */
        this.type = undefined;

        /**
        * return true if record is a dynamic record
        * @name Record#isDynamic
        * @type boolean
        * @readonly
        * @throws READ_ONLY when setting the property is attempted
        */
        this.isDynamic = undefined;

        /**
        * save record updates to the system
        * @governance 20 units for transactions, 4 for custom records, 10 for all other records
        *
        * @param {Object} options
        * @param {boolean} [options.enablesourcing=false] enable sourcing during record update
        * @param {boolean} [options.ignoremandatoryfields=false] ignore mandatory field during record submission
        * @return {number} id of submitted record
        */
        this.save = function (options) { };

        /**
        * JSON.stringify() implementation.
        * @returns {Object}
        */
        this.toJSON = function (options) { };

        /**
        * Returns the object type name (Record)
        * @returns {string}
        */
        this.toString = function (options) { };

        /**
        * remove body field data
        * @param {Object} options
        * @param {string} options.fieldId
        * @return {N.record.objects.Record}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
        */
        this.removeField = function (options) { };

        /**
        * return array of names of all body fields, including machine header field and matrix header fields
        * @return {Array}
        */
        this.getFields = function (options) { };

        /**
        * returns the specified sublist
        * @param {Object} options
        * @param {string} options.sublistId
        * @return {Sublist}
        * @return {Array}
        */
        this.getSublist = function (options) { };

        /**
        * return array of names of all sublists
        * @return {Array}
        */
        this.getSublists = function (options) { };

        /**
        * return array of names of all fields in a sublist
        * @param {Object} options
        * @param {string} options.sublistId
        * @return {Array}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined
        */
        this.getSublistFields = function (options) { };

        /**
        * return value of the field
        * @param {Object} options
        * @param {string} options.fieldId
        * @return {number|Date|string|Array}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
        * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
        */
        this.getValue = function (options) { };

        /**
        * set value of the field
        * @param {Object} options
        * @param {string} options.fieldId
        * @param {number|Date|string|Array} options.value
        * @return {N.record.objects.Record}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
        */
        this.setValue = function (options) { };

        /**
        * get value of the field in text representation
        * @param {Object} options
        * @param {string} options.fieldId
        * @return {string}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
        * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setText
        */
        this.getText = function (options) { };

        /**
        * set value of the field by text representation
        *
        * @param {Object} options
        * @param {string} options.fieldId
        * @param {string} options.text
        * @return {N.record.objects.Record}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
        */
        this.setText = function (options) { };

        /**
        * return field object from record's sublist
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {string} options.fieldId
        * @param {boolean} options.line
        * @return {Record.Field}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
        * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
        */
        this.getSublistField = function (options) { };

        /**
        * return line count of sublist
        * @param {Object} options
        * @param {string} options.sublistId
        * @return {number}
        */
        this.getLineCount = function (options) { };

        /**
        * insert a sublist line
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {number} options.line
        * @param {boolean} [ignoreRecalc=fasle] options.ignoreRecalc ignore recalc scripting
        * @return {N.record.objects.Record}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
        * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not editable
        */
        this.insertLine = function (options) { };

        /**
        * remove a sublist line
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {number} options.line
        * @param {boolean} [ignoreRecalc=fasle] options.ignoreRecalc ignore recalc scripting
        * @return {N.record.objects.Record}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
        * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not editable
        */
        this.removeLine = function (options) { };

        /**
        * return the line number for the first occurrence of a field value in a sublist and return -1 if not found
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {string} options.fieldId
        * @param {number|Date|string|Array} options.value
        * @return {number}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing or undefined
        */
        this.findSublistLineWithValue = function (options) { };

        /**
        * return value of a sublist field
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {string} options.fieldId
        * @param {number} options.line
        * @return {number|Date|string|Array}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
        * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
        * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
        */
        this.getSublistValue = function (options) { };

        /**
        * set the value of a sublist field
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {string} options.fieldId
        * @param {number} options.line
        * @param {number|Date|string|Array} options.value
        * @return {N.record.objects.Record}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
        * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
        * @restriction only available in deferred dynamic record
        */
        this.setSublistValue = function (options) { };

        /**
        * return value of a sublist field in text representation
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {string} options.fieldId
        * @param {number} options.line
        * @return {string}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
        * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
        * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setSublistText
        */
        this.getSublistText = function (options) { };

        /**
        * set the value of a sublist field in text representation
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {string} options.fieldId
        * @param {number} options.line
        * @param {string} options.text
        * @return {N.record.objects.Record}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
        * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
        * @restriction only available in deferred dynamic record
        */
        this.setSublistText = function (options) { };

        /**
        * return a value indicating if the field has a subrecord
        * @param {Object} options
        * @param {string} options.fieldId
        * @return {boolean}
        */
        this.hasSubrecord = function (options) { };

        /**
        * get the subrecord for the associated field
        * @param {Object} options
        * @param {string} options.fieldId
        * @return {Subrecord}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
        * @throws {error.SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
        * @throws {error.SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
        */
        this.getSubrecord = function (options) { };

        /**
        * remove the subrecord for the associated field
        * @param {Object} options
        * @param {string} options.fieldId
        * @return {N.record.objects.Record}
        */
        this.removeSubrecord = function (options) { };

        /**
        * return a value indicating if the associated sublist field has a subrecord
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {string} options.fieldId
        * @param {number} options.line
        * @restriction only available in deferred dynamic record
        * @return {boolean}
        */
        this.hasSublistSubrecord = function (options) { };

        /**
        * get the subrecord for the associated sublist field
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {string} options.fieldId
        * @param {number} options.line
        * @restriction only available in deferred dynamic record
        * @return {Subrecord}
        */
        this.getSublistSubrecord = function (options) { };

        /**
        * remove the subrecord for the associated sublist field
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {string} options.fieldId
        * @param {number} options.line
        * @restriction only available in deferred dynamic record
        * @return {N.record.objects.Record}
        */
        this.removeSublistSubrecord = function (options) { };

        /**
        * set the value for the associated header in the matrix
        * @param {Object} options
        * @param {string} options.sublistId the id of sublist in which the matrix is in.
        * @param {string} options.fieldId the id of the matrix field
        * @param {number} options.column the column number for the field
        * @param {string} options.value the value to set it to
        * @param {boolean} [options.ignoreFieldChange] Ignore the field change script (default false)
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
        * @return {N.record.objects.Record}
        */
        this.setMatrixHeaderValue = function (options) { };

        /**
        * get the value for the associated header in the matrix
        * @param {Object} options
        * @param {string} options.sublistId the id of sublist in which the matrix is in.
        * @param {string} options.fieldId the id of the matrix field
        * @param {number} options.column the column number for the field
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
        * @return {number|Date|string}
        */
        this.getMatrixHeaderValue = function (options) { };

        /**
        * set the value for the associated field in the matrix
        * @param {Object} options
        * @param {string} options.sublistId the id of sublist in which the matrix is in.
        * @param {string} options.fieldId the id of the matrix field
        * @param {number} options.line the line number for the field
        * @param {number} options.column the column number for the field
        * @param {string} options.value the value to set it to
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
        * @restriction only available in deferred dynamic record
        * @return {N.record.objects.Record}
        */
        this.setMatrixSublistValue = function (options) { };

        /**
        * get the value for the associated field in the matrix
        * @param {Object} options
        * @param {string} options.sublistId the id of sublist in which the matrix is in.
        * @param {string} options.fieldId the id of the matrix field
        * @param {number} options.line the line number for the field
        * @param {number} options.column the column number for the field
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
        * @return {number|Date|string}
        */
        this.getMatrixSublistValue = function (options) { };

        /**
        * get the field for the specified header in the matrix
        * @param {Object} options
        * @param {string} options.sublistId the id of sublist in which the matrix is in.
        * @param {string} options.fieldId the id of the matrix field
        * @param {number} options.column the column number for the field
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
        * @return {Record.Field}
        */
        this.getMatrixHeaderField = function (options) { };

        /**
        * get the field for the specified sublist in the matrix
        * @param {Object} options
        * @param {string} options.sublistId the id of sublist in which the matrix is in.
        * @param {string} options.fieldId the id of the matrix field
        * @param {number} options.column the column number for the field
        * @param {number} options.line the line number for the field
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
        * @return {Record.Field}
        */
        this.getMatrixSublistField = function (options) { };

        /**
        * returns the line number of the first line that contains the specified value in the specified column of the matrix
        * @param {Object} options
        * @param {string} options.sublistId the id of sublist in which the matrix is in.
        * @param {string} options.fieldId the id of the matrix field
        * @param {number} options.value the column number for the field
        * @param {number} options.column the line number for the field
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
        * @return {number}
        */
        this.findMatrixSublistLineWithValue = function (options) { };

        /**
        * returns the number of columns for the specified matrix.
        * @param {Object} options
        * @param {string} options.sublistId the id of sublist in which the matrix is in.
        * @param {string} options.fieldId the id of the matrix field
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
        * @return {number}
        */
        this.getMatrixHeaderCount = function (options) { };

        /**
        * cancel the current selected line
        * @param {Object} options
        * @param {string} options.sublistId
        * @return {N.record.objects.Record}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
        * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
        * @restriction only available in dynamic record
        */
        this.cancelLine = function (options) { };

        /**
        * commit the current selected line
        * @param {Object} options
        * @param {string} options.sublistId
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing
        * @return {N.record.objects.Record}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
        * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
        * @restriction only available in dynamic record
        */
        this.commitLine = function (options) { };

        /**
        * select line
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {number} options.line
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
        * @return {DynamicRecord}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing or undefined
        * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or line index
        * @restriction only available in dynamic record
        */
        this.selectLine = function (options) { };

        /**
        * select a new line at the end of sublist
        * @param {Object} options
        * @param {string} options.sublistId
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing
        * @return {N.record.objects.Record}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
        * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
        * @restriction only available in dynamic record
        */
        this.selectNewLine = function (options) { };

        /**
        * return value of a sublist field on the current selected sublist line
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {string} options.fieldId
        * @return {number|Date|string|Array}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
        * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
        * @restriction only available in dynamic record
        */
        this.getCurrentSublistValue = function (options) { };

        /**
        * set the value for field in the current selected line
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {string} options.fieldId
        * @param {number|Date|string|Array} options.value
        * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
        * @returns {DynamicRecord}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
        * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
        * @restriction only available in dynamic record
        */
        this.setCurrentSublistValue = function (options) { };

        /**
        * return the value for field in the current selected line by text representation
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {string} options.fieldId
        * @return {number|Date|string|Array}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
        * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
        * @restriction only available in dynamic record
        */
        this.getCurrentSublistText = function (options) { };

        /**
        * set the value for field in the current selected line by text representation
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {string} options.fieldId
        * @param {number|Date|string|Array} options.text
        * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
        * @returns {DynamicRecord}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
        * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
        * @restriction only available in dynamic record
        */
        this.setCurrentSublistText = function (options) { };

        /**
        * return the line number of current selected line
        * @param {Object} options
        * @param {string} options.sublistId
        * @returns {number}
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
        * @restriction only available in dynamic record
        */
        this.getCurrentSublistIndex = function (options) { };

        /**
        * return a value indicating if the associated sublist field has a subrecord on the current line
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {string} options.fieldId
        * @restriction only available in dynamic record
        * @return {boolean}
        */
        this.hasCurrentSublistSubrecord = function (options) { };

        /**
        * get the subrecord for the associated sublist field on the current line
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {string} options.fieldId
        * @restriction only available in dynamic record
        * @return {Subrecord}
        */
        this.getCurrentSublistSubrecord = function (options) { };

        /**
        * remove the subrecord for the associated sublist field on the current line
        * @param {Object} options
        * @param {string} options.sublistId
        * @param {string} options.fieldId
        * @restriction only available in dynamic record
        * @return {N.record.objects.Record}
        */
        this.removeCurrentSublistSubrecord = function (options) { };

        /**
        * set the value for the line currently selected in the matrix
        * @param {Object} options
        * @param {string} options.sublistId - the id of sublist in which the matrix is in.
        * @param {string} options.fieldId - the id of the matrix field
        * @param {number} options.column - the column number for the field
        * @param {string} options.value - the value to set it to
        * @param {boolean} options.ignoreFieldChange (optional) - Ignore the field change script (default false)
        * @param {boolean} options.fireSlavingSync (optional) - Flag to perform slaving synchronously (default false)
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
        * @restriction only available in dynamic record
        * @return {N.record.objects.Record}
        */
        this.setCurrentMatrixSublistValue = function (options) { };

        /**
        * get the value for the line currently selected in the matrix
        * @param {Object} options
        * @param {string} options.sublistId - the id of sublist in which the matrix is in.
        * @param {string} options.fieldId - the id of the matrix field
        * @param {number} options.column - the column number for the field
        * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
        * @restriction only available in dynamic record
        * @return {number|Date|string}
        */
        this.getCurrentMatrixSublistValue = function (options) { };
    }

    return {
        Record: Record
    };
})();

define([], function () {
    return new N.record.module();
});