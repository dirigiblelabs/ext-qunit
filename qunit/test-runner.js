/*******************************************************************************
 * Copyright (c) 2017 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * Contributors:
 * SAP - initial API and implementation
 *******************************************************************************/
 
/* eslint-env node, dirigible */
(function(){
"use strict";
	exports.service = function(QUnit){
		var svc_reporter = require("qunit/reporters/svc-reporter");
		svc_reporter.QUnit = QUnit;
		require("test/runner").service({
			"execute": function(){
					QUnit.load();
				}.bind(this),
			"serviceReporter": svc_reporter 
		});	
	};
})();
