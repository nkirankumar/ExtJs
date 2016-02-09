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
* Ext.Json
	Used for encoding and decoding JSON data.
* Ext.XTemplate
	Used for creating UI templates that can be applied on data.
* Ext.Array
	Contains functions for working with arrays.
* Ext.ComponentQuery
	Provides functions to query the UI components.
* Ext.Date
	Contains date related functions.
The Ext namespace, which is nothing but a class, provides a number of commonly used functions. Listed below is
a set of commonly used functions in Ext class.
* onReady()
	Used to wire up a function that is called after the DOM tree is ready and dependent files are loaded.
* application()
	Creates an instance of Ext.app.Application after the DOM is ready. You’ll use it when we discuss MVC architecture.
* getCmp()
	Most commonly used method to access the components based on their id.
* query()
	Used to query the DOM tree based on selector expressions.
* apply()
	Used for copying the configuration data to an object
The Ext class also provides properties like *is[BrowserType]* like *isIE6, isChrome, isGecko*, etc. for browser-related information.

Controls and Layout:
====================
Ext.Component:
-------------
The **Ext.Component** class serves as the base class for all the UI components in Ext JS 4. Ext.Component inherits the **Ext.AbstractComponent** class. It provides the common behavior and properties for all the UI components. The common functions include the basic creation, destruction, and rendering of the components. You can instantiate this class as
shown below, though you’ll use it very rarely in the raw format.

	Ext.create("Ext.Component", {
	html: "Raw Component",
	renderTo : Ext.getBody()
	});
The above code displays a text Raw Component in the page. It generates the following HTML snippet.

	<div id="component-1099 class="x-component x-component-default">Raw Component</div>
The Ext.Component generates a <div> tag with an automatically generated id and a default CSS class.
All the components used in a page can be accessed through a singleton object **Ext.ComponentManager**. Ext.ComponentManager serves as a registry of all the components. You can access all the components by using the all
property as **Ext.ComponentManager.all**.
You can access the individual components based on their id by using the get method as **Ext.ComponentManager.get("id of the component")**.

Configuration attributes of Ext.Component:
-----------------------------------------
**id**
Every component has an automatically generated unique id assigned to it. You can use Ext.getCmp() method to access
the component by specifying the id. You can assign your own id for the component as well.
	
	Ext.create("Ext.Component",{
	id : "mycomp1"
	});
You can use Ext.getCmp as shown below

	Ext.getCmp("mycomp1");
It’s generally not recommended to define your own id, because as the application grows and you start adding components dynamically it may lead to duplication issues.
**itemId**
You can mark the component with an itemId instead of an id. The component that has itemId assigned to it can be accessed using that itemId through its parent component. Say, you have a Panel that has a component with an itemId.
You can access the component using the itemId by invoking the method getComponent() on the Panel.

	var panel1 = Ext.create("Ext.panel.Panel",{
	// ...
	items : [
	Ext.create("Ext.Component",{
	html : "Raw Component inside panel",
	itemId : "rawcomp1"
	})
	]
	// ...
	});
	panel1.getComponent("rawcomp1")
The itemId property is preferred to the id as you don’t have to worry about the complications that arise due to duplicate id.

**autoEl**
The autoEl attribute is used to specify a custom HTML element that will encapsulate the the component. This attribute is usually used when we create custom components. Here’s a component that generates a hyperlink element using autoEl attribute.

	Ext.create("Ext.Component", {
	renderTo: Ext.getBody(),
	autoEl: {
	html: "Link",
	href: "#",
	tag: "a"
	}
	});
The code snippet will generate the following HTML snippet.

	<a class="x-component x-component-default" href="#" id="component-1009">Link</a>
	
**tpl, data**
The components have a tpl property that’s used to configure the UI template for the Component. The data attribute supplies data to be applied to the template.

