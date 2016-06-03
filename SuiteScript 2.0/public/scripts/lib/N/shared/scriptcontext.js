/// <reference path="../N.js" />
/// <reference path="http.js" />
/// <reference path="record.js" />

'use strict';

N.shared.ScriptContext = {};

N.shared.ScriptContext.UE = function () {

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
    * @return {N.shared.Record}
    */
    this.oldRecord = function () { };

    /**
    * @return {N.shared.Record}
    */
    this.newRecord = function () { };
};

N.shared.ScriptContext.CS = function () {

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

N.shared.ScriptContext.SL = function () {

    /**
    * HTTP Request
    *
    * @type {N.shared.httpRequest} 
    */
    this.request = new N.shared.httpRequest();

    /**
    * HTTP Response
    *
    * @type {N.shared.httpResponse}
    */
    this.response = undefined;
};