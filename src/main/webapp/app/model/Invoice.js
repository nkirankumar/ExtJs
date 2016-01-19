//Ext.data.validations.lengthMessage = 'Please correct the length';==not working
//available types of data are string, int, float, boolean, and date
Ext.define('MyApp.model.Invoice', {
  extend: 'Ext.data.Model', // Step 1
  idProperty: 'idInvoice', //Step 2
  fields: [ // Step 3
    {
      name: 'idInvoice'
    }, {
      name: 'taxId'
    }, {
      name: 'dateIssued',
      type: 'date',
      dateFormat: 'Y-m-d h:i:s'
    }, {
      name: 'name'
    }, {
      name: 'address'
    }, {
      name: 'creditCard'
    }
  ],
  validations: [/*{
    type: 'creditcard',
    field: 'creditCard'
  },*/ {
    type: 'presence',
    field: 'taxId'
  }, {
    type: 'length',
    field: 'taxId',
    lengthMessage: 'Please correct the length', //custom message
    min: 5,
    max: 7
  }, {
    type: 'presence',
    field: 'name'
  }, {
    type: 'format',
    field: 'name',
    matcher: /^[\w ]+$/
  }]
});
