Ext.application({
  name: 'MyApp',
  //autoCreateViewport: false,
  //stores:['Files'],
  controllers : ['MyApp.controller.Main'],
  requires: ['Ext.container.Viewport'],
  launch: function() {
    var tree = Ext.create('MyApp.view.BasicTreePanel');
    Ext.create('Ext.container.Viewport', {
      layout: {
        //type: 'hbox',
        //align: 'stretch'
      },
      items: [tree]
    });

  }
});
