->Ext.getCmp() method to access the UI component by specifying the id.
ex:

	xtype :"textfield"
	fieldLabel : "Name",
	id:"nametext"

to access above text fileld we can use
	
	Ext.getCmp("nametext")

Classes and Objects:
===================
->You can define a new class in Ext JS 4 using the Ext.define method. You pass in the class name and the object where
you define the attributes and behavior of the class as arguments to the Ext.define method.

	Ext.define("Book",{});
If you have worked with Ext JS 3 or the earlier versions, you will notice that the Ext.define method incorporates
the functionalities of using Ext.reg, Ext.ns, and Ext.extend methods.
You can create an object of the Book class using Ext.create method as shown here.

	Ext.create("Book");
->The Ext.create("classname") method dynamically loads all the JavaScript files that the classname is dependent
on before creating an instance, whereas this is not possible when you use the new keyword.

Constructor:
------------
Constructor is the first function that’s called when an object is created.

	Ext.define("My.tech.extjs4.Book",{
	constructor : function(){
	console.log("Book created");
	}
	});

Property:
---------
Let’s define our Book class with two properties title and price. These two properties will be initialized in our
constructors.

	Ext.define("My.tech.extjs4.Book",{
	title : "",
	price : -1,
	constructor : function(title,price){
	this.title = title;
	this.price = price;;
	}
	});
	
	var xml = Ext.create("My.tech.extjs4.Book","XML",12.00);
	console.log(xml.title);
	console.log(xml.price);
Config:
-------	
Ext JS 4 provides a config section for every class where you can list the attributes of the class with default values.
The object can be created by initializing the attributes in which you are interested.

	Ext.define("My.tech.extjs4.Book",{
	config : {
	title : "",
	price : -1,
	authors: []
	},
	constructor : function(cfg){
	this.initConfig(cfg);
	}
	});

In the code snippet above, we’ve defined a Book class with title, price, and authors listed in the config section. The
config section is initialized in the constructor by calling the initConfig method. The initConfig method that is present in
Ext.Base class initializes the configuration object. You can create an object of the Book class as shown below.
	
	var xml = Ext.create("My.tech.extjs4.Book",{
	title : "XML for beginners", authors : ["Sam","Kim"]
	});
We’ve created the Book object by initializing the title and authors attributes. As mentioned earlier, it’s not
mandatory to initialize these attributes while creating the instance. The variables declared in the config section have
the getter/setter methods generated automatically. In the above example where xml is a reference to the Book object,
you can access the properties as shown below.

	console.log(xml.getTitle());
	xml.setPrice(12.00);
	console.log(xml.getAuthors()[0]);
	
Ext JS 4 follows the Java convention of generating the getter and setter methods

You can override the getter/setter methods if you want to take more control of the class. For example, say you
want the price of the Book to have a minimum value of 5.00. You can perform this validation in the overridden
setPrice method

	Ext.define("My.tech.extjs4.Book", {
	config: {
	title: "",
	price: 5,
	authors: []
	},
	constructor: function (cfg) {
	this.initConfig(cfg);
	},
	setPrice: function (priceVal) {
	if (priceVal < 5)
	console.log("Invalid value for price " + priceVal);
	else
	this.price = priceVal;
	}
	});
	var xml = Ext.create("My.tech.extjs4.Book",{
	title : "XML", authors : ["Sam","Kim"]
	});
	xml.setPrice(3);
	console.log(xml.getPrice());
	xml.setPrice(30);
	console.log(xml.getPrice());
	
The config generates an apply method for every attribute automatically as well. The apply method is called internally by the setter method.
you can override the applyPrice method to implement the validation
rule as shown

	Ext.define("My.tech.extjs4.Book", {
	config: {
	title: "",
	price: 5,
	authors: []
	},
	constructor: function (cfg) {
	this.initConfig(cfg);
	},
	applyPrice: function (priceVal) {
	if (priceVal < 5)
	console.log("Invalid value for price " + priceVal);
	else
	this.price = priceVal;
	return this.price;
	}
	});
Methods:
--------

You can define custom methods in classes as shown below.

	Ext.define("My.tech.extjs4.Book",{
	config : {
	title : "", price: 0
	},
	constructor : function(cfg){
	this.initConfig(cfg);
	},
	read: function(){
	console.log("Reading " + this.getTitle());
	}
	});
	The Book class has a read function that can be accessed using the object reference.
	var xml = Ext.create("My.tech.extjs4.Book",{
	title : "XML", price:12.00
	});
	xml.read(); //Prints Reading XML
	
You can also change the behavior of the read method by extending the Book class and overriding it

Static Members:
---------------
Ext JS 4 provides a statics property where you can list static variables and methods. The static members can be
accessed using the class name, as in OO languages.

	Ext.define("My.tech.extjs4.Book",{
	statics : {
	numberOfBooks: 0,
	getNumberOfBooks: function(){
	return this.numberOfBooks;
	}
	},
	constructor : function(){
	this.statics().numberOfBooks++;
	}
	});
