Ext.define('MyApp.model.Client', {
  extend: 'Ext.data.Model',
  fields: [
    'name', 'lastname', 'email', 'country', {
      name: 'client',
      type: 'int'
    }, {
      name: 'age',
      type: 'int'
    }, {
      name: 'active',
      type: 'boolean'
    }, {
      name: 'amount',
      type: 'float'
    },
    'paydate'
  ]
});
