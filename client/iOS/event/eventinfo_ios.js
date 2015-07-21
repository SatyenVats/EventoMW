 Template.eventinfo_ios.helpers({ 	
    geteventdetailsbyid: function () {
 	 var eid=Router.current().params.query.EventId;
  	   return Events.find({_id:eid});  
   },
    getspeakerCount: function () {
 	 var eid=Router.current().params.query.EventId;
  	   return Events.findOne({_id:eid}).speakers.length;  
   },
    getattendeeCount: function () {
 	 var eid=Router.current().params.query.EventId;
  	   return Events.findOne({_id:eid}).attendees.length;  
   },
    getquestionCount: function () {
  		  	var eid=Router.current().params.query.EventId;
 		    return Questions.find({eventid:eid}).count();
  		  },
    getanswerCount: function () {
  		  	var eid=Router.current().params.query.EventId;
 		    return QAnswers.find({eventid:eid}).count();
  		  },
  	getpollCount: function () {
  		  	var eid=Router.current().params.query.EventId;
 		    return Polls.find({eventid:eid}).count();
  		  }
});


Template.eventinfo_ios.events = {
'click #eventsessions': function(){
    var eid=Router.current().params.query.EventId;
    Router.go('sessionlist_ios',{},{query:{EventId: this._id}});
},
'click #eventconents': function(){
    var eid=Router.current().params.query.EventId;
    Router.go('contentlist_ios',{},{query:{EventId: this._id}});
}



}


