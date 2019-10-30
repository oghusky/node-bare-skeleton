const fs = require("fs");

const config = require("./config.js");

const lang = require("./lang.js");

const LOG_LANG = config.LOG_LANG;

// takes in cb and creates a folder with argument name
exports.mkdirFolder=(foldername, cb)=>{
  cb(foldername);
}

// function to create gitignore file
exports.makeGitIgnore = ()=>{
  // writes to file what it shoud ignore once file is created
  fs.writeFile(".gitignore", fs.readFileSync(config.GIT_IGNORE_TEMPLATE_PATH), (err)=>{
    if(err) throw err;
    // logs if sucessfull
    console.log(`[+] .gitignore ${lang.LANG[LOG_LANG].CREATED}`);
  });
}

exports.createServerFile = ()=>{
  // writes server js file to root folder
  fs.writeFile("index.js", fs.readFileSync(config.INDEX_JS_TEMPLATE_PATH), (err)=>{
    if(err) throw err;
    // logs if successful
    console.log(`[+] index.js ${lang.LANG[LOG_LANG].CREATED}`);
  })
}

// makes readme file
exports.makeReadMe = ()=>{
  // because second parameter is blank file is created and left blank
  fs.writeFile("README.md", fs.readFileSync(config.README_TEMPLATE_PATH), (err)=>{
    if(err) throw err;
    // logs if successful
    console.log(`[+] README.md ${lang.LANG[LOG_LANG].CREATED}`);
  })
}

// function to create folder
exports.scaffoldFolder=(foldername)=>{
  // because recursive is false if folders exist this will throw err
  return fs.mkdir(`${foldername}`, {recursive:false}, (err)=>{
    if(err) throw err;
    // logs if successful
    console.log(`${foldername} ${lang.LANG[LOG_LANG].CREATED}`);
    // if folder is created successfully this creates the blank index file inside of it
    fs.writeFile(`${foldername}/index.js`, "", (err)=>{
      if(err) throw err;
      // logs if successful
      console.log(`[+] ${foldername}/index.js ${lang.LANG[LOG_LANG].CREATED}`);
    });
  });
}
