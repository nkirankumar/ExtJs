Ext.define("MyApp.view.FormPanel", {
	extend : "Ext.form.Panel",
	title : "Controls",
	url : "someUrl",
	// standardSubmit:true,//to disable AJAX and opt for a normal form
	// submission
	items : [
			{
				xtype : "radiogroup",
				fieldLabel : "Title",
				vertical : true,
				columns : 1,
				items : [ {
					boxLabel : "Mr",
					name : "title"
				}, {
					boxLabel : "Ms",
					name : "title"
				} ]
			},
			{
				xtype : "textfield",
				fieldLabel : "Name",
				allowBlank : false,
				maxLength : 50,
				msgTarget : "side"
			},
			{
				xtype : "datefield",
				fieldLabel : "Date of birth",
				msgTarget : "side"
			},
			{
				xtype : "textfield",
				fieldLabel : "Blog",
				msgTarget : "side",
				vtype : "url"
			},
			{
				xtype : "numberfield",
				fieldLabel : "Years of experience",
				minValue : 5,
				maxValue : 15
			},
			{
				xtype : "textarea",
				fieldLabel : "Address",
				validator : function(val) {
					if (val.indexOf("#") != -1 || val.indexOf(".") != -1)
						return "Invalid characters like # or . in address";
					return true;
				}
			},
			{
				xtype : "button",
				text : "Submit",
				listeners : {
					"click" : function(src) {
						src.up("form").submit(
								{
									success : function(form, action) {
										alert("Successfully submitted");
									},
									failure : function(form, action) {
										debugger
										console.log(action.failureType);
										console.log(action.result);
										alert(action.response.status + ", "
												+ action.response.statusText);
									}
								});
					}
				}
			} ]

});