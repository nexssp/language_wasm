let languageConfig = Object.assign({}, require("./wasm.win32.nexss.config"));

// let sudo = process.sudo;

languageConfig.compilers = {
  wasmtime: {
    install: `pkg install -y wasmer`,
    command: "wasmer",
    args: "run <file>",
    help: ``,
  },
};

const distro = process.distro;

languageConfig.dist = distro;

module.exports = languageConfig;
