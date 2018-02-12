# What is this package for
When you deploy your project using docker image and put some config through data-volume contents inside configuration directory is removed.  
the major problem is it remove default configuration also.


# How to use

## installation
``` bash
npm install config-extra --save
```

## usage

``` js
// it is optional but must called before require('config-extra'), unless default is cwd()
process.env.CONFIG_DEFAULT_PATH = process.cwd() + '/default'
  
// load configuration
const config = require('config-extra');
const some_value = config.get('some.value');
```

## details
Basically there should be no difference with [config]('http://www.npmjs.com/config') package

see: [config]('http://www.npmjs.com/config')

# Additional environment variable

* CONFIG_DEFAULT_PATH : The directory where the default.yaml file is located
  * default: CWD (usually root of npm project)

# Known Issues, Limitation
Currently it supports .yaml file only

# Contribution
Welcome your suggestion, issue and PR any time

### License
Apache 2.0  
see: LICENSE