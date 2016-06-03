/// <binding AfterBuild='build' />
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    changed = require('gulp-changed');    

var buildMap = {
    N: {
        source: './public/scripts/lib/N/**/*.js',
        jsHint: {
            unused: false // Don't let unused parameters in API functions cause warnings
        }
    },
    SuiteScript: {
        source: './public/scripts/suitescript/*.js',
        dest: {
            debug: './deploy/SuiteScript/debug',
            release: './deploy/SuiteScript/release'
        },
        jsHint: {

        }
    }
};

//
// Custom Reporter used to output build errors in Visual Studio
//



gulp.task('default', ['build'], function (done) {
    return done();
});

gulp.task('build', ['jshint'], function (done) {
    return gulp.src(buildMap.SuiteScript.source)        
        .pipe(changed(buildMap.SuiteScript.dest.debug, { hasChanged: changed.compareSha1Digest }))
        .pipe(gulp.dest(buildMap.SuiteScript.dest.debug))        
        .pipe(uglify())        
        .pipe(gulp.dest(buildMap.SuiteScript.dest.release));        
});

gulp.task('jshint', [], function (done) {
    var map = require('map-stream'),
        chalk = require('chalk'),    
        merge = require('merge2'),
        jsHint = require('gulp-jshint'),    
        jsHintConfig = require('./jshint.json'),

        buildJSHintConfig,
        vsReporter;
    
    buildJSHintConfig = function (defaultValues, overrideValues) {
        var config,
            value;
        
        // Clone defaultValues
        config = JSON.parse(JSON.stringify(defaultValues));

        Object.keys(overrideValues).forEach(function (key) {
            value = overrideValues[key];

            config[key] = value;
        });

        return config;
    };
    
    vsReporter = map(function (file, cb) {
        var code,        
            line;
        
        if (!file.jshint.success) {
            if (file.jshint.results) {
                file.jshint.results.forEach(function (result) {
                    if (result) {
                        //console.log(JSON.stringify(result)); 
                        
                        code = result.error.code;
                        
                        if (code && code[0] === 'W') {
                            code = 'warning';
                        } else if (code && code[0] === 'E') {
                            code = 'error';
                        } else {
                            // Remove "(" and ")" from "id"
                            code = result.error.id.replace(/[(]{1}|[)]{1}/g, "");
                        }
                        
                        line = [
                            chalk.white(result.file),                        
                            chalk.yellow('(' + result.error.line + ',' + result.error.character + ')'), 
                            ' :', (code === 'error') ? chalk.red(code) : chalk.yellow(code), ' (', result.error.code, ')',
                            ' :', chalk.white(result.error.reason),
                            ' \t Evidence:', result.error.evidence
                        ];
                        
                        console.log(line.join(''));
                    }
                });
            }
        }
        cb(null, file);
    });

    return merge(
        //
        // Find problems in API
        //

        gulp.src(buildMap.N.source)
            .pipe(jsHint(buildJSHintConfig(jsHintConfig, buildMap.N.jsHint))),            

        //
        // Find problems in custom SuiteScript
        //

        gulp.src(buildMap.SuiteScript.source)
            .pipe(jsHint(buildJSHintConfig(jsHintConfig, buildMap.SuiteScript.jsHint)))
            
    )
    .pipe(vsReporter);
});


