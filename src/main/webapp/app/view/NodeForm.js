Ext.define('MyApp.view.NodeForm', {
  extend: 'Ext.form.Panel',
  xtype: 'nodeform',
  border: false,
  frame: true,
  initComponent: function() {
    var me = this;
    me.items = me.buildItems();
    me.buttons = me.buildButtons();
    me.callParent(arguments);
  },
  buildItems: function() {
    var store = Ext.create('Ext.data.Store', {
      fields: ['value', 'name'],
      data: [{
        "value": true,
        "name": "File"
      }, {
        "value": false,
        "name": "Folder"
      }]
    });
    return [{
      fieldLabel: 'Name',
      name: 'text',
      xtype: 'textfield',
    }, {
      fieldLabel: 'Type',
      xtype: 'combo',
      name: 'leaf',
      queryMode: 'local',
      displayField: 'name',
      valueField: 'value',
      store: store
    }];
  },
  buildButtons: function() {
    return [{
      text: 'Save',
      itemId: 'savebtn'
    }];
  }
});
