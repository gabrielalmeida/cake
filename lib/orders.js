Orders = new Mongo.Collection('orders');

var paymentMethods = ['Dinheiro', 'Cheque', 'Cartão de Crédito', 'Transferência', 'Boleto'];
var orderStatuses = ['To Deliver', 'Delivered', 'Payment Approved', 'Payment Pending', 'Payment Rejected', 'Payment Returned', 'Order Canceled'];

Schemas.Orders = new SimpleSchema({
  items: {
    type: String,
    autoform: {
      afFieldInput: {
        rows: 8,
        placeholder: "BOLO DE COCO G – 1 UN – R$ 145,00\nBOLO BANOFFEE M – 1 UN – R$102,00"
      }
    }
  },
  'status': {
    type: String,
    autoform: {
      options: function () {
        return _.map(orderStatuses, function (c, i) {
          return {label: c, value: c};
        });
      }
    }
  },
  delivery: {
    type: Object,
  },
  'delivery.date': {
    type: Object
   },
  'delivery.date.date': {
    type: Date,
  },
  'delivery.date.time': {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        placeholder: 'From 6am to 10am'
      }
    }
  },
  'delivery.customer': {
    type: String,
    autoform: {
      type: 'typeahead',
      options: function() {
        return Customers.find({}).map(function(doc, index, cursor) {
          return { label: doc._id, value: doc.fullName() + ' - ' + doc._id }; 
        });
      }
    }
  },
  'delivery.address': {
    type: Object,
    optional: true
  },
  'delivery.address.street': {
    type: String,
    optional: true
  },
  'delivery.address.district': {
    type: String,
    optional: true
  },
  'delivery.address.city': {
    type: String,
    optional: true
  },
  'delivery.address.state': {
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
  'delivery.tax': {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        placeholder: 'R$ 8,00'
      }
    }
  },
  'delivery.notes': {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        rows: 5 
      }
    }
  },
  payment: {
    type: Object
  },
  'payment.method': {
    type: String,
    autoform: {
      options: function () {
        return _.map(paymentMethods, function (c, i) {
          return {label: c, value: c};
        });
      }
    }
  },
  'payment.date': {
    type:  Date,
    optional: true
  },
  'payment.reference': {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        placeholder: 'Note number/receipt'
      }
    }
  },
  total: {
    type: String,
    autoform: {
      afFieldInput: {
        placeholder: 'R$ 255,00'
      }
    }
  }
});

Orders.attachSchema(Schemas.Orders);
