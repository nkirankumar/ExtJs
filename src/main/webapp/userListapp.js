/**
 * @example Simple Store
 *
 * This example creates a simple store that auto-loads its data from an ajax
 * proxy. Since we are only dealing with data there is no UI, so a global
 * variable called "userStore" is created which is an instance of
 * {@link Ext.data.Store}.
 *
 * Feel free to experiment with the "userStore" object on the console command
 * line. For example - `userStore.getCount()` gets the total number of records
 * in the store. `userStore.getAt(0)` gets the record at index 0.
 */
/*Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'}
    ]
});

var userStore;
Ext.require('Ext.data.Store');
Ext.onReady(function() {
    userStore = Ext.create('Ext.data.Store', {
        model: 'User',
        autoLoad: true,

        proxy: {
            type: 'ajax',
            url: 'data/users.json',
            reader: {
                type: 'json',
                root: 'users',
                successProperty: 'success'
            }
        }
    });
});*/

/*

Ext.Loader.setConfig({
    enabled: true
    });

*/


Ext.onReady(function(){
	Ext.MessageBox.show({
		title:'Save Changes?',
		msg: 'Your are closing a tab that has unsaved changes. Would you like to save your changes?',
		buttons: Ext.Msg.YESNOCANCEL,
		//fn: processResult,
		//animEl: 'elId'
	 });
});

Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'MyApp',

    appFolder: 'app',

    controllers: ['UserController'],

    launch: function() {

        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'userlist'
                }
            ]
        });
    }
});
