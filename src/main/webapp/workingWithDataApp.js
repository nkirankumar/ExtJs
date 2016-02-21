Ext.application({
	name : 'MyApp',
	requires : [ 'Ext.container.Viewport', 'Ext.data.Connection',
			'Ext.data.Request' ],
	launch : function() {
		console.log("launch method");
		// TODO:need to fix "Uncaught TypeError: Cannot read property 'indexOf'
		// of null" issue with below commented code
//		var connection = Ext.create("Ext.data.Connection");
//
//		connection.request(Ext.create("Ext.data.Request", {
//			url : "http://localhost:2016/Extjs/api/v1/myResource/method",
//			success : function(xhr) {
//				console.log(xhr.responseText);
//				console.log("success");
//			},
//			failure : function(xhr) {
//				console.log("Error: " + xhr.statusText);
//				console.log("Error: " + xhr.statusText);
//				console.log("failure");
//			}
//		}));

		 Ext.Ajax.request({
			url : "http://localhost:2016/Extjs/api/v1/myResource/method",
			success : function(xhr) {
				console.log(xhr.responseText);
			},
			failure : function(xhr) {
				console.log("Error: " + xhr.statusText);
			}
		});
	}
});