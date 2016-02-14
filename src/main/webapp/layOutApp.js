Ext.application({
	name : 'MyApp',
	requires : [ 'Ext.container.Viewport' ],
	launch : function() {
		var layOut = Ext.create('MyApp.view.MyLayOuts');
		Ext.create('Ext.container.Viewport', {
			//layout : "border",// Viewport is a container defined with an Auto
								// layout by default
			items : [ layOut ]
		});
	}
});