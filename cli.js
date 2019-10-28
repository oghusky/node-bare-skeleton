#!/usr/bin/env node
// import functions from index file
const {scaffoldFolder, mkdirFolder, makeGitIgnore, makeReadMe, createServerFile} = require("./index");

// make new folders
mkdirFolder("models",scaffoldFolder);
mkdirFolder("controllers",scaffoldFolder);
mkdirFolder("routes",scaffoldFolder);
mkdirFolder("middleware",scaffoldFolder);
// make gitignore file
makeGitIgnore();
// make readme file
makeReadMe();
// creates server file in root folder
createServerFile();
// console log how to use package
console.log('Directions for use:\n1. Go to your "package.json" and \nin your "scripts" object  add \n"scaffold": "bare-node" \n2. Run "npm run scaffold" in your termina\n3. Watch the magic happen');