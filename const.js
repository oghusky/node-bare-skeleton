const gitIgnoreFileNames = [
  "node_modules/",
  "package-lock.json",
  ".env",
  ".env.development",
  ".env.test",
  ".vscode"
];

const serverBoilerPlate = [
  "require('dotenv').config();",
  "const express = require('express');",
  "const app = express();",
  "const path = require('path');",
  "app.use(express.urlencoded({extended: true}));",
  "app.use(express.json());",
  "app.use(express.static(path.join(__dirname, 'public')));",
  "const PORT = process.env.PORT || 5000;",
  "app.listen(PORT, ()=>{ console.log('Server listening on '+ PORT)})"
];

module.exports = {
  gitIgnoreFileNames,
  serverBoilerPlate
};
