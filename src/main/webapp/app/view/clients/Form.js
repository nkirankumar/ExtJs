Ext.define('MyApp.view.clients.Form', {
  extend: 'Ext.form.Panel',
  alias: 'widget.clientform',
  title: 'Client Form',
  padding: 10,
  defaultType: 'textfield',
  initComponent: function() {
    var me = this;
    me.items = me.buildItems();
    me.dockedItems = me.buildToolbars();
    me.callParent();
  },
  buildItems: function() {
    var formItems = [{
      fieldLabel: 'Name',
      name: 'name'
    }, {
      fieldLabel: 'Contact',
      name: 'contact'
    }, {
      xtype: 'textarea',
      fieldLabel: 'Address',
      name: 'address'
    }, {
      fieldLabel: 'Phone',
      name: 'phone'
    }/*, {
      xtype: 'checkboxgroup',
      fieldLabel: 'Two Columns',
      // Arrange checkboxes into two columns, distributed vertically
      columns: 2,
      vertical: true,
      listeners: {
        change: function(field, newValue, oldValue, eOpts) {
          console.log('change:' + field.fieldLabel + ' ' + newValue.rb);
          debugger
          if (Ext.Array.contains(newValue.rb, '1')) {
            field.setValue({
              rb: true
            });
          }
          //var checkedItems=field.getChecked();
          // checkedItems1=field.getValue();
        }
      },
      items: [{
        boxLabel: 'Item 1',
        name: 'rb',
        inputValue: '1'
      }, {
        boxLabel: 'Item 2',
        name: 'rb',
        inputValue: '2',
        //checked: true
      }, {
        boxLabel: 'Item 3',
        name: 'rb',
        inputValue: '3'
      }, {
        boxLabel: 'Item 4',
        name: 'rb',
        inputValue: '4'
      }, {
        boxLabel: 'Item 5',
        name: 'rb',
        inputValue: '5'
      }, {
        boxLabel: 'Item 6',
        name: 'rb',
        inputValue: '6'
      }]
    }, {
      xtype: 'button',
      text: 'Check All',
      handler: function(button, e) {
        var checkBoxObj = button.up('form').down('checkboxgroup');
        checkBoxObj.setValue({
          rb: true
        });

      }


    }*/];
    return formItems;
  },
  buildToolbars: function() {
    return [{
      xtype: 'toolbar',
      docked: 'top',
      items: [{
        text: 'New',
        iconCls: 'new-icon'
      }, {
        text: 'Save',
        iconCls: 'save-icon'
      }, {
        text: 'Delete',
        iconCls: 'delete-icon'
      }]
    }];
  }
});
