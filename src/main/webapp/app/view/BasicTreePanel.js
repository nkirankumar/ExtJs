/*var store = Ext.create('Ext.data.TreeStore', {
  root: {
    expanded: true,
    children: [{
      text: 'detention',
      leaf: true
    }, {
      text: 'homework',
      expanded: true,
      children: [{
        text: 'book report',
        leaf: true
      }, {
        text: 'algebra',
        leaf: true
      }]
    }, {
      text: 'buy lottery tickets',
      leaf: true
    }]
  }
});*/


Ext.define('MyApp.view.BasicTreePanel', {
  extend: 'Ext.tree.Panel',
  xtype: 'basictreepanel',
  title: 'MVC pattern',
  rootVisible: true,
  tbar: [{
    text: 'Add',
    iconCls: 'new-icon',
    menu: {
      items: {
        xtype: 'nodeform'
      }
    }
  }, {
    text: 'Delete',
    iconCls: 'delete-icon',
    itemId: 'deletebtn'
  }],
  viewConfig: {
    plugins: {
      ptype: 'treeviewdragdrop'
    }
  },
  initComponent: function() {
    var store = Ext.create('MyApp.store.Files');
    Ext.apply(this, {
      store: store
    });
    this.callParent(arguments);
  }

  /*root: { //define the data of our tree panel
    text: 'Application', //the text the node is going to display
    expanded: true, //when the tree rendersthenode it will be expanded by default
    children: [ //the children of our Application node
      {
        text: 'app',
        children: [ // each node can have their own children
          {
            text: 'app.js',
            leaf: true //when we set leaf to true, our node will be last in the hierarchy and also its icon will change
          }, {
            text: 'controller'
          }, {
            text: 'model'
          }, {
            text: 'store'
          }, {
            text: 'view',
            children: [{
              text: 'BasicTreePanel.js',
              leaf: true
            }]
          }
        ]
      }, {
        text: 'data'
      }, {
        text: 'index.html',
        leaf: true
      }, {
        text: 'resources',
        children: [{
          text: 'css'
        }, {
          text: 'resources'
        }]
      }
    ]
  }*/
});
