let languageConfig = Object.assign(
  {},
  require(`../config.${process.platform}`)
);
languageConfig.title = "Wasm";
languageConfig.description =
  "WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine.";
languageConfig.url = "https://webassembly.org";
languageConfig.founders = ["W3C", "Mozilla", "Microsoft", "Google", "Apple"];
languageConfig.developers = [];
languageConfig.years = ["2017"];
languageConfig.extensions = [".wasm"];
languageConfig.licenses = ["Apache License"];

languageConfig.editors = {}; // defined in \.nexss\languages\config.win32.js (copy from .nexssCli\nexss-language\languages\)
languageConfig.run = "wasmtime";
languageConfig.printCommandLine = "";
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "";
languageConfig.builders = {};
languageConfig.compilers = {
  wasmtime: {
    install: "scoop install wasmtime",
    command: "wasmtime",
    args: "<file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.wasm.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
