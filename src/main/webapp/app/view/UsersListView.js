Ext.define('MyApp.view.user.UsersListView' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

    title: 'All Users',
    store: 'UserStore',

    initComponent: function() {


        this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});
