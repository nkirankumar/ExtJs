Ext.onReady(function() {

  var win = Ext.create("Ext.window.Window", {
    title: "My first window",
    width: 300,
    height: 200,
    maximizable: true,
    layout : "fit",
    defaults: {
      xtype: "panel",
      height: 60,
      collapsible: true
    },
    items: [{
      title: "Menu",
      html: "The main menu"
    }, {
      title: "Content",
      html: "The main content!"
    }]
  });
  win.show();
});
