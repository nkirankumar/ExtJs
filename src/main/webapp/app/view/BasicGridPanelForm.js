/**
 * @classMyApp.view.Form
 * @extendsExt.form.Panel
 * @author Armando Gonzalez <iam@armando.mx>
 * This the form for the grid listeners example.
 */
Ext.define('MyApp.view.BasicGridPanelForm', {
  extend: 'Ext.form.Panel',
  layout: 'anchor',
  title: 'client',
  flex: 1.5,
  frame: true,
  defaultType: 'textfield',
  defaults: {
    allowBlank: false,
    anchor: '100%'
  },
  items: [{
    fieldLabel: 'Name',
    name: 'name'
  }, {
    fieldLabel: 'Last Name',
    name: 'lastname'
  }, {
    fieldLabel: 'Age',
    xtype: 'numberfield',
    name: 'age'
  }, {
    fieldLabel: 'Email',
    name: 'email',
    vtype: 'email'
  }, {
    fieldLabel: 'Country',
    name: 'country',
    xtype: 'combobox',
    displayField: 'name',
    store: Ext.create('Ext.data.Store', {
      fields: ['name'],
      data: [{
        "name": "China"
      }, {
        "name": "Australia"
      }, {
        "name": "Mexico"
      }, {
        "name": "Japan"
      }, {
        "name": "Usa"
      }]
    })
  }, {
    fieldLabel: 'Pay Date',
    xtype: 'datefield',
    name: 'paydate'
  }, {
    fieldLabel: 'Total',
    xtype: 'numberfield',
    name: 'amount',
    allowDecimals: true
  }, {
    fieldLabel: 'Active?',
    xtype: 'checkbox',
    name: 'active'
  }]
});
