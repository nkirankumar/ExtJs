Ext.application({
  name: 'MyApp',
  requires: [],
  launch: function() {
    var store = Ext.create("MyApp.store.Invoices");
    var invoice = Ext.create("MyApp.model.Invoice", { //Step 1
      taxId: "32FG83",
      name: "John Doe",
      address: "123 ST, TN USA",
      creditCard: "1234567890123456"
    });
    store.add(invoice); //Step 2
    //We can also add a new item by just sending an object containing the data and the add
    //method will create the model instance for us.
    store.add({
      taxId: "NT629Y",
      name: "Susan Smith",
      address: "312 ST, CA USA",
      creditCard: "1234567890123456"
    });
    //We can even add many items at once by passing an array of models to the add
    //method as shown in the following code:
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
    //to add a new item to the first position of the collection:
    store.insert(0, {
      taxId: "L125AP",
      name: "John Smith",
      address: "159 ST, TX USA",
      creditCard: "1234567890123456"
    });
    //counting the elements in the store
    console.log(store.count());
    //We can also set the scope where the anonymous function will be executed by passing
    //a second parameter to the each method with the object where the anonymous
    //function will be executed.
    store.each(function(record, index) {
      console.log(index, record.get("name"));
    }, this);

    //If we only want to get a model at a specific position, we can use the getAt method as follows:
    var model3 = store.getAt(2);
    console.log(model3.get("name"));

    var first = store.first(),
      last = store.last();
    console.log(first.get("name"), last.get("name"));
    //There are times when we need to get many records at once, so there's a method
    //called getRange to retrieve a list of records. We may define the limits or we can
    //even get all the records in the collection as shown in the following code snippet:
    var list = store.getRange(1, 3);
    Ext.each(list, function(record, index) {
      console.log(index, record.get("name"));
    });
    //Step 1: We added a new record with the idInvoice property, this way the
    //record is not marked as phantom
    store.add({
      idInvoice: 672,
      taxId: "VI8732",
      name: "Eddy Smith",
      address: "961 ST, NY USA",
      creditCard: "1234567890123456"
    });
    //Step 2: We got the last record in our store and modified the name of our
    //model. When we modify the original information the record is marked
    //as dirty.
    var model4 = store.last();
    model4.set("name", "EddyMcFly");
    //Step 3: We called the getUpdatedRecords method to get all the records
    //marked as dirty. In this case we only have one record updated, but the
    //method returns an array with all modified records.
    var updated = store.getUpdatedRecords();
    Ext.each(updated, function(record, index) {
      console.log("Modified Records");
      console.log(record.getId(), record.get("name"));
    });
    //Removing records
    //1-way
    store.remove(model1);
    store.each(function(record, index) {
      console.log(index, record.get("name"));
    });
    //2-way
    store.remove([first, last]);
    store.each(function(record, index) {
      console.log(record.get("name"));
    });
    //3-way
    store.removeAt(2);
    store.each(function(record, index) {
      console.log(index, record.get("name"));
    });
    store.removeAll();
    console.log("Records:", store.count());

  }
});
