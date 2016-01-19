Ext.application({
  name: 'MyApp',
  requires:['MyApp.view.CustomTemplate'],
  model:['State'],
  store:['States'],
  launch: function() {
    Ext.create('Ext.Panel', {
      renderTo: Ext.getBody(),
      width: 800,
      height: 800,
      bodyPadding: 5,
      title: 'Hello World',
      items: [{
        xtype: 'custom-template-combo'
      }]
    });
  }
});
