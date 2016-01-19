Ext.define('MyApp.store.Clients', {
  extend: 'Ext.data.Store', //Step 1
  alias: 'store.clients',
  model: 'MyApp.model.Client', //Step 2
  //groupField:'country',
  pageSize: 5,
  autoLoad: true,
  proxy: {
    type: 'ajax',
    url: 'app/data/Clients.json',
    reader: {
      type: 'json',
      root: 'data',
      totalProperty: 'total'
    }
  }
});
