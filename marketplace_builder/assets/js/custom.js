function ready(fn) {if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading'){fn();}else {document.addEventListener('DOMContentLoaded', fn);}}

ready(function() {
	let doc = document;
	let body = (typeof $ !== 'undefined') ? $(doc.body) : doc.body;

	let scripts = {
		utils: {
			functionName: function() {
				// some code
			}
		},
		ui: {
			functionName: function() {
				// some code
			}
		},
		fixes: {
			functionName: function() {
				// some code
			}
		},
		tweaks: {
			functionName: function() {
				// some code
			}
		}
	};

	scripts.utils.functionName();
});
