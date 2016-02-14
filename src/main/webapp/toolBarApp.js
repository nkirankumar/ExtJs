Ext.application({
	name : 'MyApp',
	requires : [ 'Ext.container.Viewport' ],
	launch : function() {
		var toolBar = Ext.create('MyApp.view.MyToolBar');
		Ext.create('Ext.container.Viewport', {
			//layout : "border",// Viewport is a container defined with an Auto
								// layout by default
			items : [ toolBar ]
		});
	}
});