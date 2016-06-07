/// <reference path="N.js" />
/// <reference path="./modules/ui.js" />
/// <reference path="./modules/record.js" />

'use strict';

N.scriptContext = (function () {

    function UE() {

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
        * @type {N.record.objects.Record}
        */
        this.oldRecord = new N.record.objects.Record();

        /**
        * @type {N.record.objects.Record}
        */
        this.newRecord = new N.record.objects.Record();

        /**
        * @type {N.ui.objects.Form}
        */
        this.form = new N.ui.objects.Form();
    }

    function CS() {

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
    }
    
    function SL() {

        /**
        * Returns a new instance of HTTP Request
        * NOTE: This object definition is not currently available from the SuiteScript 2.0 API
        *
        */
        function HTTPRequest() {
            /**
            * Method - 'GET' or 'POST'
            * NOTE: Currently, no ENUM exists.
            *
            * @type {string} 
            */
            this.method = undefined;

            /**
            * Parameters - Object containing received parameters
            *
            * @type {Object}
            */
            this.parameters = {};
        }

        function HTTPResponse() {
            
            /**
            * Generates a page using a page element object (Form)
            *
            * @param {N.ui.objects.Form} form
            */            
            this.writePage = function (form) { };
        }

        /**
        * HTTP Request
        *
        * @type {N.objects.httpRequest} 
        */
        this.request = new HTTPRequest();

        /**
        * HTTP Response
        *
        * @type {N.objects.httpResponse}
        */
        this.response = new HTTPResponse();
    }

    return {
        UE: UE,
        CS: CS,
        SL: SL
    };

})();

