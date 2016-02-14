//fit
/*Ext.define("MyApp.view.MyLayOuts", {
	extend : "Ext.panel.Panel",
	layout : "fit",
	height : 200,
	width : 200,
	title : "Fit layout panel",
	items : [ {
		xtype : "textfield",
		fieldLabel : "Email"
	} ]

});*/

//anchor
/*Ext.define("MyApp.view.MyLayOuts", {
	extend : "Ext.panel.Panel",
	layout : "anchor",
	height : 200,
	width : 200,
	title : "Anchor layout panel",
	items : [ {
		xtype : "textfield",
		fieldLabel : "Name",
		anchor : "90% 15%"
	}, {
		xtype : "button",
		text : "Resize",
		anchor : "-80 -145",
		listeners : {
			click : function(btn) {
				var pnl=btn.up("panel");
				pnl.setWidth(pnl.getWidth() + 5);
				pnl.setHeight(pnl.getHeight() + 5);
			}
		}
	} ]

});
*/
//Box Layout

/*Ext.define("MyApp.view.MyLayOuts", {
	extend : "Ext.panel.Panel",
	height : 200,
	width : 200,
	title : "VBox panel",
	layout : {
		//type : "vbox",
		//pack : "center",
		//align : "center"
		type : "hbox",
		pack : "center",
		align : "middle"
	},
	defaults : {
		xtype : "button",
		margin : "10"
	},
	items : [ {
		text : "A"
	}, {
		text : "B"
	}, {
		text : "C"
	}]
});*/

//Accordion Layout

/*Ext.define("MyApp.view.MyLayOuts", {
	extend : "Ext.panel.Panel",
	height : 300,
	width : 300,
	title : "Accordion layout ",
	layout : {
		type : "accordion",
		multi : true
	},
	items : [ {
		title : "Inbox",
		html : "Inbox contents"
	}, {
		title : "Outbox",
		html : "Outbox contents"
	}, {
		title : "Sent Items",
		html : "Sent Items"
	} ]
});*/

//Table Layout

/*Ext.define("MyApp.view.MyLayOuts", {
	extend : "Ext.panel.Panel",
	height : 200,
	width : 200,
	title : "Table layout ",
	layout : {
		type : "table",
		columns : 2
	},
	defaults : {
		xtype : "button",
		margin : "10"
	},
	items : [ {
		text : "A"
	}, {
		text : "B"
	}, {
		text : "C"
	}, {
		text : "D"
	}, {
		text : "E"
	}, {
		text : "F"
	} ]
});*/

//Column Layout

/*Ext.define("MyApp.view.MyLayOuts", {
	extend : "Ext.panel.Panel",
	title : 'Column',
	width : 600,
	height : 200,
	layout : 'column',
	defaults : {
		margin : "10"
	},
	items : [ {
		title : "Folder List",
		html : "Folder List contents",
		columnWidth : 0.20
	}, {
		title : "Inbox",
		html : "Inbox contents",
		columnWidth : 0.30
	}, {
		html : "Mail contents",
		columnWidth : 0.50
	} ]
});
*/
//Border Layout

/*Ext.define("MyApp.view.MyLayOuts", {
	extend : "Ext.panel.Panel",
	layout : "border",
	padding : 30,
	id : "main",
	height : 500,
	width : 400,
	items : [ {
		xtype : "panel",
		html : "Top ",
		region : "north"
	}, {
		xtype : "panel",
		html : "Main contents",
		region : "center"
	}, {
		xtype : "panel",
		html : "Side bar",
		collapsible : true,
		split : true,
		region : "west"
	} ]
});*/

//Card Layout

Ext.define("MyApp.view.MyLayOuts", {
	extend : "Ext.panel.Panel",
	layout : "card",
	padding : 30,
	id : "main",
	items : [ {
		xtype : "panel",
		title : "Screen 1",
		items : [ {
			xtype : "button",
			text : "go to screen 2",
			handler : function() {
				//Ext.getCmp("main").getLayout().setActiveItem(1);
				Ext.getCmp("main").getLayout().setActiveItem("screen2")
			}
		} ]
	}, {
		xtype : "panel",
		title : "Screen 2",
		id:"screen2",
		items : [ {
			xtype : "button",
			text : "go to screen 3",
			handler : function() {
				Ext.getCmp("main").getLayout().setActiveItem(2);				
			}
		} ]
	}, {
		xtype : "panel",
		title : "Screen 3"
	} ]

});