Methods in Ext.Component:
------------------------
* destroy
The destroy method destroys the component. It removes the reference to the element in the DOM tree.
* on, un
The listeners attribute is used to statically register the events and handler functions. The on method is used to dynamically do that. The on method accepts the name of the event, the event handler function and the scope or
context of the executing handler function as arguments.

	comp1.on("eventName",function(){...},scope)
	mycombobox1.on("change",function(){...},this)
In the code snippet above, you’ve registered the change event on the combobox object. The scope ‘this’ refers to the context object where the handler function gets executed. The scope is an optional parameter.
The un method is used to remove the event handler for the specified event.

	comp1.un("eventName",function(){...},scope)
You have to specify the same event handler function and scope used in the on method.
* addEvents, fireEvent
The Component class provides methods addEvents and fireEvent for adding events and firing the event respectively.
These two methods are mainly used when you create custom components with custom events. You can call addEvents on a component comp by writing 	

	comp.addEvents(‘eventname1’,’eventname2’ ...). 
You can invoke the fireEvent like 
	
	comp.fireEvent(‘eventname’).
	
Events in Ext.Component:
------------------------
The Component class provides a number of lifecycle events. These are raised when the component is created,activated, rendered, destroyed, and so on. All these events can be handled by registering them using the listeners
attribute or using the on method.

Event| Description
-----|------------
Added| Raised when the component is added to the container
Removed| Raised when the component is removed from the container
beforerender| Raised before rendering the component on to the HTML element
render| Raised after the component is rendered to the HTML element
afterrender| Raised after completion of the component rendering
beforedestroy| Raised before calling destroying the component or before calling destroy method
destroy| Raised after destroy or after calling the destroy method
beforeactivate| Raised before a component is activated. This is mainly used in accordions and tab panels.
activate| Raised after a component is activated
beforedeactivate| Raised before a component is deactivated
deactivate| Raised after a component is deactivated
beforeshow| Raised before calling the show method on the component
show| Raised after calling the show method on the component
beforehide| Raised before calling the hide method on the component
hide| Raised after calling the hide method on the component

Subclasses of Ext.Component:
----------------------------
Class| Description
-----|------------
Ext.container|AbstractContainer Base class for the container controls
Ext.button|Button The button control
Ext.form.Label| The standard label element
Ext.form.field.Base| Base class for all the field components like textfield
Ext.draw.Component| Represents the surface on which you can draw shapes

Ext.container.Container:
=======================
Ext.container.Container class is the base class for all the container-based components in Ext JS 4. It provides the common behavior and properties for all the UI containers. The common functions include the addition, udpation, and removalof the components. You can instantiate this class as shown below, though you’ll use it very rarely in the raw format.

	Ext.create("Ext.container.Container", {
	html : "Raw Container",
	renderTo: Ext.getBody()
	});
In the code snippet above, we’ve created an instance of Container class. This instance is empty as we’ve not added any components to it. The code displays a text Raw Container in the page. It generates the following HTML snippet.

	<div id="container-1009" class="x-container x-container-default">Raw Container
	<div id="container-1009-clearEl" class="x-clear" role="presentation"></div>
	</div>
	
Configuration Attributes of Ext.container.Container
----------------------------------------------------
Let’s discuss some of the configuration attributes of the Container class.
* items 
The items attribute refers to the collection of components that you’ll add to the container. A Container class with a textbox and button component added to it using items is shown below.

	Ext.create("Ext.container.Container",{
	items : [
	Ext.create("Ext.form.field.Text",{...}),
	Ext.create("Ext.button.Button",{...})
	]
	});
* layout
This attribute is used to configure the layout for the container, so that the components may be arranged in a particular fashion. You’ll learn more about the layout later in this chapter.
* defaults
The defaults attribute is used to specify a set of default properties for all the items in the container. It helps you avoid duplication of code. If you want all the items in the container to have a specific width and height, then you can configure that using defaults as shown below.

	Ext.create("Ext.container.Container",{
	defaults : {
	width:100,height:150
	},
	items : [
	...
	]
	});

