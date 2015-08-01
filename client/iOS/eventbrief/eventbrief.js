Template.eventbrief.helpers({
geteventbrief: function () {
      var eid=Router.current().params.query.EventId;
      //return Events.findOne({_id:eid}).attendees;//{eventid:eid}
      return Events.find({_id:eid});

      }
      });


Template.eventbrief.events({
    'click #gotoback': function(){
        window.history.back();
    }
});
