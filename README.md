# QUnit Dirigible Module

[![Eclipse License](http://img.shields.io/badge/license-Eclipse-brightgreen.svg)](LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/dirigiblelabs/ext-qunit.svg)](https://github.com/dirigiblelabs/ext-qunit/graphs/contributors)

## Use
### Example
```javascript
var QUnit = require("qunit/qunit");

QUnit.module('Module 1:');

QUnit.test("Test 1", function(assert) {
	assert.ok(true, 'Passing assertion');
	assert.ok(false, 'Failing assertion');
});

require("qunit/test-runner").run();
```

The next section will use this example to explore the main steps in using QUnit for testing server-side scripts.

### Load Qunit
To get a reference to the latest QUnit in this module, use the alias `qunit/qunit` path and `require` it:  
`var QUnit = require("qunit/qunit");`  
Or to get reference to a specific version:  
`var QUnit = require("qunit/qunit-2.0.1");`  
In this example the reference is to QUnit 2.0.1. Change as appropriate.

Note that all instances of QUnit supplied by such `require` invocations are singletons.

### Develop tests
Develop Qunit tests as usual. Just bear in mind that this is server-side environment and don't count on browser JS environment and objects like window or document.  
  
```javascript
QUnit.module('Module 1:');

QUnit.test("Test 1", function(assert) {
	assert.ok(true, 'Passing assertion');
	assert.ok(false, 'Failing assertion');
});
```

### Run tests
To run the tests and dispatch results, with Dirigible Test Runner use:  
`require("qunit/test-runner").run();`  

If you use a specific version (not the latest) of QUnit from this module, you need to supply it explicitly as argument to the service method:  
`require("qunit/test-runner").run(QUnit);`  

### Test results
Test results are available on the Dirigible server console and via the Test Runner Service by default. You can opt out of either of these or both. The `run` method has an optional second argument, which is a configuration object that can be used to disable the default reporters in use:  
```javascript
require("qunit/test-runner").run(QUnit, {
    "disable-console-reporter": true,
    "disable-service-reporter": true
  });
```

Or omit the QUnit argument and supply only the configuration:  
<pre>
require("qunit/test-runner").run({"disable-console-reporter":true});
</pre>

## License

This project is copyrighted by [SAP SE](http://www.sap.com/) and is available under the [Eclipse Public License v 1.0](https://www.eclipse.org/legal/epl-v10.html). See [LICENSE](LICENSE) and [NOTICE.txt](NOTICE.txt) for further details.
