Customers = new Mongo.Collection('customers');

//Customers.allow({
  //insert: function(userId) {
    //var user = Meteor.users.findOne(userId);
    //return user && user.admin;
  //}
//});

Customers.latest = function() {
  return Customers.findOne({}, {sort: {date: -1}, limit: 1});
}

if (Meteor.isServer && Customers.find().count() === 0) {
  Meteor.startup(function() {
    Customers.insert({
      name: 'Gabriel Almeida',
      createdAt: new Date
    });
  });
}

