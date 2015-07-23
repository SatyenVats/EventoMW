 Template.speakersios.helpers({
    getspeakersbyeventid: function (id) {

      var eid=Router.current().params.query.EventId;
  	  return Events.findOne({_id:eid}).attendees.length;



   }
});

Template.speakersios.events({
    'click #gotoback': function(){
        window.history.back();
    }
});
