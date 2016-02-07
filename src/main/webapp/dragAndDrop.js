//concept-1

/*Ext.application({
 requires : [ 'Ext.container.Viewport' ],
 name : 'MyApp',

 appFolder : 'app',
 launch : function() {
 var myPanel = Ext.create("Ext.panel.Panel", {
 title : "Drag",
 id : "mypanel",
 draggable : true,
 padding : 20,
 height : 100,
 width : 100,
 });

 Ext.create('Ext.container.Viewport', {
 //layout : 'fit',
 items : [ myPanel ]
 });
 }
 });*/

//concept-2
Ext.onReady(function() {
	var ddItem1 = Ext.create("Ext.dd.DragDrop", "item1", "A", {
		isTarget : false
	});
	ddItem1.startDrag = function() {
		console.log("startDrag");
	}
	ddItem1.onDrag = function() {
		console.log("onDrag");
	}
	ddItem1.onDragEnter = function() {
		console.log("onDragEnter");
	}
	ddItem1.onDragOut = function() {
		console.log("onDragOut");
	}
	ddItem1.onDragOver = function() {
		console.log("onDragOver");
	}
	ddItem1.onDragDrop = function() {
		console.log("onDragDrop");
	}
	ddItem1.endDrag = function() {
		console.log("endDrag");
	}
	ddItem1.onInvalidDrop = function() {
		console.log("onInvalidDrop");
	}
	var ddItem2 = Ext.create("Ext.dd.DragDrop", "item2", "A", {
		isTarget : true
	});
});