In the code snippet above, the Book class has two static properties numberOfBooks and getNumberOfBooks
which is a function. In the constructor of the class, we can increment the numberOfBooks variable.
We can create an object of this class and access the static members as shown below.

	Ext.create("My.tech.extjs4.Book");
	Ext.create("My.tech.extjs4.Book");
	console.log(My.tech.extjs4.Book.getNumberOfBooks());
You can access the numberOfBooks property also using the class name.

	console.log(My.tech.extjs4.Book.numberOfBooks);
In OO languages like Java and C#, you have a getClass() or a getType() method to access the underlying class.
Ext JS 4 provides a keyword called self similar to that. You can use self on the object to access its class as shown below.

	Ext.define("My.tech.extjs4.Book",{
	statics : {
	numberOfBooks: 0,
	getNumberOfBooks: function(){
	return this.numberOfBooks;
	}
	},
	constructor : function(){
	console.log("Constructor of " + this.self.getName() + " called");
	this.self.numberOfBooks++;
	}
	});
In the constructor we’ve used this.self to access the static member numberOfBooks. You can also notice the call
to the getName() function. When a Book instance is created the output of the code will be
Constructor of My.tech.extjs4.Book called

Inheritance:
------------

We have an extend keyword that can be used to inherit a class in Ext JS 4. Let’s create an Employee class and
a Manager class that inherits the Employee class.

	Ext.define("Employee",{
	config : {
	employeeid : "",
	name : "",
	salary : 0
	},
	constructor : function(cfg){
	this.initConfig(cfg);
	},
	work : function(){
	console.log(this.getName() + " is working");
	}
	});
	Ext.define("Manager",{
	extend : "Employee",
	config : {
	level : 1
	}
	});
The Manager class inherits the Employee class using the extend keyword. The configuration properties and the
work function in the Employee class are available to the Manager class.
We can create a Manager object and invoke the work function as shown below.

	var mgr = Ext.create("Manager",{
	employeeid:"DS123", name: "Sam", level: 4
	});
	mgr.work(); //Prints Sam is working
	We can override the Employee’s work function in Manager’s class.
	Ext.define("Manager",{
	extend : "Employee",
	//...
	work : function(){
	console.log(this.getName() + " is in a meeting");
	}
	});
We can call the base class work function using 

	this.callParent()
	
	Ext.define("Manager",{
	extend : "Employee",
	//...
	work : function(){
	this.callParent();
	console.log(this.getName() + " is in a meeting");
	}
	});
The arguments passed to the Manager’s work function can be supplied to the Employee’s work function by using
the *arguments* keyword in JavaScript as shown below.

	this.callParent(arguments);
You can extend a class and override the constructor as shown below. You can invoke the base class
constructor using this.callParent method.

	Ext.define("Manager",{
	extend : "Employee",
	constructor : function(cfg){
	this.callParent(arguments);
	}
	});
You can override the constructor of the base class whenever you inherit generic classes like Employee, Manager,
etc. However, you have to be careful when you inherit UI classes. The constructor of the UI component classes have a
set of operations like initializing events, plugins, etc.. Inheriting a UI component class and overriding the constructor
is not a recommended practice. The UI component classes provide a method called initComponent(), which is used
to initialize the component. This initComponent method is usually invoked from the constructor. The general practice
is to override the initComponent method in the derived class. Say you want to create a custom Button, then you can
do that as shown below.

	Ext.define("MyButton",{
	extend : "Ext.button.Button",
	initComponent : function(){
	//Your code goes here
	}
	});
Multiple inheritance is not supported in Ext JS 4. We have mixins for multiple inheritance similar to interfaces in
Java and C#.

Mixins:
-------
Mixins help you to mix the behavior of different classes into your class. Your class can have the functionalities of any
number of classes mixed together. It’s somewhat similar to interfaces in Java where a class can implement any number
of interfaces.

Let’s create two classes, Aquatic and Terrestrial, with swim and walk functions, respectively.

	Ext.define("Aquatic",{
	swim : function(){
	console.log("Swimming");
	}
	});
	Ext.define("Terrestrial",{
	walk : function(){
	console.log("Walking");
	}
	});
We’ll create a class Reptile that can walk as well as swim. The Reptile class is created by mixing Aquatic and
Terrestrial together.

	Ext.define("Reptile",{
	mixins : ["Aquatic","Terrestrial"]
	});
A Reptile instance can invoke the walk and swim functions.

	var reptile = Ext.create("Reptile");
	reptile.swim();
	reptile.walk();
	
Alias:
-----
You can define an alias name for the classes. The alias name is mainly used when you create custom components.
You can use the alias property in the definition of the class as shown below.

	Ext.define("DuraSoft.tech.extjs4.Book", {
	alias : "Book",
	});
	Ext.create("Book");
	
There are certain conventions involved in creating these alias names. For example, alias names for custom
components begin with the prefix **widget**, whereas alias names for custom proxy classes begin with **proxy**.

