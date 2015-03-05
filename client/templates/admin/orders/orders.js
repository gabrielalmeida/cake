Template.prettyDate.helpers({
  prettyDate: function(format) {
    if(!format)
      var format = 'DD/MM/YY';

    return moment.utc(this.value.toUTCString()).format(format);
  } 
});
