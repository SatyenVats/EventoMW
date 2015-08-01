UI.registerHelper('addIndex', function(thatArray) {
  if (thatArray && thatArray.length) {
    $.each(thatArray, function (position, thatObject) {
      thatObject.index = position;
      thatArray[position] = thatObject;
    });
    return thatArray;
  }
});


UI.registerHelper('formatTime', function(context, options) {
  if(context)
    return moment(context).format('MM/DD/YYYY, hh:mm');
});


Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MM-DD-YYYY');
});