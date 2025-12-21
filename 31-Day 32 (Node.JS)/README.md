it is not a language, library or framework
JS runtime Environment
it is used for server side programming.

REPL - Read Evaluate Print Loop

# Process in Node
process: this object provides information about, and control over, the current Node.js process.
process.argv : returns an array containing the command-line arguments passed when Node.js process was launched.

whenever use require it is must to use index.js to combine other files. it is like entry point

# NPM(Node Package Manager)
npm is the standard package manager for Node.js
it is basically a library of package(code) that is made by other developers to help other developers. just like bootstrap for css

to install packages we use
npm install (package name)
https://www.npmjs.com/ by using this site

it will install some files and folder in the directory
node_modules - the node_modules folder contains every installed dependency for your project.
package-lock.json - it is a record of the exact version of every installed dependency, including its sub-dependencies and their versions.
package.json - the package.json file contains desciptive and functional metadata about a project, such as a name, verson and dependencies. 
if the node_modules file got deleted we can get back with the help of package.json by type "npm install" on the terminal(of current node directory) it will automatic retrieve the deleted files
it is not a good practice to push node_modules into github