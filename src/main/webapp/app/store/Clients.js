Ext.define('MyApp.store.Clients', {
  extend: 'Ext.data.Store',
  alias: 'store.clients',
  fields: [
    'name', 'email', 'phone', 'showAs', 'incOrEx'
  ],
  data: {
    "data": [{
      "name": "Name1",
      "email": "name@valelabs.com",
      "phone": "555-111-1224",
      "showAs": "Brand",
      "incOrEx": null
    }, {
      "name": "Name2",
      "email": "name@valelabs.com",
      "phone": "555-111-1224",
      "showAs": null,
      "incOrEx": "Exclude"
    }, {
      "name": "Name3",
      "email": "name@valelabs.com",
      "phone": "555-111-1224",
      "showAs": null,
      "incOrEx": null
    }, {
      "name": "Name4",
      "email": "name@valelabs.com",
      "phone": "555-111-1224",
      "showAs": "Product",
      "incOrEx": "Exclude"
    }]
  },
  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
