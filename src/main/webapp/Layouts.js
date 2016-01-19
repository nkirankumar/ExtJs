Ext.onReady(function() {
  //card layout
  /*var win = Ext.create("Ext.window.Window", {
    title: "My first window",
    width: 300,
    height: 200,
    maximizable: true,
    layout: "card", //Step 1
    defaults: {
      xtype: "panel",
      height: 60,
      border: false
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
  setTimeout(function() {
    win.getLayout().setActiveItem(1); //Step 2
  }, 2000);*/

  //hbox
  /*var win = Ext.create("Ext.window.Window", {
    title: "My first window",
    width: 300,
    height: 200,
    maximizable: true,
    layout: {
      type: "hbox",
      align: "top" //middle, top, stretch, stretchmax
    },
    defaults: {
      xtype: "panel",
      height: 60
    },
    items: [{
      title: "Menu",
      html: "The main menu"
    }, {
      title: "Content",
      html: "The main content!"
    }]
  });
  win.show();*/

  //vbox
  /*var win = Ext.create("Ext.window.Window", {
    title: "My first window",
    width: 300,
    height: 200,
    maximizable: true,
    layout: {
      type: "vbox",
      align: "stretch" //center, left, stretchmax
    },
    defaults: {
      xtype: "panel",
      height: 60
    },
    items: [{
      title: "Menu",
      html: "The main menu",
      flex: 1
    }, {
      title: "Content",
      html: "The main content!",
      flex: 2
    }]
  });
  win.show();*/

  //border

  /*var win = Ext.create("Ext.window.Window", {
    title: "My first window",
    width: 300,
    height: 200,
    maximizable: true,
    layout: "border",
    defaults: {
      xtype: "panel",
      height: 60
    },
    items: [{
      title: "Menu",
      html: "The main menu",
      region: "west",
      width: 100,
      collapsible: true,
      split: true
    }, {
      title: "Content",
      html: "The main content!",
      region: "center"
    }]
  });
  win.show();*/

  //accordian

  var win = Ext.create("Ext.window.Window", {
    title: "My first window",
    width: 300,
    height: 200,
    maximizable: true,
    layout: {
      type: "accordion"
    },
    defaults: {
      xtype: "panel",
    },
    items: [{
      title: "Menu",
      html: "The main menu"
    }, {
      title: "Content",
      html: "The main content!"
    }, {
      title: "3rd Column",
      html: "Content!"
    }]
  });
  win.show();
});
