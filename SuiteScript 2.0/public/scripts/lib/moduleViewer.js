// Show the master list of modules, including properties

define([], function () {
    var view,
        showProperties;
   
    showProperties = function (object, options) {
        var attr,
            type;

        Object.keys(object).forEach(function (name, index, array) {            
            // Don't show inherited properties
            if (object.hasOwnProperty(name)) {
                attr = object[name];
                type = typeof (attr);

                if (type === 'object') {
                    if (options.objectCallback) {
                        options.objectCallback(name, attr);
                    }
                    
                } else if (type === 'function') {
                    if (options.functionCallback) {
                        options.functionCallback(name, attr);
                    }

                } else {
                    if (options.propertyCallback) {
                        options.propertyCallback(name, attr);
                    }
                }
            }
        });
    };

    view = function (modules, options) {

        modules.forEach(function (moduleName) {
            require([moduleName], function (mod) {
                if (options.moduleCallback) {
                    options.moduleCallback(moduleName, mod);
                }                

                if (typeof (mod) === 'object') {
                    showProperties(mod, options);
                }
            });
        });
    };

    return {
        view: view        
    };
});