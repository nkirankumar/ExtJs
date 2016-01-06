Ext.application({
  name: 'MyApp',
  requires: ['MyApp.store.Clients','MyApp.view.BasicGridPanel','Ext.container.Viewport'],  
  launch: function() {
    var grid = Ext.create('MyApp.view.BasicGridPanel');
    Ext.create('Ext.container.Viewport', {
      items: [grid]
    });
  }
});
