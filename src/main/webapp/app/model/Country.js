Ext.define('MyApp.model.Country', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : "name",
		type : "string"
	}, {
		name : "capital",
		type : "string"
	}, {
		name : "population",
		type : "int"
	// mapping : "country_population"
	}, {
		name : "continent",
		type : "string",
		defaultValue : "Europe"
	} ],
	idProperty : "name",
	// concept-3
	// ==========
	proxy : {
		type : "memory",
		data : {
			country : {
				name : "France1",
				capital : "Paris1",
				population : 654,
				continent : "Asia"
			}
		},
		reader : {
			type : "json",
			root : "country"
		}
	}
});
