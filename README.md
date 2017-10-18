# QUnit Dirigible v3 Module

[![Eclipse License](http://img.shields.io/badge/license-Eclipse-brightgreen.svg)](LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/dirigiblelabs/ext-v3-qunit.svg)](https://github.com/dirigiblelabs/ext-v3-qunit/graphs/contributors)

## Use
### Example
<pre>
var QUnit = require("qunit/qunit");

QUnit.module('Module 1:');

QUnit.test("Test 1", function(assert) {
	assert.ok(true, 'Passing assertion');
	assert.ok(false, 'Failing assertion');
});

require("qunit/reporters/console-reporter");
require("qunit/test-runner").service();
</pre>
The next section will use this example to explore the main steps in using QUnit for testing server-side scripts.

### Load Qunit
To get a reference to a specific version of QUnit, use:  
`var QUnit = require("qunit/qunit-2.0.1");`  
In this example the reference is to QUnit 2.0.1. Change as appropriate.

Or use `qunit/qunit` (no version), which is alias for the latest available version in this repository:  
`var QUnit = require("qunit/qunit");`  

Note that all instances QUnit supplied by `require` are singletons.

### Develop tests
Develop Qunit tests as usual. Just bear in mind that this is server-side environment and don't count on browser JS environment and objects like window or document.  
  
<pre>QUnit.module('Module 1:');

QUnit.test("Test 1", function(assert) {
	assert.ok(true, 'Passing assertion');
	assert.ok(false, 'Failing assertion');
});</pre>

### Test execution and results reporting
You will need to instrument results reporting, before executing tests if you want to see any results. This module comes with two out-of-the-box results reporters. 
* Console results reporter  
  Results will be printed in Dirigible's console using the `console` global object.  
  To enable console reporting call:  
  `require("qunit/reporters/console-reporter");`  
  This will require and register the reporter with the QUnit that goes by the module name `"qunit/qunit"`. To enforce use of another QUnit instance use the `Qunit` property to specify it:  
  `require("qunit/reporters/console-reporter").Qunit = Qunit`
* Test Runner Service results reporter  
  This reporter is used as callback internally by Dirigible's Test Runner and it's not likely that you will need to require it explicitly. For more information on the Test Runner see below.

To execute tests we need QUnit's `load` method invoked.  
If you have instrumented the tests to report results only using the console results reporter, make sure that you invoke `QUnit.load()` **after** you have required this reporter.

However, you can make use of Dirigible Tests Runner instead, and it will implicitly call `QUnit.load()` for you.  
To run tests using Dirigible Test Runner use:  
`require("qunit/test-runner").service();`  
It will implicitly require the Test Runner Service results reporter mentioned above, invoke tests with a call to `QUnit.load()`, and depending on the requested results media type, either forward you to a web page with Tests dashboard UI or return the results in the requested media type (xml or json).  
If you use a specific version (not the latest) of QUnit from this module, you need to supply it explicitly as argument to the service method:  
`require("qunit/test-runner").service(QUnit);`  

Note, that you can make use of both test results reporters together.  


## License

This project is copyrighted by [SAP SE](http://www.sap.com/) and is available under the [Eclipse Public License v 1.0](https://www.eclipse.org/legal/epl-v10.html). See [LICENSE](LICENSE) and [NOTICE.txt](NOTICE.txt) for further details.
