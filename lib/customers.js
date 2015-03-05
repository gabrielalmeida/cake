Customers = new Mongo.Collection('customers');

arrayEstados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", 
  "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão",
  "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", 
  "Paraíba", "Parana", "Pernambuco", "Piauí", "Rio de Janeiro", 
  "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", 
  "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

Schemas.Customers = new SimpleSchema({
  user: {
    type: Object
  },
  'user.firstName': {
    type: String,
    max: 60,
  },
  'user.lastName': {
    type: String,
    max: 60
  },
  'user.phones': {
    type:  Array,
    optional: true
  },
  'user.phones.$': {
    type: Object,
  },
  'user.phones.$.label': {
    type: String,
    optional: true
  },
  'user.phones.$.number': {
    type: String,
    optional: true,
  },
  'user.email': {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    optional: true
  },
  address: {
    type: Object,
  },
  'address.street': {
    type: String,
    optional: true
  },
  'address.district': {
    type: String,
    optional: true
  },
  'address.city': {
    type: String,
    optional: true
  },
    'address.state': {
    optional: true,
    type: String,
    allowedValues: arrayEstados,
    autoform: {
      options: function() {
        return _.map(arrayEstados, function(c, i) {
          return { label: c, value: c }; 
        });
      }
    }
  },
});

Customers.helpers({
  fullName: function() { 
    if(this.user)
      return this.user.firstName + ' ' + this.user.lastName;  
  } 
});

Customers.attachSchema(Schemas.Customers);
