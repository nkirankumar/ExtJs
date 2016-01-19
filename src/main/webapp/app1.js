Ext.onReady(function() {
  Ext.define("MyApp.Category", {
    extend: "Ext.data.Model",
    fields: [
      "id",
      "name",
      "description"
    ]
  });
  var category = Ext.create("MyApp.Category", {
    id: 1,
    name: "kiran",
    description: "engineer"
  });
  console.log(category.get("id"));
  console.log(category.get("name"));
  console.log(category.get("description"));

  pre = Ext.Class.getDefaultPreprocessors(),
    post = Ext.ClassManager.defaultPostprocessors;

  console.log(pre); //["className", "loader", "extend", "privates", "statics", "inheritableStatics", "platformConfig", "config", "cachedConfig", "mixins", "alias"]
  console.log(post); //["alias", "singleton", "alternateClassName", "debugHooks", "deprecated", "uses"]

  Ext.define("MyApp.Constants", {
    singleton: true, //Step 1
    BASE_PATH: "/myapp", //Step 2
    ATTEMPTS: 5,
    TIMEOUT: 6000
  });

  console.log(MyApp.Constants.BASE_PATH);
  //Ext.create("MyApp.Constants"); //Throws an error
  Ext.define("MyApp.abstract.Panel", {
    extend: "Ext.form.Panel",
    alias: "widget.mypanel",
    html: "Main content"
  });

  var win = Ext.create("Ext.window.Window", {
    title: "Window",
    width: 500,
    height: 600,
    items: [{
        xtype: "mypanel" //Option 4
    }]
  });
  win.show();



});
