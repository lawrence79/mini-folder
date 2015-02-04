document.domain = "barc.com";

document.addEventListener('DOMContentLoaded', function () {
	console.log('Document Loaded');
	if(window.parent && window.parent.BCUS) {
		'use strict';
		console.log('BCUS Module accessible');

		var BCUS = window.parent.BCUS || {};
		
		BCUS.SignInModule = (function() {
			var _cache = {};

		})
	}
});