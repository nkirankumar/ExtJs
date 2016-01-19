Ext.application({
  name: 'MyApp',
  //autoCreateViewport: false,
  requires: ['Ext.container.Viewport'],
  launch: function() {

    var grid = Ext.create('MyApp.view.BasicGridPanel', {
        listeners: { //step 1
          itemclick: function(view, record, htmlItem, index, eventObject, opts) {
            form.loadRecord(record);
          }
        },
        //renderTo: Ext.getBody()
      }),

      form = Ext.create('MyApp.view.BasicGridPanelForm', {
        buttons: [{
          text: 'Reset',
          handler: function() {
            this.up('form').getForm().reset();
          }
        }, {
          text: 'Save',
          formBind: true,
          //disabled: true,
          scope: this,
          handler: function() {
            var selectionModel = grid.getSelectionModel(),
              record;
            record = selectionModel.getSelection()[0];
            record.set(form.getValues()); //step 2
            grid.getView().refresh(); //step 3
          }
        }],
        //renderTo: Ext.getBody()
      });


    Ext.create('Ext.container.Viewport', {
      layout: {
        //type: 'hbox',
        //align: 'stretch'
      },
      items: [grid, form]
    });

  }
});
