Ext.application({
  name: 'MyApp',
  launch: function() {
    Ext.create('MyApp.view.clients.Form', {
      width: 300,
      height: 600,
      renderTo: Ext.getBody()
    });

  }
});
