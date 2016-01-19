Ext.application({
  name: 'MyApp',
  launch: function() {
    var store = Ext.create("MyApp.store.Invoices"); //Step 1
    store.load(function() { //Step 2
      store.each(function(record) { //Step 3
        //debugger
        console.log("name======" + record.get("name"));
      });
    });




    store.load({
      callback: function() {
        var model1 = Ext.create("MyApp.model.Invoice", {
          taxId: "3E72KO",
          name: "Carl Jr",
          address: "789 ST, TX USA",
          creditCard: "1234567890123456"
        });
        var model2 = Ext.create("MyApp.model.Invoice", {
          taxId: "897HG56",
          name: "Hazel Doe",
          address: "987 ST, CA USA",
          creditCard: "1234567890123456"
        });
        store.add([model1, model2]);
        store.removeAt(0);
        //debugger
        store.sync();
      }
    });
  }
});
