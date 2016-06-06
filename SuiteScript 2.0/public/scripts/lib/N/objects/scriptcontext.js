/// <reference path="../N.js" />
/// <reference path="http.js" />
/// <reference path="ui.js" />
/// <reference path="record.js" />

'use strict';

N.objects.ScriptContext = {};

N.objects.ScriptContext.UE = function () {

    /**
    * UserEventTypes ENUM
    */
    function UserEventTypes() {
        return {
            APPROVE: 'APPROVE',
            CANCEL: 'CANCEL',
            CHANGEPASSWORD: 'CHANGEPASSWORD',
            COPY: 'COPY',
            CREATE: 'CREATE',
            DELETE: 'DELETE',
            DROPSHIP: 'DROPSHIP',
            EDIT: 'EDIT',
            EDITFORECAST: 'EDITFORECAST',
            EMAIL: 'EMAIL',
            MARKCOMPLETE: 'MARKCOMPLETE',
            ORDERITEMS: 'ORDERITEMS',
            PACK: 'PACK',
            PAYBILLS: 'PAYBILLS',
            PRINT: 'PRINT',
            QUICKVIEW: 'QUICKVIEW',
            REASSIGN: 'REASSIGN',
            REJECT: 'REJECT',
            SHIP: 'SHIP',
            SPECIALORDER: 'SPECIALORDER',
            TRANSFORM: 'TRANSFORM',
            VIEW: 'VIEW',
            XEDIT: 'XEDIT'
        };
    }

    /**
    * UserEventType Enum
    * @type {UserEventTypes}
    */
    this.UserEventType = new UserEventTypes();

    /**
    * @type {UserEventType}
    */
    this.type = undefined;

    /**
    * @type {N.objects.Record}
    */
    this.oldRecord = new N.objects.Record();

    /**
    * @type {N.objects.Record}
    */
    this.newRecord = new N.objects.Record();

    /**
    * @type {N.objects.Form}
    */
    this.form = new N.objects.Form();
};

N.objects.ScriptContext.CS = function () {

    /**
    * The current form record
    *
    * @type {string}
    */
    this.currentRecord = undefined;

    /**
    * Mode - 'create', 'edit', or 'view'.
    * NOTE: Currently, no ENUM exists.
    *
    * @type {string}
    */
    this.mode = undefined;

    /**
    * @description The sublist ID name
    *
    * @type {string}
    */    
    this.sublistId = undefined;

    /**
    * The field ID name
    *
    * @type {string}
    */    
    this.fieldId = undefined;

    /**
    * The line number if the field is a sublist or a matrix. 
    * If the field is not a sublist or matrix, the default value is undefined.
    *
    * @type {string}
    */
    this.lineNum = undefined;

    /**
    * The column number if the field is in a matrix. 
    * If the field is not in a matrix, the default value is undefined.
    *
    * @type {string}
    */   
    this.columnNum = undefined;
};

N.objects.ScriptContext.SL = function () {

    /**
    * HTTP Request
    *
    * @type {N.objects.httpRequest} 
    */
    this.request = new N.objects.httpRequest();

    /**
    * HTTP Response
    *
    * @type {N.objects.httpResponse}
    */
    this.response = undefined;
};