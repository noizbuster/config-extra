const path = require('path');
const fs = require('fs');

// The directory where the configuration files are stored
let defaultPath = process.env.CONFIG_DEFAULT_PATH || process.cwd();
if (defaultPath.indexOf('.') === 0) {
    defaultPath = path.join(process.cwd(), defaultPath);
}
let defaultFilePath = path.join(defaultPath, 'default.yaml');

// The directory where default configuration file is stored
let configPath = process.env.CONFIG_DIR || path.join(process.cwd(), 'config');
if (configPath.indexOf('.') === 0) {
    configPath = path.join(process.cwd(), configPath);
}
let configDefaultPath = path.join(configPath, '/default.yaml');

// load both origin default file and default configuration file
let originDefaultBuf = null;
let destDefaultBuf = null;
try {
    originDefaultBuf = fs.readFileSync(defaultFilePath);
} catch (e) {
}
try {
    destDefaultBuf = fs.readFileSync(configDefaultPath);
} catch (e) {
}

// check default files
if (!originDefaultBuf) {
    console.warn('default file does not exist. load configuration without default');
} else if (!destDefaultBuf) {
    fs.copyFileSync(defaultFilePath, configDefaultPath);
    console.info('default file in config directory is not exist. generate it from default');
} else if (!originDefaultBuf.equals(destDefaultBuf)) {
    fs.copyFileSync(defaultFilePath, configDefaultPath);
    console.info('default file in config directory is not fresh. update it to new version');
} else {
    console.info('default file is exist');
}

let config_extra = require('config');

console.info('configuration loaded (' + process.env.CONFIG_ENV + ')', config_extra);

module.exports = config_extra;
