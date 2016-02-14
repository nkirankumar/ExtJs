/**
 * 
 */
/*
 * Ext.onReady(function() { Ext.create("Ext.Panel", { title : "Hello World
 * Panel", items : [ Ext.create("Ext.form.field.Text", { fieldLabel : "Name", id :
 * "nametext" }), Ext.create("Ext.Button", { text : "Click", handler :
 * function() { Ext.Msg.alert(Ext.getCmp("nametext").getValue()); } }) ],
 * renderTo : Ext.getBody() }); });
 */
Ext.application({
	name : 'MyApp',
	requires : [ 'Ext.container.Viewport' ],
	launch : function() {
		var form = Ext.create('MyApp.view.FormPanel');
		Ext.create('Ext.container.Viewport', {
			items : [ form ]
		});
	}
});