Singleton:
----------
Ext JS 4 provides a way to create singleton classes. Singleton is a popular design pattern in OO languages where a class configured to be singleton has only one instance throughout the application.
You can configure a class to be singleton by setting the property singleton to be true. When a class in Ext JS 4 is
configured as singleton, an instance is automatically created. This kind of behavior, where an instance is automatically
created for a singleton class, is not a standard practice in OO languages.

	Ext.define("Company", {
	singleton : true,
	config: {
	title: "Ace Inc.,",
	},
	getNumberOfEmployees: function () {
	return 154;
	}
	});
	console.log(Company.title);
	console.log(Company.getNumberOfEmployees());
In the code above, Company class is defined to be singleton, and an instance of the class is automatically created.
However, you will access the members of the class using the class name as if they were static members.
If you try to create an instance of the class
 
	var c1 = Ext.create("Company");
 then you’ll get a class instantiation error.

**Note**
In Ext JS 4 you actually define a singleton object and not a class. You don’t have to define a singleton class and create an instance later. You automatically get a singleton instance create when you write

	Ext.define("classname",{singleton:true})
Loading Dependencies:
---------------------
Ext JS 4 introduces the concept of dynamic loading of the dependent JavaScript files. You can specify the classes that
your code is dependent on and the appropriate class files are loaded dynamically.
The heart of this dynamic loading of dependent JavaScript files is the Ext.Loader class. This class is responsible
for loading the dependent files either synchronously or asynchronously. You can specify the classes to be loaded
explicity by using Ext.Loader.require method.
Say your class uses the Ext.button.Button class, you can load the Button class explictly by using Ext.Loader.
require or the shortcut Ext.require method.

	Ext.Loader.require("Ext.button.Button");
	(or)
	Ext.require("Ext.button.Button");
**Ext.require** loads the Button.js file and recursively the Button’s dependent files as well.
There’s another way of specifying the loading information by using the requires property in a class, as shown
below.

	Ext.define("MyPanel",{
	requires : ["Ext.button.Button"]
	});
In the above code the dependent files will be loaded before creating an instance of MyPanel class.
Sometimes you may not mandatorily require the dependent files for creating an object of your class. You can use
the uses property in this case, as shown below.

	Ext.define("MyPanel",{
	uses : ["Ext.button.Button"]
	});
Ext.Class:
----------
You’ve seen that Ext.define is used for defining a new class. Internally Ext.define calls **Ext.ClassManager.create** method. **Ext.ClassManager.create** creates an instance of **Ext.Class**. So when you define a new class using Ext.define,
you’re actually creating an object of the class, Ext.Class.
The following code where you create a Book class using Ext.Class is equivalent to whatever you’ve been learning
using Ext.define method.

	var Book = new Ext.Class({
	config: {
	title: "",
	price: 5
	},
	constructor: function (cfg) {
	this.initConfig(cfg);
	},
	read: function () {
	console.log("Reading " + this.getTitle());
	}
	});
	var ajax = Ext.create("Book", { title: "AJAX",price:12.00 });
	ajax.read();
We’ve created an instance of Ext.Class and assigned to a variable called Book, which is treated as the class name.
You can create the instance of the Book class using the standard Ext.create method.
Ext.Class is also responsible for running what is commonly referred as *'pre'* and *'post'* processors, such as config, extend, mixings, requires, etc., while creating a class.

The Ext JS 4 API:
=================
Package | Description
--------|------------
Ext.form.field| Contains the classes that represent form elements like              textbox, checkbox, etc.
Ext.data| Contains classes like Store, Model, or Proxy that deal with fetching and playing with data.
Ext.layout.container| Deals with various layout components like Table, Accordion, Card, Border, etc.
Ext.grid| Used for working with data grids
Ext.tree| Used for displaying tree components
Ext.chart| Provides classes to develop charts like Pie, Bar, Line, etc.
Ext.menu| Contains classes used for creating menus
Ext.toolbar| Provides classes for creating toolbars
Ext.dd| Contains classes that implement drag and drop

Apart from the core packages, there are a number of utility classes in the Ext namespace. Here is a list of utility
classes.
* Ext.Ajax
	Used for sending Ajax requests.
*Ext.Json
	Used for encoding and decoding JSON data.
*Ext.XTemplate
	Used for creating UI templates that can be applied on data.
*Ext.Array
	Contains functions for working with arrays.
*Ext.ComponentQuery
	Provides functions to query the UI components.
*Ext.Date
	Contains date related functions.
The Ext namespace, which is nothing but a class, provides a number of commonly used functions. Listed below is
a set of commonly used functions in Ext class.
*onReady()
	Used to wire up a function that is called after the DOM tree is ready and dependent files are loaded.
*application()
	Creates an instance of Ext.app.Application after the DOM is ready. You’ll use it when we discuss MVC architecture.
*getCmp()
	Most commonly used method to access the components based on their id.
*query()
	Used to query the DOM tree based on selector expressions.
*apply()
	Used for copying the configuration data to an object
The Ext class also provides properties like *is[BrowserType]* like *isIE6, isChrome, isGecko*, etc. for browser-related information.



