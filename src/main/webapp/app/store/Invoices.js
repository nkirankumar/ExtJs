Ext.define('MyApp.store.Invoices', {
  extend: 'Ext.data.Store', //Step 1
  model: 'MyApp.model.Invoice', //Step 2
  proxy: {
    type: 'ajax',
    //url: 'http://10.229.161.46:8080/vls-nh-api/api/v1/employees/read',
    api: {
      create: 'http://10.229.161.46:8080/vls-nh-api/api/v1/employees/save',
      read: 'http://10.229.161.46:8080/vls-nh-api/api/v1/employees/read',
      update: 'http://10.229.161.46:8080/vls-nh-api/api/v1/employees/update',
      destroy: 'http://10.229.161.46:8080/vls-nh-api/api/v1/employees/remove',
    },
    reader: {
      type: 'json',
      root: 'dataBean'
    },
    writer: {
      type: 'json',
      allowSingle: false
    }
  }
});
