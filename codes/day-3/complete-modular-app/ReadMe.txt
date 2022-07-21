1. Module:
---------------------------------------------------------------------
A module is a function or group of similar functions. They are grouped together within a file and contain the code to execute a specific task when called into a larger application.

You create modules to better organize and structure your codebase. You can use them to break down large programs into smaller, more manageable, and more independent chunks of code which carry out a single or a couple of related tasks.

Modules should be:
Independent/Self-contained: A module has to be as detached from other dependencies as possible.
Specific: A module needs to be able to perform a single or a related group of tasks. The core essence of creating them in the first place is to create separate functionalities. One module, one (kind of) task.
Reusable: A module has to be easy to integrate into various kinds of programs to perform its task.

2. Module formats:
-----------------------------------------------------------------------
There are many ways to create modules. Those are known as module formats.
Such as, 
Common JS module or Node.js module, ES6 module format or ECMAScript 2015 module, AMD (Asynchronous Module Definition) or RequireJS module, UMD (Universal Module Definition) or  UmdJS module, System module or SystemJS module etc.

Refer the following links for further information: 
https://weblogs.asp.net/dixin/understanding-all-javascript-module-formats-and-tools

https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/


3. Module loader:
---------------------------------------------------------------------
It is such a s/w which understands the import and export related modular formats and resolves the dependencies among the files and accordingly loads the same in runtime environment (browser or node js). In simple way, it can be said: "A module loader interprets and loads a module written in a certain module format."

There are module loaders, such as, RequireJs, SystemJS etc.

Why you need RequireJS in web application?
-----------------------------------------------------------------------
Node JS supports modular JS code and by default understands Common JS format, since it has Common JS module loader by default.

Unfortunately, unlike Node JS, browser do not understand JS code written using any module format, such as: ES6 (import/export) or CommonJS (module.exports and require) or even AMD, UMD etc. Browser always expects that all the JS files should be linked with HTML file, in order to be loaded in the browser. Hence you need to supply a module loader s/w to browser.

RequireJS module loader:
---------------------------------------------------------------------------
RequireJS is a JavaScript file and module loader. It is optimized for in-browser use. Using a modular script loader like RequireJS will improve the speed and quality of your code. But requirejs supports AMD module format APIs. Hence, if you write JS code using some other module format, it is best to get that converted to AMD (such as, using babel transpiler)

RequireJS setup:
----------------------------------------------------------------------------------------
a. you can visit the website for downloading the requirejs: https://requirejs.org/docs/download.html. Then click on "Minified" button link, which will take you this link: https://requirejs.org/docs/release/2.3.6/minified/require.js. you can copy the full production (minified) code and the create a file of any name (say, require.js) in your rapplication and pase the copied code in that file.

after that, write script tag in the HTML file as the following:
<script src='<path>/require.js' data-main="<path>/<entry-js-file>"></script>

such as, in our application requirejs minified code has been copied and pasted in "requre.js" file in the "scripts" folder, placed at the root of the directory and the script looks like th following in the index.html file
<script src='./scripts/require.js' data-main="./src/index.js"></script>

b. or you can download the requirejs using npm using the following command:
>npm install requirejs
[-D or --save-dev is NOT used here, which indicates that these packages are required during development time as well during production]

This will install requirejs in the node_modules folder
you can link the source code file in index.html using script tag as the following:
<script src="./node_modules/requirejs/require.js" data-main="./build/index.js"></script>

4. Babel:
--------------------------------------------------------------------------
Babel is one of the most popular transpiler for JavaScript.

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:
 - Transform syntax
 - Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
 - Source code transformations (codemods)
    etc.

Required packages for babel transpiler
-----------------------------------------------------------------
a. @babel/core: core babel transpiler packages
b. @babel/cli: babel command line interface package (for running babel commands)
c. @babel/plugin-transform-modules-amd: this is plugin, required by babel to convert ES6 module format (used in JS code) to AMD format, since require js module loader understands this AMD format
d. @babel/preset-env: this preset package is used for converting JS code written using new features of JS (ES6+ onwards) into older version of JS code (less than ES6, i.e. ES5 or ES3 etc.), so that your JS code can be understood by even older browser having older version of JS engine (such IE)

Note: all these 3rd party open source packages get installed in the node_modules folder and the babel executable will be found in ".\node_modules\.bin\" folder.

command to install the packages:
-----------------------------------------------------------------------------
>npm i @babel/cli @babel/core @babel/plugin-transform-modules-amd @babel/preset-env -D
[-D is used to mention that these packages are required during development time only, NOT during production]
3. babel configuration file:
create a file at the root of the directory for configuring babel transpiler (informing babel to use those ES6 to AMD converter plugin and ES6+ feature to older version converter preset package)
file name can be: .babelrc or .babelrc.json or babel.config.json 
refer the file created in this application to understand how to mention the names of preset and plugin packages [using "plugins" and "presets" properties] required by babel 

Run babel transpiler:
--------------------------------------------------------------------------
a. in the terminal type the following =>
>./node_modules/.bin/babel src --out-dir build
src: the name of the source code directory (containing one or more than one file)
--out-dir build: --out-dir is used to mention the output directory where the transpiled code should be stored. For example: folder, named "build" or "dist" or "out" etc.

b. you can write a small script in the package.json file "script" property section like the following:
{
    "script":{
        "compile":".\node_modules\.bin\babel src --out-dir build"
    }
}
or 
{
    "script":{
        "compile":"babel src --out-dir build"
    }
}
Note: 
i. you can avoid writing the full relative path in the script section:
.\node_modules\.bin\ 
since when you run this script in the terminal, NPM will automatically look for the "babel" or any other executable from the folder ".\node_modules\.bin\" by default
ii. the name of the script is your choice (such as compile or transpile or build etc.)

Now, run the script in the terminal using "npm run" command
>npm run <script-name>
such as: >npm run compile

for further information visi the following website of babel:
https://babeljs.io/ and visit the "Docs", "Try it out" and "Setup" links



