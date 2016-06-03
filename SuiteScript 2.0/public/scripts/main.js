//
// Configure requirejs
//

requirejs.config({
    baseUrl: './scripts',

    paths: {
        'jquery': 'lib/jquery-1.12.4.min',        
        'moduleViewer': 'lib/moduleViewer',

        'N': 'lib/N/N',

        'N/auth': 'lib/N/modules/auth',
        'N/config': 'lib/N/modules/config',
        'N/crypto': 'lib/N/modules/crypto',
        'N/currency': 'lib/N/modules/currency',
        'N/email': 'lib/N/modules/email',
        'N/encode': 'lib/N/modules/encode',
        'N/error': 'lib/N/modules/error',
        'N/file': 'lib/N/modules/file',
        'N/format': 'lib/N/modules/format',
        'N/http': 'lib/N/modules/http',
        'N/https': 'lib/N/modules/https',        
        'N/record': 'lib/N/modules/record',
        'N/redirect': 'lib/N/modules/redirect',
        'N/render': 'lib/N/modules/render',
        'N/runtime': 'lib/N/modules/runtime',
        'N/search': 'lib/N/modules/search',
        'N/sso': 'lib/N/modules/sso',
        'N/task': 'lib/N/modules/task',
        'N/transaction': 'lib/N/modules/transaction',
        'N/ui': 'lib/N/modules/ui',
        'N/url': 'lib/N/modules/url',        
        'N/workflow': 'lib/N/modules/workflow',
        'N/xml': 'lib/N/modules/xml'
    }
});

require(['moduleViewer', 'jquery', 'N'], function (moduleViewer, $, N) {    
    
    var NETSUITE_MODULE_NAMES = [
        'N/auth',
        'N/config',
        'N/crypto',
        'N/currency',
        'N/email',
        'N/encode',
        'N/error',
        'N/file',
        'N/format',
        'N/http',
        'N/https',        
        'N/record',
        'N/redirect',
        'N/render',
        'N/runtime',
        'N/search',
        'N/sso',
        'N/task',
        'N/transaction',
        'N/ui',
        'N/url',        
        'N/workflow',
        'N/xml'
    ];

    var CUSTOM_MODULE_NAMES = [
        'SuiteScript/_SAMPLE_CS',
        'SuiteScript/_SAMPLE_SL',
        'SuiteScript/_SAMPLE_UE'
    ];

    moduleViewer.view(NETSUITE_MODULE_NAMES, {
        moduleCallback: function (name, mod) {
            $('#netsuiteModules').append('<div class="suitescript_module">[' + name + ']</div>');
        },
        propertyCallback: function (name, prop) {
            $('#netsuiteModules').children('div').last().append('<div class="suitescript_property">property: ' + name + '</div>');
        },
        functionCallback: function (name, func) {
            $('#netsuiteModules').children('div').last().append('<div class="suitescript_function">function ' + name + '()</div>');
        },
        objectCallback: function (name, obj) {
            $('#netsuiteModules').children('div').last().append('<div class="suitescript_object">' + name + ': ' + JSON.stringify(obj) + '</div>');
        }
    });

    moduleViewer.view(CUSTOM_MODULE_NAMES, {
        moduleCallback: function (name, mod) {
            $('#customModules').append('<div class="suitescript_module">[' + name + ']</div>');
        },
        propertyCallback: function (name, prop) {
            $('#customModules').children('div').last().append('<div class="suitescript_property">property: ' + name + '</div>');
        },
        functionCallback: function (name, func) {
            $('#customModules').children('div').last().append('<div class="suitescript_function">function ' + name + '()</div>');
        },
        objectCallback: function (name, obj) {
            $('#customModules').children('div').last().append('<div class="suitescript_object">' + name + ': ' + JSON.stringify(obj) + '</div>');
        }
    });
});