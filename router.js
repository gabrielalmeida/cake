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


// CUSTOMERS 

Router.route('/customers', function() {
  this.render();
  setTitle('Customers List');
}, { name: 'customers.list' });

Router.route('/customers/add', function() {
  this.render();
  setTitle('Add Customers');
}, { name: 'customers.add' });

Router.route('/customers/edit/:_id', function() {
  this.render('CustomersEdit', {
    data: function () {
      return Customers.findOne({_id: this.params._id});
    }
  });

    Template.CustomersForm.helpers({
        isEditing: function() {
          return true;
        }
    });

  this.render('header', { to: 'header' }); 
  setTitle('Edit Customer');

}, { name: 'customers.edit' });


// ORDERS 

Router.route('/orders', function() {
  this.render();
  setTitle('orders List');
}, { name: 'orders.list' });

Router.route('/orders/add', function() {
  this.render();
  setTitle('Add Orders');
}, { name: 'orders.add' });

Router.route('/orders/edit/:_id', function() {
  this.render('OrdersEdit', {
    data: function () {
      return Orders.findOne({_id: this.params._id});
    }
  });

    Template.OrdersForm.helpers({
        isEditing: function() {
          return true;
        }
    });

  this.render('header', { to: 'header' }); 
  setTitle('Edit Order');

}, { name: 'orders.edit' });
