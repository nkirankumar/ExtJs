Ext.application({
	name : 'MyApp',
	requires : [ 'Ext.container.Viewport', 'Ext.data.Connection',
			'Ext.data.Request','MyApp.model.Country' ],
	launch : function() {
		console.log("launch method");
		// TODO:need to fix "Uncaught TypeError: Cannot read property 'indexOf'
		// of null" issue with below commented code
		// var connection = Ext.create("Ext.data.Connection");
		//
		// connection.request(Ext.create("Ext.data.Request", {
		// url : "http://localhost:2016/Extjs/api/v1/myResource/method",
		// success : function(xhr) {
		// console.log(xhr.responseText);
		// console.log("success");
		// },
		// failure : function(xhr) {
		// console.log("Error: " + xhr.statusText);
		// console.log("Error: " + xhr.statusText);
		// console.log("failure");
		// }
		// }));
		// concept-1
		// ================
		Ext.Ajax.request({
			url : "http://localhost:8080/Extjs/api/v1/myResource/method",
			success : function(xhr) {
				console.log(xhr.responseText);
			},
			failure : function(xhr) {
				console.log("Error: " + xhr.statusText);
			}
		});

		// concept-2
		// ================
		// var fr = Ext.create("MyApp.model.Country", {
		// name : "France",
		// population : 65436552
		// });
		// console.log(fr.get("name"));
		// console.log(fr.getId());
		// fr.set("capital", "Paris");

		// concept-3
		// =============
		//TODO:need to fix following print o/p
		//var country = Ext.create("MyApp.model.Country");
		debugger
		MyApp.model.Country.load("France1", {
			success : function(record) {
				debugger
				console.log(record.get("capital")); // Prints Paris1
				console.log(record.get("population")); // Prints 65436552
			}
		});
	}
});