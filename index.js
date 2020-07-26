const fs = require("fs");

// takes in cb and creates a folder with argument name
exports.mkdirFolder = (foldername, cb) => {
  cb(foldername);
}

// function to create gitignore file
exports.makeGitIgnore = () => {
  // writes to file what it shoud ignore once file is created
  fs.writeFile(".gitignore", `
  node_modules/
  \npackage-lock.json`, (err) => {
    if (err) throw err;
    // logs if sucessfull
    console.log(".gitignore created");
  });
}

// create package.json file
exports.makePackageJson = () => {
  fs.writeFile("package.json", `
    {
  "name": "${process.env.PWD.split("/")[process.env.PWD.split("/").length - 1]}",
  "version": "1.0.0",
  "main": "index.js",
  "license": "ISC",
  "scripts": {
    "start": "node index.js"
  }
}
  `, (err) => {
    if (err) throw err;
    console.log("package.json cretead");
  })
}

exports.createServerFile = () => {
  // writes server js file to root folder
  fs.writeFile("index.js", `
  require('dotenv').config();
  \nconst express = require('express');
  \nconst app = express();
  \nconst path = require('path');
  \napp.use(express.urlencoded({extended: true}));
  \napp.use(express.json());
  \napp.use(express.static(path.join(__dirname, 'public')));
  \nconst PORT = process.env.PORT || 5000;
  \napp.listen(PORT, ()=>{ console.log('Server listening on '+ PORT)})`,
    (err) => {
      if (err) throw err;
      // logs if successful
      console.log("index.js created");
    })
}

// makes readme file
exports.makeReadMe = () => {
  // because second parameter is blank file is created and left blank
  fs.writeFile("README.md", "## Created with Node-Bare-Skeleton\n", (err) => {
    if (err) throw err;
    // logs if successful
    console.log("README.md created");
  })
}

// function to create folder
exports.scaffoldFolder = (foldername) => {
  // because recursive is false if folders exist this will throw err
  return fs.mkdir(`${foldername}`, { recursive: false }, (err) => {
    if (err) throw err;
    // logs if successful
    console.log(`${foldername} has been created`);
    // if folder is created successfully this creates the blank index file inside of it
    fs.writeFile(`${foldername}/index.js`, "", (err) => {
      if (err) throw err;
      // logs if successful
      console.log(`${foldername}/index.js created`);
    });
  });
}
