 Template.speakers.helpers({ 	
    getspeakersbyeventid: function (id) {

      var eid=Router.current().params.query.EventId;
  	  return Events.findOne({_id:eid}).attendees.length;  



   }
});