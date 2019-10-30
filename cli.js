#!/usr/bin/env node

// import functions from index file
const {scaffoldFolder, mkdirFolder, makeFile} = require("./index");
const imports = require('./import.js');
const cli_fs = require("fs");

console.log(`${imports.lang.LANG[imports.LOG_LANG].FIRST_LOG}`);

// make new folders
mkdirFolder("models",scaffoldFolder, cli_fs);
mkdirFolder("controllers",scaffoldFolder, cli_fs);
mkdirFolder("routes",scaffoldFolder, cli_fs);
mkdirFolder("middleware",scaffoldFolder, cli_fs);
mkdirFolder("public", scaffoldFolder, cli_fs);
mkdirFolder("logs", scaffoldFolder, cli_fs);


// make gitignore file
makeFile(".gitignore", imports.config.GIT_IGNORE_TEMPLATE_PATH)
// make readme file
makeFile("README.md", imports.config.README_TEMPLATE_PATH)
// creates server file in root folder
makeFile("index.js", imports.config.INDEX_JS_TEMPLATE_PATH)

console.log(`${imports.lang.LANG[imports.LOG_LANG].LAST_LOG}`);
