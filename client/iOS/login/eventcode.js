Template.ioniclogin.events({
  'submit form': function(event) {
    event.preventDefault();
    var eventcode = event.target.eventcode.value;

    var events = Events.findOne({
        "redeemnumber": eventcode
    });
  if (events !== undefined) {
    Router.go('userhome', {}, {
      query: {
        EventId: events._id
      }
    });
  }
  // satyen: handle else
}
});