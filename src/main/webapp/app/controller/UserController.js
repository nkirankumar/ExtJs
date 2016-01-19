Ext.define('MyApp.controller.UserController', {
  extend: 'Ext.app.Controller',

  stores: ['UserStore'],
  models: ['UserModel'],
  views: ['user.UsersListView', 'user.EditUserView'],

  init: function() {
    console.log('Initialized Users! This happens before the Application launch function is called');
    this.control({
      'userlist': {
        itemdblclick: this.editUser
      },

      'useredit button[action=save]': {
        click: this.updateUser
      }
    });

  },

  editUser: function(grid, record) {
    console.log('Double clicked on ' + record.get('name'));
    var view = Ext.widget('useredit');
    view.down('form').loadRecord(record);
  },
  updateUser: function(button) {
    console.log('clicked the Save button');

    var win = button.up('window'),
      form = win.down('form'),
      record = form.getRecord(),
      values = form.getValues();

    record.set(values);
    win.close();
  }
});
