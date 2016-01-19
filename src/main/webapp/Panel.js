Ext.onReady(function() {
  var panel = Ext.create("Ext.panel.Panel", {
    renderTo: Ext.getBody(),
    title: "My first panel",
    width: 300,
    height: 300,
    html: "The content",
    headerPosition: "top",
    collapsible: true,
    closable: true,
    tools: [{
      type: "help",
      callback: function() {
        Ext.Msg.alert("Alert", "Help");
      },
      //scope: this
    }, {
      type: "search",
      callback: function() {
        Ext.Msg.alert("Alert", "Search");
      },
      scope: this
    }, {
      type: "gear",
      callback: function() {
        Ext.Msg.alert("Alert", "Gear");
      },
      //scope: this
    }, {
      type: "print",
      callback: function() {
        Ext.Msg.alert("Alert", "Print");
      },
      //scope: this
    }],
    dockedItems: [{
      xtype: "toolbar",
      dock: "top",
      items: ["Top toolbar!"]
    }, {
      xtype: "toolbar",
      dock: "bottom",
      items: ["Bottom toolbar!"]
    }, {
      xtype: "toolbar",
      dock: "left",
      items: ["Left<br /> toolbar!"]
    }, {
      xtype: "toolbar",
      dock: "right",
      items: ["Right<br /> toolbar!"]
    }]

  });
  panel.center();

});
