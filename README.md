# SuiteScript-2.0

This Visual Studio 2015 solution is intended to be used as a starting point for SuiteScript 2.0 development.  The project is a Node.js application with a built in Module Viewer to view embedded functions, properties, and objects in SuiteScript 2.0 modules.

After downloading and opening the solution, be sure to install all required NPM packages [npm install].  You can then get started with creating SuiteScript 2.0 modules!  Your SuiteScript 2.0 files must be created in the "public/scripts/suitescript" folder.  You can start from scratch or use one of the included SAMPLE files from the "public/scripts/suitescript" folder.

The project has been configured with Gulp [Task Runner] to automate the build process.  JSHint will be executed on all SuiteScript 2.0 files to check for any errors.  Your SuiteScript 2.0 files are then copied to "deploy/suitescript/debug" and "deploy/suitescript/release", where the "release" files are "Uglified".

