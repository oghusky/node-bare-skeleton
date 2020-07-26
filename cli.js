#!/usr/bin/env node
// import functions from index file
const { scaffoldFolder, mkdirFolder, makeGitIgnore, makeReadMe, makePackageJson, createServerFile } = require("./index");

// make new folders
mkdirFolder("models", scaffoldFolder);
mkdirFolder("controllers", scaffoldFolder);
mkdirFolder("routes", scaffoldFolder);
mkdirFolder("middleware", scaffoldFolder);
mkdirFolder("public", scaffoldFolder);
// make gitignore file
makeGitIgnore();
// make readme file
makeReadMe();
// creates server file in root folder
createServerFile();
// creates package.json
makePackageJson();