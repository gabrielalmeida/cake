if (Meteor.isClient) {

  Template.OrdersList.rendered = function() {
    Template.header.helpers({
      title: 'Customers List'
    });
    Session.set('pageTitle', 'Customers List');
  };

  Template.OrdersTableList.helpers({
    orders: function() {
      return Orders.find({});
    }
  });

  Template.OrdersList.events({
    'click a.delete': function(e) {
      var c = confirm('Tem certeza que deseja deletar esta compra?');
      if(c) 
        Orders.remove(this._id);
    }
  });

  Template.OrdersAdd.events({
    'submit .orderForm': function(e) {

      Orders.insert({
        product: e.target.product.value,
        quantity: e.target.quantity.value,
        price: e.target.price.value,
        createdAt: new Date()
      });

      alert('Order added');
      Router.go('orders.list');
      return false;
    }
  });


  Template.OrdersEdit.events({
    'submit .orderForm': function(e) {

      Orders.update(this._id, {
        $set: {
          product: e.target.product.value,
          quantity: e.target.quantity.value,
          price: e.target.price.value,
          updatedAt: new Date()
       }
      });

      alert('Order updated');
      Router.go('orders.list');
      return false;
    }
  });

}
