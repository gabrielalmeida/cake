if(Meteor.isClient) {

  Template.invoice.events({
    'keyup #cc-number': function(e) {
      updateIcon();
      //validateCard();
    },
  });

  var validateCard = function() {
    var defaultFormat = /(\d{1,4})/g;
    var cardField

    var creditCards = [{
      type: "maestro",
      pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
      format: defaultFormat,
      length: [12, 13, 14, 15, 16, 17, 18, 19],
      cvcLength: [3],
      luhn: !0
    }, {
      type: "dinersclub",
      pattern: /^(36|38|30[0-5])/,
      format: defaultFormat,
      length: [14],
      cvcLength: [3],
      luhn: !0
    }, {
      type: "laser",
      pattern: /^(6706|6771|6709)/,
      format: defaultFormat,
      length: [16, 17, 18, 19],
      cvcLength: [3],
      luhn: !0
    }, {
      type: "jcb",
      pattern: /^35/,
      format: defaultFormat,
      length: [16],
      cvcLength: [3],
      luhn: !0
    }, {
      type: "unionpay",
      pattern: /^62/,
      format: defaultFormat,
      length: [16, 17, 18, 19],
      cvcLength: [3],
      luhn: !1
    }, {
      type: "discover",
      pattern: /^(6011|65|64[4-9]|622)/,
      format: defaultFormat,
      length: [16],
      cvcLength: [3],
      luhn: !0
    }, {
      type: "mastercard",
      pattern: /^5[1-5]/,
      format: defaultFormat,
      length: [16],
      cvcLength: [3],
      luhn: !0
    }, {
      type: "amex",
      pattern: /^3[47]/,
      format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
      length: [15],
      cvcLength: [3, 4],
      luhn: !0
    }, {
      type: "visa",
      pattern: /^4/,
      format: defaultFormat,
      length: [13, 14, 15, 16],
      cvcLength: [3],
      luhn: !0
    }];
  

  };

  var updateIcon = function() {
    var ccNumber = document.getElementById('cc-number').value;
    var visa = $('.visa');
    var mastercard = $('.mastercard');
    var amex = $('.amex');
    var diners = $('.diners');
    var hipercard = $('.hipercard');


    $('.flags ul li').removeClass('active');

    if(/^5[1-5]/.test(ccNumber)) {
    mastercard.addClass('active'); 
    } else if(/^4/.test(ccNumber)) {
    visa.addClass('active');
    } else if(/^3[47]/.test(ccNumber)) {
    amex.addClass('active');
    } else if(/^(3841|60282)/.test(ccNumber)) {
    hipercard.addClass('active'); 
    } else if(/^(36|38|30[0-5])/.test(ccNumber)) {
    diners.addClass('active'); 
    }
  }

}
