let languageConfig = Object.assign({}, require("./wasm.win32.nexss.config"));

// let sudo = process.sudo;

languageConfig.compilers = {
  wasmtime: {
    install: `curl https://wasmtime.dev/install.sh -sSf | bash`, // but this is installed already.
    command: "wasmtime",
    args: "<file>",
    help: ``,
  },
};

const distro = process.distro;

// This function just replace all apt-get,apt to the right distribution pkg installer.
languageConfig.compilers.wasmtime.install = process.replacePMByDistro(
  languageConfig.compilers.wasmtime.install
);

languageConfig.dist = distro;

module.exports = languageConfig;
