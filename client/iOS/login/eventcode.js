Template.eventcode.events({
  'submit form': function(event) {
    event.preventDefault();
    var eventcode = event.target.eventcode.value;

    var events = Events.findOne({
        "redeemnumber": eventcode
    });
  if (events !== undefined) {
    Session.set('selectedEvent', events);
    Router.go('userhome', {}, {
      query: {
        EventId: events._id
      }
    });
  }
  // @todo: handle ELSE
}
});
