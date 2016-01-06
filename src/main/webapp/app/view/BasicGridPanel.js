Ext.define('MyApp.view.BasicGridPanel', {
  extend: 'Ext.grid.Panel',
  xtype: 'basicgridpanel',
  width: 800,
  //height: 200,
  title: 'Value Labs',
  //store:'Clients',
  initComponent: function() {
    var me = this;
    var store = Ext.create('MyApp.store.Clients');
    Ext.apply(this, {
      columns: me.buildColumns(),
      store: store
    });
    me.callParent(arguments);
  },
  buildColumns: function() {
    return [{
      text: 'Name',
      //width: 100,
      dataIndex: 'name'
    }, {
      text: 'Email',
      width: 200,
      dataIndex: 'email'
    }, {
      text: 'Phone',
      //width: 50,
      dataIndex: 'phone'
    }, {
      text: 'Show As',
      width: 130,
      xtype: 'widgetcolumn',
      dataIndex: 'showAs',
      widget: {
        xtype: 'combo',
        store: Ext.create('Ext.data.Store', {
          fields: ['abbr', 'name'],
          data: [{
            "abbr": "br",
            "name": "Brand"
          }, {
            "abbr": "pr",
            "name": "Product"
          }]
        }),
        queryMode: 'local',
        displayField: 'name',
        valueField: 'abbr'
      }
    }, {
      text: '',
      width: 130,
      dataIndex: 'incOrEx',
      xtype: 'widgetcolumn',
      widget: {
        xtype: 'combo',
        store: Ext.create('Ext.data.Store', {
          fields: ['abbr', 'name'],
          data: [{
            "abbr": "in",
            "name": "Include"
          }, {
            "abbr": "ex",
            "name": "Exclude"
          }]
        }),
        queryMode: 'local',
        displayField: 'name',
        valueField: 'abbr'
      }
    }, {
      xtype: 'actioncolumn',
      width: 40,
      items: [{
        icon: 'resources/images/delete.gif',
        scope: this,
        handler: function(grid, rowIndex, colIndex) {
          this.getStore().removeAt(rowIndex);
        }
      }]
    }, {
      xtype: 'actioncolumn',
      width: 40,
      items: [{
        icon: 'resources/images/up.png',
        handler: function(grid, rowIndex, colIndex) {
          alert('up');
        }
      }]
    }, {
      xtype: 'actioncolumn',
      width: 40,
      items: [{
        icon: 'resources/images/down.png',
        handler: function(grid, rowIndex, colIndex) {
          alert('down');
        }
      }]
    }];
  }
});