Some Methods in Container class.Methods of Ext.container.Container:
------------------------------------------------------------------
* add
The add method is used to dynamically add components into the container. When the components are added dynamically using the add method the container rearranges itself automatically. You can pass component or an array
of components as argument to the add method.

	var container1 = Ext.create("Ext.container.Container",{
	...
	});
	var item1 = Ext.create("Ext.Component",{...});
	container1.add(item1);
* doLayout
doLayout method triggers the container to recalculate the layout and refresh itself.
* down
This method, similar to the up method in Component class, is used to navigate to the descendants of the container that matches the expression passed as an argument. For example if you have a container, say container1, that has a
button calling container1.down("button") walks down the container and returns the button component that’s a child or grandchild or any descendant.
* remove
The remove method is used to remove the components from the container. You can invoke remove method by passing the component or id of the component to be removed as argument.

	var container1 = Ext.create("Ext.container.Container",{
	...
	});
	var item1 = Ext.create("Ext.Component",{...});
	container1.add(item1);
	container1.remove(item1);
	
Events in Container class:
--------------------------
Event| Description
-----|------------
beforeadd| Fired before adding an item to the container
Add| Fired after an item is added
beforeremove| Fired before removing an item from the container
remove| Fired after removing an item from the container

Subclass of Ext.container.Container:
------------------------------------
Class| Description
-----|------------
Ext.container|Viewport Represents the viewable area
Ext.panel|AbstractPanel Base class for all the panel based containers
Ext.toolbar|Toolbar Represents a toolbar

Container Controls:
------------------
**Ext.panel.Panel**
Ext.panel.Panel with the xtype ‘panel' is the root container class for several container classes. It’s probably the most commonly used container class. You can create a Panel as shown below.

	Ext.create("Ext.panel.Panel",{
	title : "Sample Panel",
	items : [
	...
	]
	});
**Panel Controls**:

Class| Description
-----|-------------
Ext.form.Panel| Represents a form
Ext.menu.Menu| Represents a menu
Ext.window.Window| Represents a floatable, draggable window component
Ext.tab.Panel| Represents a tabbed container

Ext.window.Window:
------------------
Window represents a floatable, draggable, resizable panel. Windows can be configured to be modal.

	var win = Ext.create("Ext.window.Window", {
	title: "Find and Replace",
	modal: true,
	items: [
	{
	xtype: "textfield",
	fieldLabel: "Find what"
	}
	],
	buttons: [
	{
	text: "Find next"
	},
	{
	text: "Cancel"
	}
	]
	});
	win.show();
![GitHub Logo](/images/window.PNG)
Format: ![Alt Text](url)

The window will be a modal one masking the background completely as you’ve configured the modal property to be true.

Ext.menu.Menu:
-----------------
Ext.menu.Menu is the container that’s used to display menus. Menu is made up of Ext.menu.Item controls. A menu can be shown as a standalone control or can be added as a child. A standalone menu can be created as shown

	var editMenu = Ext.create('Ext.menu.Menu', {
	items: [
	{
	text: 'Undo'
	},
	{
	text: 'Cut'
	},
	{
	text: 'Copy'
	},
	{
	text: "Paste"
	}
	]
	});
	editMenu.show();
The menu is made of menu items. The default xtype of each menu item is a panel, and it has a text property that can be used to configure the text.

You can add the menu as a child item as well. Let’s add the menu to a Button using its menu attribute as shown below.

	Ext.create("Ext.button.Button",{
	text : "Edit",
	menu : editMenu
	});
Ext.tab.Panel:
--------------
This class is used to create tabbed containers. It can be intepreted as a panel with the child items following a card layout. A tab panel has a tab bar represented by the Ex.tab.Bar class that can be positioned at the top, bottom, left, or right. Each tab in the panel is an object of the Ext.tab.Tab class.

	Ext.create('Ext.tab.Panel', {
	renderTo: Ext.getBody(),
	title: "Documentation",
	plain: false,
	height : 200,
	tabPosition: "bottom",
	items: [
	{
	title: 'Home',
	html : "Welcome to Ext JS 4"
	},
	{
	title: 'API',
	html : "API docs"
	},
	{
	title: 'Guides',
	html : "Standard guides"
	}
	]
	});
