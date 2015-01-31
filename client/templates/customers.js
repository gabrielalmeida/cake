if (Meteor.isClient) {

  Deps.autorun(function () {  
    document.title = 'Cake - ' + Session.get('pageTitle');
  });

  Template.CustomersList.rendered = function() {
    Template.header.helpers({
      title: 'Customers List'
    });
    Session.set('pageTitle', 'Customers List');
  };

  Template.CustomersTableList.helpers({
    customers: function() {
      return Customers.find({});
    }
  });

  Template.CustomersList.events({
    'click a.delete': function(e) {
      var c = confirm('Tem certeza que deseja deletar este usuário?');
      if(c) 
        Customers.remove(this._id);
    }
  });

  Template.CustomersAdd.events({
    'submit .customerForm': function(e) {

      Customers.insert({
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        createdAt: new Date()
      });

      alert('Customer added');
      Router.go('customers.list');
      return false;
    }
  });


  Template.CustomersEdit.events({
    'submit .customerForm': function(e) {

      Customers.update(this._id, {
        $set: {
          name: e.target.name.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          updatedAt: new Date()
       }
      });

      alert('Customer updated');
      Router.go('customers.list');
      return false;
    }
  });

}
