Ext.define('MyApp.controller.Main', {
  extend: 'Ext.app.Controller',
  refs: [{
    ref: 'treePanel',
    selector: 'basictreepanel'
  }],
  requires: ['MyApp.view.BasicTreePanel', 'MyApp.view.NodeForm'],
  //stores: ['Files'],
  init: function() {
    var me = this;
    me.control({
      'nodeform #savebtn': { // we get the save button reference
        click: me.addTreeNode
      },
      'basictreepanel toolbar #deletebtn': { // we get the delete button reference
        click: me.deleteTreeNode
      }
    });
    //me.getFilesStore().load();
  },
  addTreeNode: function(btn) {
    var me = this,
      node,
      tree = me.getTreePanel(),
      selectedNode = tree.getSelectionModel().getSelection()[0] || tree.getRootNode(); //get the root node if there is not selection
    node = btn.up('form').getValues(); //get the form values
    if (selectedNode.isLeaf()) { //insert the node in the parent node
      selectedNode.parentNode.insertChild(0, node);
    } else { //inserting as a child
      selectedNode.insertChild(0, node);
    }
    btn.up('menu').hide(); // hide the menu
  },
  deleteTreeNode: function() {
    var me = this,
      tree = me.getTreePanel(),
      node = tree.getSelectionModel().getSelection()[0];
    if (node) {
      node.remove(true); //true to destroy the node
    } else {
      Ext.Msg.alert('Warning', 'Please select a node!');
    }
  }
});
