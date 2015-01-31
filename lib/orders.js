Orders = new Mongo.Collection('orders');

//Customers.allow({
  //insert: function(userId) {
    //var user = Meteor.users.findOne(userId);
    //return user && user.admin;
  //}
//});

Orders.latest = function() {
  return Orders.findOne({}, {sort: {date: -1}, limit: 1});
}

if (Meteor.isServer && Orders.find().count() === 0) {
  Meteor.startup(function() {
    Orders.insert({
      product: 'Banana de batata',
      quantity: 10,
      price: 300,
      createdAt: new Date
    });
  });
}

