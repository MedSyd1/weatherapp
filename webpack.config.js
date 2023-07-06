const path = require("path"); // we import the node.js core module path , and this module "path" provides multiples utilities to work with the files and directory paths

// path.resolve()
// __dirname the path of the parent directory of the webpack.config.js
// CommonJS(Node.js) : require and module.exports
// ES6  : import and export
// ES6 modules they use export , import to define and impost module  , has default and named export allowing us to export multiple values from a module
//
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), // return /practice/dist
    filename: "bundle.js",
  },
  watch: true,
};
