/// <reference path="../N.js" />

/**
* SuiteScript module
*
* @module N/record
* @suiteScriptVersion 2.x
*/

'use strict';

N.modules.Record = function () {

    /**
    * Create a new record object based on provided type
    *
    * @governance 10 units for transactions, 2 for custom records, 5 for all other records
    *
    * @param {Object} options
    * @param {string} options.type record type
    * @param {boolean} [options.isDynamic=false] record is dynamic
    * @param {Object} [options.defaultValues={}] record default values
    * @return {N.shared.Record}
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
        * @return {N.shared.Record}
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
        * @return {N.shared.Record}
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
        * @return {N.shared.Record}
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


define([], function () {
    return new N.modules.Record();
});