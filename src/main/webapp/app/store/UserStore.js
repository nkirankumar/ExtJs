Ext.define('MyApp.store.UserStore', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.UserModel',
    data: [
        {name: 'Ed',    email: 'ed@sencha.com'},
        {name: 'Tommy', email: 'tommy@sencha.com'}
    ]
});
