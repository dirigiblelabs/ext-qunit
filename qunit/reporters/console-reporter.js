/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */
(function () {
	'use strict';

	var QUnit;
	if (this) {
		QUnit = this.QUnit || require("qunit/qunit");
	} else {
		QUnit = require("qunit/qunit");
	}

	var data = {
		tests: [],
		moduleTests: []
	};

	QUnit.moduleDone(function (details) {
		data.moduleTests.push(details);
	});
	QUnit.testDone(function (details) {
		data.tests.push(details);
	});
	QUnit.done(function (details) {
		data.testSuite = details;
		console.info(JSON.stringify(data));
	});

})();
