Template.userhome.helpers({
  user: function() {
    var events = Session.get('selectedEvent');
    Logger.info('Selected Event Id - ' + events._id);
    
    
  }
});


Template.userhome.events({
  'submit #eventsbtn': function(event) {
    event.preventDefault();
    //Router.go('eventIos');
    Router.go('eventIos', {}, {
      query: {
        EventId: eid._id
      }
    });
  }
});