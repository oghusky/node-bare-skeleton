#!/usr/bin/env node

// import functions from index file
const {scaffoldFolder, mkdirFolder, makeGitIgnore, makeReadMe, createServerFile} = require("./index");
const config = require("./config.js");
const lang = require("./lang.js");
const LOG_LANG = config.LOG_LANG;

console.log(`${lang.LANG[LOG_LANG].FIRST_LOG}`);

// make new folders
mkdirFolder("models",scaffoldFolder);
mkdirFolder("controllers",scaffoldFolder);
mkdirFolder("routes",scaffoldFolder);
mkdirFolder("middleware",scaffoldFolder);
mkdirFolder("public", scaffoldFolder);
// make gitignore file
makeGitIgnore();
// make readme file
makeReadMe();
// creates server file in root folder
createServerFile();

console.log(`${lang.LANG[LOG_LANG].LAST_LOG}`);
