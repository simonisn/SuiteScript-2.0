/// <reference path="../N.js" />

/**
* SuiteScript module
*
* @module N/task
* @suiteScriptVersion 2.x
*
*/

'use strict';

N.modules.Task = function () {
    /**
    * Creates a task of the given type and returns the task object.
    *
    * @param {Object} options
    * @param {string} options.taskType specifies the type of task to be created; use values from the task.TaskType enum
    * @returns {task.ScheduledScriptTask | task.MapReduceScriptTask | task.CsvImportTask | task.EntityDeduplicationTask | task.WorkflowTriggerTask}
    */
    this.create = function (options) { };

    /**
    * Check current status of a submitted task. The task to be checked is identified by its task ID.
    *
    * @typedef task.TaskStatus
    * @property {String} status
    *
    * @param {Object} options
    * @param {string} options.taskId
    * @returns {task.TaskStatus}
    */
    this.checkStatus = function (options) { };

    /**
    * @enum
    */
    function TaskTaskType() {
        this.SCHEDULED_SCRIPT = 'SCHEDULED_SCRIPT';
        this.MAP_REDUCE = 'MAP_REDUCE';
        this.CSV_IMPORT = 'CSV_IMPORT';
        this.ENTITY_DEDUPLICATION = 'ENTITY_DEDUPLICATION';
        this.WORKFLOW_TRIGGER = 'WORKFLOW_TRIGGER';
    }
    this.TaskType = new TaskTaskType();

    /**
    * @enum
    */
    function TaskTaskStatus() {
        this.PENDING = 'PENDING';
        this.PROCESSING = 'PROCESSING';
        this.COMPLETE = 'COMPLETE';
        this.FAILED = 'FAILED';
    }
    this.TaskStatus = new TaskTaskStatus();

    /**
    * @enum
    */
    function TaskMasterSelectionMode() {
        this.CREATED_EARLIEST = 'CREATED_EARLIEST';
        this.MOST_RECENT_ACTIVITY = 'MOST_RECENT_ACTIVITY';
        this.MOST_POPULATED_FIELDS = 'MOST_POPULATED_FIELDS';
        this.SELECT_BY_ID = 'SELECT_BY_ID';
    }
    this.MasterSelectionMode = new TaskMasterSelectionMode();

    /**
    * @enum
    */
    function TaskDedupeMode() {
        this.MERGE = 'MERGE';
        this.DELETE = 'DELETE';
        this.MAKE_MASTER_PARENT = 'MAKE_MASTER_PARENT';
        this.MARK_AS_NOT_DUPES = 'MARK_AS_NOT_DUPES';
    }
    this.DedupeMode = new TaskDedupeMode();

    /**
    * @enum
    */
    function TaskDedupeEntityType() {
        this.CUSTOMER = 'CUSTOMER';
        this.CONTACT = 'CONTACT';
        this.VENDOR = 'VENDOR';
        this.PARTNER = 'PARTNER';
        this.LEAD = 'LEAD';
        this.PROSPECT = 'PROSPECT';
    }
    this.DedupeEntityType = new TaskDedupeEntityType();

    /**
    * @enum
    */
    function TaskMapReduceStage() {
        this.GET_INPUT = 'GET_INPUT';
        this.MAP = 'MAP';
        this.SHUFFLE = 'SHUFFLE';
        this.REDUCE = 'REDUCE';
        this.SUMMARIZE = 'SUMMARIZE';
    }
    this.MapReduceStage = new TaskMapReduceStage();

    /**
    * @protected
    * @constructor
    */
    function ScheduledScriptTask() {
        /**
        * The ID of the task.
        * @name ScheduledScriptTask#id
        * @type string
        */
        this.id = undefined;

        /**
        * The Internal ID or Script ID of the Script record.
        * @name ScheduledScriptTask#scriptId
        * @type int | string
        */
        this.scriptId = undefined;

        /**
        * The Internal ID or Script ID of the Script Deployment record.
        * @name ScheduledScriptTask#deploymentId
        * @type int | string
        */
        this.deploymentId = undefined;

        /**
        * Key/value pairs which override static script parameter field values on the deployment.
        * Used to dynamically pass context to the script.
        * @name ScheduledScriptTask#params
        * @type Object
        */
        this.params = undefined;

        /**
        * Submits the task and returns an unique ID.
        *
        * @governance 20 units
        *
        * @returns {String} taskId
        * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
        */
        this.submit = function (options) { };

        /**
        * Returns the object type name (task.ScheduledScriptTask).
        *
        * @returns {string}
        */
        this.toString = function (options) { };

        /**
        * JSON.stringify() implementation.
        *
        * @returns {Object}
        */
        this.toJSON = function (options) { };
    }

    /**
    * @protected
    * @constructor
    */
    function ScheduledScriptTaskStatus() {
        /**
        * The taskId associated with the specified task.
        * @name ScheduledScriptTaskStatus#taskId
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.taskId = undefined;

        /**
        * Script ID.
        * @name ScheduledScriptTaskStatus#scriptId
        * @type int
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.scriptId = undefined;

        /**
        * Script deployment ID.
        * @name ScheduledScriptTaskStatus#deploymentId
        * @type int
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.deploymentId = undefined;

        /**
        * Represents the task status. Returns one of the task.TaskStatus enum values.
        * @name ScheduledScriptTaskStatus#status
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.status = undefined;

        /**
        * Returns the object type name (task.ScheduledScriptTaskStatus).
        *
        * @returns {string}
        */
        this.toString = function (options) { };

        /**
        * JSON.stringify() implementation.
        *
        * @returns {Object}
        */
        this.toJSON = function (options) { };
    }

    /**
    * @protected
    * @constructor
    */
    function MapReduceScriptTask() {
        /**
        * The ID of the task.
        * @name MapReduceScriptTask#id
        * @type string
        */
        this.id = undefined;

        /**
        * The Internal ID or Script ID of the Script record.
        * @name MapReduceScriptTask#scriptId
        * @type int | string
        */
        this.scriptId = undefined;

        /**
        * The Internal ID or Script ID of the Script Deployment record.
        * @name MapReduceScriptTask#deploymentId
        * @type int | string
        */
        this.deploymentId = undefined;

        /**
        * Key/value pairs which override static script parameter field values on the deployment.
        * Used to dynamically pass context to the script.
        * @name MapReduceScriptTask#params
        * @type Object
        */
        this.params = undefined;

        /**
        * Submits the task and returns an unique ID.
        *
        * @governance 20 units
        * @returns {String} taskId
        */
        this.submit = function (options) { };

        /**
        * Returns the object type name (task.MapReduceScriptTask).
        *
        * @returns {string}
        */
        this.toString = function (options) { };

        /**
        * JSON.stringify() implementation.
        *
        * @returns {Object}
        */
        this.toJSON = function (options) { };
    }

    /**
    * @protected
    * @constructor
    */
    function MapReduceScriptTaskStatus() {
        /**
        * The taskId associated with the specified task.
        * @name MapReduceScriptTaskStatus#taskId
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.taskId = undefined;

        /**
        * Script ID.
        * @name MapReduceScriptTaskStatus#scriptId
        * @type int
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.scriptId = undefined;

        /**
        * Script deployment ID.
        * @name MapReduceScriptTaskStatus#deploymentId
        * @type int
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.deploymentId = undefined;

        /**
        * Represents the task status. Returns one of the task.TaskStatus enum values.
        * @name MapReduceScriptTaskStatus#status
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.status = undefined;
        /**
        * Represents the current stage of the Map/Reduce script. Returns one of the task.MapReduceStage enum values.
        * @name MapReduceScriptTaskStatus#stage
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.stage = undefined;

        /**
        * Get percentage of completion for the current stage. Note that INPUT and SUMMARIZE are either 0% or 100% complete at any given time.
        *
        * @governance 10 units
        * @returns {Number}
        */
        this.getPercentageCompleted = function (options) { };

        /**
        * Total number of records/rows not yet processed by the MAP phase.
        *
        * @governance 10 units
        * @returns {Number}
        */
        this.getPendingMapCount = function (options) { };

        /**
        * Total number of record/row inputs to the MAP phase.
        *
        * @governance 10 units
        * @returns {Number}
        */
        this.getTotalMapCount = function (options) { };

        /**
        * Total number of bytes not yet processed by the MAP phase (a component of total size).
        *
        * @governance 25 units
        * @returns {Number}
        */
        this.getPendingMapSize = function (options) { };

        /**
        * Total number of records/rows not yet processed by the REDUCE phase.
        *
        * @governance 10 units
        * @returns {Number}
        */
        this.getPendingReduceCount = function (options) { };

        /**
        * Total number of record/row inputs to the REDUCE phase.
        *
        * @governance 10 units
        * @returns {Number}
        */
        this.getTotalReduceCount = function (options) { };

        /**
        * Total number of bytes not yet processed by the REDUCE phase (a component of total size).
        *
        * @governance 25 units
        * @returns {Number}
        */
        this.getPendingReduceSize = function (options) { };

        /**
        * Total number of records/rows not yet iterated by the script.
        *
        * @governance 10 units
        * @returns {Number}
        */
        this.getPendingOutputCount = function (options) { };

        /**
        * Returns the total size in bytes of all key/value pairs written as output (a component of total size).
        *
        * @governance 25 units
        * @returns {Number}
        */
        this.getPendingOutputSize = function (options) { };

        /**
        * Total number of record/row inputs to the OUTPUT phase.
        *
        * @governance 10 units
        * @returns {Number}
        */
        this.getTotalOutputCount = function (options) { };

        /**
        * Returns the total size in bytes of all stored work in progress.
        *
        * @governance 25 units
        * @returns {Number}
        */
        this.getCurrentTotalSize = function (options) { };

        /**
        * Returns the object type name (task.MapReduceScriptTaskStatus).
        *
        * @returns {string}
        */
        this.toString = function (options) { };

        /**
        * JSON.stringify() implementation.
        *
        * @returns {Object}
        */
        this.toJSON = function (options) { };
    }

    /**
    * @protected
    * @constructor
    */
    function CsvImportTask() {
        /**
        * The ID of the task.
        * @name CsvImportTask#id
        * @type string
        */
        this.id = undefined;

        /**
        * A file.File object containing data to be imported OR a string containing raw CSV text to be imported.
        * @name CsvImportTask#importFile
        * @type file.File | string
        */
        this.importFile = undefined;

        /**
        * Internal ID or script ID of a saved import map to be used for the import.
        * @name CsvImportTask#mappingId
        * @type int | string
        */
        this.mappingId = undefined;

        /**
        * Overrides the CSV import queue preference.
        * @name CsvImportTask#queueId
        * @type int
        */
        this.queueId = undefined;

        /**
        * The name of the import job to be shown on the status page for CSV imports.
        * @name CsvImportTask#name
        * @type string
        */
        this.name = undefined;

        /**
        * A map of key/value pairs "sublist->file" for a multi-file import job.
        * The key defines the internal ID of the record sublist for which data is being imported.
        * The value is a file.File object containing data to be imported OR a string containing raw CSV text to be imported.
        * @name CsvImportTask#linkedFiles
        * @type Object
        */
        this.linkedFiles = undefined;

        /**
        * Helper function used by file module to inject its delegate back to us.
        */
        this._fd = undefined;

        /**
        * Submits the task and returns an unique ID.
        *
        * @governance 100 units
        *
        * @returns {String} taskId
        * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
        */
        this.submit = function (options) { };

        /**
        * Returns the object type name (task.CsvImportTask).
        *
        * @returns {string}
        */
        this.toString = function (options) { };

        /**
        * JSON.stringify() implementation.
        *
        * @returns {Object}
        */
        this.toJSON = function (options) { };
    }

    /**
    *
    * @protected
    * @constructor
    */
    function CsvImportTaskStatus() {
        /**
        * The taskId associated with the specified task.
        * @name CsvImportTaskStatus#taskId
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.taskId = undefined;

        /**
        * Represents the task status. Returns one of the task.TaskStatus enum values.
        * @name CsvImportTaskStatus#status
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.status = undefined;

        /**
        * Returns the object type name (task.CsvImportTaskStatus).
        *
        * @returns {string}
        */
        this.toString = function (options) { };

        /**
        * JSON.stringify() implementation.
        *
        * @returns {Object}
        */
        this.toJSON = function (options) { };
    }

    /**
    * @protected
    * @constructor
    */
    function EntityDeduplicationTask() {
        /**
        * The ID of the task.
        * @name EntityDeduplicationTask#id
        * @type string
        */
        this.id = undefined;

        /**
        * Represents the entity type. Use values from the task.DedupeEntityType enum.
        * @name EntityDeduplicationTask#entityType
        * @type string
        */
        this.entityType = undefined;

        /**
        * Master record ID.
        * @name EntityDeduplicationTask#masterRecordId
        * @type int
        */
        this.masterRecordId = undefined;

        /**
        * Master selection mode. Use values from the task.MasterSelectionMode enum.
        * @name EntityDeduplicationTask#masterSelectionMode
        * @type string
        */
        this.masterSelectionMode = undefined;

        /**
        * Deduplication mode. Use values from the task.DedupeMode enum.
        * @name EntityDeduplicationTask#dedupeMode
        * @type string
        */
        this.dedupeMode = undefined;

        /**
        * Records to deduplicate.
        * @name EntityDeduplicationTask#recordIds
        * @type int[]
        */
        this.recordIds = undefined;

        /**
        * Submits the task and returns an unique ID.
        *
        * @governance 100 units
        *
        * @returns {String} taskId
        * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
        */
        this.submit = function (options) { };

        /**
        * Returns the object type name (task.EntityDeduplicationTask).
        *
        * @returns {string}
        */
        this.toString = function (options) { };

        /**
        * JSON.stringify() implementation.
        *
        * @returns {Object}
        */
        this.toJSON = function (options) { };
    }

    /**
    *
    * @protected
    * @constructor
    */
    function EntityDeduplicationTaskStatus() {
        /**
        * The taskId associated with the specified task.
        * @name EntityDeduplicationTaskStatus#taskId
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.taskId = undefined;

        /**
        * Represents the task status. Returns one of the task.TaskStatus enum values.
        * @name EntityDeduplicationTaskStatus#status
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.status = undefined;

        /**
        * Returns the object type name (task.EntityDeduplicationTaskStatus).
        *
        * @returns {string}
        */
        this.toString = function (options) { };

        /**
        * JSON.stringify() implementation.
        *
        * @returns {Object}
        */
        this.toJSON = function (options) { };
    }

    /**
    * @protected
    * @constructor
    */
    function WorkflowTriggerTask() {
        /**
        * The ID of the task.
        * @name WorkflowTriggerTask#id
        * @type string
        */
        this.id = undefined;

        /**
        * The record type of the workflow base record.
        * @name WorkflowTriggerTask#recordType
        * @type string
        */
        this.recordType = undefined;

        /**
        * The internal ID of the base record.
        * @name WorkflowTriggerTask#recordId
        * @type int
        */
        this.recordId = undefined;

        /**
        * The internal ID (int) or script ID (string) for the workflow definition. This is the ID that appears in the ID field on the Workflow Definition Page.
        * @name WorkflowTriggerTask#workflowId
        * @type int | string
        */
        this.workflowId = undefined;

        /**
        * Key/value pairs which override static script parameter field values on the deployment.
        * Used to dynamically pass context to the script.
        * @name WorkflowTriggerTask#params
        * @type Object
        */
        this.params = undefined;

        /**
        * Submits the task and returns an unique ID.
        *
        * @governance 20 units
        *
        * @returns {String} taskId
        * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
        */
        this.submit = function (options) { };

        /**
        * Returns the object type name (task.WorkflowTriggerTask).
        *
        * @returns {string}
        */
        this.toString = function (options) { };

        /**
        * JSON.stringify() implementation.
        *
        * @returns {Object}
        */
        this.toJSON = function (options) { };
    }

    /**
    *
    * @protected
    * @constructor
    */
    function WorkflowTriggerTaskStatus() {
        /**
        * The taskId associated with the specified task.
        * @name WorkflowTriggerTaskStatus#taskId
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.taskId = undefined;

        /**
        * Represents the task status. Returns one of the task.TaskStatus enum values.
        * @name WorkflowTriggerTaskStatus#status
        * @type string
        * @readonly
        * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
        */
        this.status = undefined;

        /**
        * Returns the object type name (task.WorkflowTriggerTaskStatus).
        *
        * @returns {string}
        */
        this.toString = function (options) { };

        /**
        * JSON.stringify() implementation.
        *
        * @returns {Object}
        */
        this.toJSON = function (options) { };
    }
};

define([], function () {
    return new N.modules.Task();
});