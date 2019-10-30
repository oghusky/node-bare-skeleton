const fs = require("fs");
const imports = require('./import.js');

// takes in cb and creates a folder with argument name
exports.mkdirFolder=(foldername, cb, cli_fs)=>{
  cb(foldername, cli_fs);
}

// Create a file
/**
 * makeFile
 * This method create a file with two parameter
 * - The file path of the file
 * - The path of the template we want to add
 * - A function you want to execute after creating the file)optionnal_
 */
const makeFile = (file_path, template_path, your_personal_callback=null)=>{
  // because second parameter is blank file is created and left blank
  fs.writeFile(file_path, fs.readFileSync(template_path), { flag: 'wx' }, (err)=>{
    if(err) throw err;
    // logs if successful
    console.log(`[+] ${file_path} ${imports.lang.LANG[imports.LOG_LANG].CREATED}`);

    // A function you want to execute after creating the file
    if(your_personal_callback !== null) {
      your_personal_callback();
    }
  })
}
exports.makeFile = makeFile;

// function to create folder
exports.scaffoldFolder=(foldername, cli_fs)=>{
  // because recursive is false if folders exist this will throw err
  return fs.mkdir(`${foldername}`, {recursive: true},(err)=>{
    if(err) throw err;
    // logs if successful
    console.log(`[+] ${foldername} ${imports.lang.LANG[imports.LOG_LANG].CREATED}`);


    const default_content = fs.readFileSync(imports.config.DEFAULT_INDEX_JS_TEMPLATE_PATH)+"// You're in "+foldername+"/index.js\n";
    // We create the file in it
    cli_fs.writeFile(`${foldername}/index.js`, default_content, { flag: 'wx' }, (err)=>{
      if(err) throw err;
      // logs if successful
      console.log(`[+] ${foldername}/index.js} ${imports.lang.LANG[imports.LOG_LANG].CREATED}`);
    });
  });
}