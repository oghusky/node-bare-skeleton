## Node-Bare-Skeleton
-This package creates a basic backend-scaffolding
-It creates the following folders:
- controllers
- models 
- routes
- middleware
- public
- In each folder except public it also creates a blank "index.js" file
- It also creates a blank "README.md" and a ".gitignore" file setup to ignore your "node_modules" folder and your "package-lock.json" file
- Root index.js requires multiple files and packages that make it ready to run your server out of the box just run "node index.js"

### Dependency Packages
- dotenv
- express
- path

### Directions for use:
1. Create a new folder
2. Run "npm init" in the newly created folder
3. In the terminal run command "npm i node-bare-skeleton"
4. Go to your "package.json" in your new app and
in your "scripts" object  add "scaffold": "node-bare-skeleton"
5. Run "npm run scaffold" in your terminal
6. Watch the magic happen

### Built using:
Node.js and the FileSystem package

### GitHub Link
[node-bare-skeleton](https://github.com/oghusky/node-bare-skeleton)
