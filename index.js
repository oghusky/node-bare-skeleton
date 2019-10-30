const fs = require("fs");

exports.config = require("./config.js");
exports.lang = require("./lang.js");
exports.LOG_LANG = config.LOG_LANG;

// takes in cb and creates a folder with argument name
exports.mkdirFolder=(foldername, cb)=>{
  cb(foldername);
}

// Create a file
/**
 * makeFile
 * This method create a file with two parameter
 * - The file path of the file
 * - The path of the template we want to add
 * - A function you want to execute after creating the file)optionnal_
 */
exports.makeFile = (file_path, template_path, your_personnal_callback=null)=>{
  // because second parameter is blank file is created and left blank
  fs.writeFile(file_path, fs.readFileSync(template_path), (err)=>{
    if(err) throw err;
    // logs if successful
    console.log(`[+] ${file_path} ${lang.LANG[LOG_LANG].CREATED}`);

    // A function you want to execute after creating the file
    if(your_personnal_callback !== null) {
      your_personnal_callback();
    }
  })
}

// function to create folder
exports.scaffoldFolder=(foldername)=>{
  // because recursive is false if folders exist this will throw err
  return fs.mkdir(`${foldername}`, {recursive:false}, (err)=>{
    if(err) throw err;
    // logs if successful
    console.log(`${foldername} ${lang.LANG[LOG_LANG].CREATED}`);

    makeFile(`${foldername}/index.js`, "");
  });
}