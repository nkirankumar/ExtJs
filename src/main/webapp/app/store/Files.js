Ext.define('MyApp.store.Files', {
  extend: 'Ext.data.TreeStore',
  /*autoLoad: true,
  fields:['text'],
  proxy: {
    type: 'ajax',
    url: 'app/data/files.json',
  }*/

  /*root: {
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
  }*/


  root: {
    text: "Countries",
    checked: false,
    children: [{
      text: "USA",
      checked: false,
      children: [{
        checked: false,
        text: "Houston",
        leaf: true
      }, {
        text: "Boston",
        leaf: true
      }, {
        text: "LA",
        leaf: true
      }]
    }, {
      text: "UK",
      children: [{
        text: "London",
        leaf: true
      }, {
        text: "Bristol",
        leaf: true
      }, {
        text: "Essex",
        leaf: true
      }]
    }, {
      text: "India",
      children: [{
        text: "Chennai",
        leaf: true
      }, {
        text: "Delhi",
        leaf: true
      }, {
        text: "Mumbai",
        leaf: true
      }]
    }]
  }

});
