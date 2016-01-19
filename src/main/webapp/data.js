Ext.onReady(function() {
  //alert("document ready");

});

Ext.application({
  name: 'MyApp',
  //model: ["MyApp.model.Invoice"],
  requires: ['MyApp.data.validations'],
  launch: function() {
    //Step 1
    var invoice = Ext.create("MyApp.model.Invoice", {
      taxId: '1234',
      dateIssued: '2012-01-25 11:55:21',
      name: 'Mr. Doe',
      address: '123 ST 987 LA. USA',
      creditCard: '1234567890'
    });
    console.log(invoice);
    //debugger
    if (invoice.isValid()) { //Step 2
      console.log('Everything is fine!');
    } else {
      var errors = invoice.validate(); // Step 3
      /*for(i=0;i<errors.items.length;i++){
        console.log(errors.items[i].field, errors.items[i].message);
      }*/
      errors.each(function(error) {
        console.log(error.field, error.message);
      });
    }
    var name = invoice.get('name');
    //Modifying one field
    invoice.set('name', 'Mr. Smith');
    console.log('Old name:', name);
    console.log('New name:', invoice.get('name'));
    //Setting many values
    invoice.set({
      taxId: 54321,
      address: '10th ST, McAllen TX'
    });

    console.log(invoice);
    /*
    However, setting a new value in this below
    way is not a good practice at all. The set method performs some important tasks
    when setting the new value, such as marking our model as dirty, saving the previous
    value so we can reject or accept the changes later, and some other important steps.
    */
    //reading
    console.log(invoice.data.address);
    //writing
    invoice.data.address = "Main Avenue 123, Manassas VA";
    console.log(invoice.get('address'));

    Ext.Ajax.request({
      url: "http://localhost:8080/vls-nh-api/api/v1/employees/fetch",
	   method: 'GET',
      //params : {x:1,y:2,z:3},
      //params : "x=1&y=2&z=3",
      //cors: true,
      //timeout : 50000,//default-30 secs
      //scope:
      //headers:
      //cache:
      success: function(response, options) {
        //debugger
        var data = Ext.decode(response.responseText);
        Ext.Msg.alert("Message", data.dataBean[0].email);
        console.log("success");
      },
      failure: function(response, options) {
        console.log("failure");
      },
      callback: function(response, options) {
        console.log("callback");
      }
    });
  }//launch
});
