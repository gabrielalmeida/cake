Router.configure({
  layoutTemplate: 'appLayout',
  yieldRegions: {
    'header': {to: 'header'},
    //'footer': {to: 'footer'}
  },
});

var setTitle = function(title) {
  Template.header.helpers({
    title: title 
  });
  Session.set('pageTitle', title);
}

// INVOICE
Router.route('/invoice/:_id', function() {
  this.render('invoice');
  setTitle('Invoice');
});
