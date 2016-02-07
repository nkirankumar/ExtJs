->Ext.getCmp() method to access the UI component by specifying the id.
ex:
	xtype :"textfield"
	fieldLabel : "Name",
	id:"nametext"

to access above text fileld we can use=Ext.getCmp("nametext")

->You can define a new class in Ext JS 4 using the Ext.define method. You pass in the class name and the object where
you define the attributes and behavior of the class as arguments to the Ext.define method.
	Ext.define("Book",{});
If you have worked with Ext JS 3 or the earlier versions, you will notice that the Ext.define method incorporates
the functionalities of using Ext.reg, Ext.ns, and Ext.extend methods.
You can create an object of the Book class using Ext.create method as shown here.
	Ext.create("Book");