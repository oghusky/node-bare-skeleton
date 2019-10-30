#!/usr/bin/env node

// import functions from index file
const {scaffoldFolder, mkdirFolder, makeFile, config, lang, LOG_LANG} = require("./index");

console.log(`${lang.LANG[LOG_LANG].FIRST_LOG}`);

// make new folders
mkdirFolder("models",scaffoldFolder);
mkdirFolder("controllers",scaffoldFolder);
mkdirFolder("routes",scaffoldFolder);
mkdirFolder("middleware",scaffoldFolder);
mkdirFolder("public", scaffoldFolder);

// make gitignore file
makeFile(".gitignore", config.GIT_IGNORE_TEMPLATE_PATH)
// make readme file
makeFile("README.md", config.README_TEMPLATE_PATH)
// creates server file in root folder
makeFile("index.js", config.INDEX_JS_TEMPLATE_PATH)

console.log(`${lang.LANG[LOG_LANG].LAST_LOG}`);
