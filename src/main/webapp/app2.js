Ext.onReady(function() {
  //Using the html property
  /*Ext.create("Ext.Component", {
    width: 300,
    height: 150,
    renderTo: Ext.getBody(),
    html: "<h1>Hello!</h1><p>This is an <strong>example</strong> of content </p>"
  });*/

  //Using an existing DOM element with an ID content
  /*Ext.create("Ext.Component", {
    width: 300,
    height: 150,
    renderTo: Ext.getBody(),
    contentEl: "content"
  });*/

  //Using a template with data
  Ext.create("Ext.Component", {
    width: 300,
    height: 150,
    renderTo: Ext.getBody(),
    data: {
      name: "John"
    },
    tpl: ["<h1>Content</h1><p>Hello {name}!</p>"]
  });

  //how the rendering phase works
  var cmp = Ext.create("Ext.Component", {
    width: 300,
    height: 150,
    data: {
      name: "John"
    },
    tpl: ["<h1>Content</h1><p>Hello {name}!</p>"]
  });

  //The rendering phase starts for this component
  cmp.render(Ext.getBody());
});