The tab panel has three tabs. The tab panel is configured to be plain, with no background for the tab bar.

Ext.form.Panel:
--------------
Form panel class serves as the container for forms. You can add the controls in Ext.form.field package to the form panel class. The form panel provides support for processing form, validation, and so forth.Ext.form and Ext.form.field are the packages that supply us the form controls. The list of commonly used UI controls along with their xtype is shown

Class| xtype
-----|------
Ext.form.field.Text| textfield
Ext.form.field.TextArea| textarea
Ext.form.field.Checkbox| checkbox
Ext.form.field.ComboBox| combobox
Ext.form.field.Radio| radio
Ext.form.field.Date| datefield
Ext.form.field.Number| numberfield
Ext.form.Label| label
Ext.form.RadioGroup| radiogroup
Ext.form.CheckboxGroup| checkboxgroup
Ext.form.FieldSet| fieldset

The controls form has a radio group, date field, number field, text area, and a button.
The form controls can be wired up with basic validation rules. For instance, the common validation properties of the text based controls are allowBlank, maxLength, minLength, and so on. In the form we created, we can apply the validation rules as shown below.

	{
	xtype : "textfield",
	fieldLabel : "Name",
	allowBlank : false,
	maxLength : 50,
	msgTarget : "side"
	},
	{
	xtype : "datefield",
	fieldLabel : "Date of birth",
	msgTarget : "side"
	}
The name textfield has validation rules used. The msgTarget displays the error message by the side of the textfield when the validation fails. The default value is qtip where the error message is displayed as a quick tip

Another useful property called vtype can be used for using built-in validation rules like e-mail, URL, and so forth.
The blog text field we have used in our example can be configured to have a validation type as shown here.

	{
	xtype : "textfield",
	fieldLabel : "Blog",
	vtype : "url"
	}
We can also register our own validation functions using validator property. The validator function is passed in the value of the field. It returns the error message or true based on the outcome of validation. The address field with a custom validator is shown below.

	{
	xtype : "textarea",
	fieldLabel : "Address",
	validator : function(val){
	if(val.indexOf("#") != -1 || val.indexOf(".") != -1)
	return "Invalid characters like # or . in address";
	return true;
	}
	}
The FormPanel has a submit() method that can be used to submit the form to the server. The form values are submitted to the server using AJAX by default. The server URL can be specified using the url property. The submit button’s click event can be handled to submit the form. The form will be submitted only when there are no validation errors. The FormPanel’s submit method can be invoked as shown

	Ext.create("Ext.form.Panel",
	{
	title : "Controls",
	url : "someUrl",
	items : [
	{
	xtype : "datefield",
	fieldLabel : "Date of Birth",
	name : "dob"
	},
	{
	xtype : "textfield",
	fieldLabel : "Blog",
	name : "blog"
	}
	{
	xtype : "button",
	text : "Submit",
	listeners : {
	"click" : function(src){
	src.up("form").submit();
	}
	}
	}
	]
	});

The click listener for the button navigates to the form using the up() method. The form is automatically submitted to the configured url attribute. The form data is passed to the server using the name property of the elements. The server resource can access the form elements using their respective names.The submit method can optionally accept an Ext.form.action.Action object as parameter with AJAX callback functions.

	src.up("form").submit({
	success : function(form,action){
	alert("Successfully submitted");
	},
	failure : function(form,action){
	console.log(action.failureType);
	console.log(action.result);
	alert(action.response.status + ", " + action.response.statusText);
	}
	});
The success and failure callback functions are invoked after the form submission. We can disable AJAX and opt for a normal form submission instead using the standardSubmit property. Inside the FormPanel we can set standardSubmit property to be true.
