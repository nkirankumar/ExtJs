Ext.define("MyApp.view.MyToolBar", {
	extend : "Ext.panel.Panel",
	title : "Panel with a toolbar",
	html : "This is an example to use a toolbar",
	items : [],
	dockedItems : [ {
		xtype : "toolbar",
		dock : "bottom",
		items : [ {
			xtype : "tbtext",
			text : "Item: 19"
		}, "-", {
			xtype : "tbtext",
			text : "English (United States)"
		}, " ", {
			xtype : "combo",
			fieldLabel : "Go to",
			labelAlign : "right",
		}, '->', {
			text : "Print",
		}, " ", {
			text : "Outline",
		} ]
	} ]

});