if(Meteor.isClient) {

  Template.invoice.rendered = function() {

    var dinersCard = $.payment.cards[7];
    $.payment.cards[$.payment.cards.length] = dinersCard;

    $.payment.cards[7] = {
      type: 'hipercard',
      pattern: /^(3841|60282)/,
      length: [13, 16, 19],
      cvcLength: [3],
      luhn: true,
      format: /(\d{1,4})/g
    };

    $('#cc-number').payment('formatCardNumber');
    $('#cc-cvc').payment('formatCardCVC');
    $('#cc-expiracy').payment('formatCardExpiry');
  };

  Template.invoice.events({
    'keyup #cc-number': function(e) {
        updateIcon();
      //validateCard();
    },
  });

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
