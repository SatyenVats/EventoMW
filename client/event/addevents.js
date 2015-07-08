 Template.eventlist.helpers({ 	
 	events: function () {
 		    return Events.find();
  		  }
});


 Template.eventlist.events = {
'click #eventsessions': function(){
    Router.go('addsession',{},{query:{EventId: this._id}});
}
}




 Template.eventItem.helpers({
 	 getsessioncountbyeventid: function (id) {
  	   return Sessions.find({eventid:id}).count();  
   }
 });


  Template.eventdetails.helpers({
 	 geteventdetailsbyid: function () {
 	 var eid=Router.current().params.query.EventId;
  	   return Events.find({_id:eid});  
   }
 });

  Template.eventInfo.helpers({
 	 getspeakerCount: function () {
 	 var eid=Router.current().params.query.EventId;
  	   return Events.findOne({_id:eid}).speakers.length;  
   },
   getattendeeCount: function () {
 	 var eid=Router.current().params.query.EventId;
  	   return Events.findOne({_id:eid}).attendees.length;  
   }
 });


  


