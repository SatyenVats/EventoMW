Template.summary.helpers({
	getsessioncount:function () {
		if(Session.get('eventid') !=undefined)
		{
			if(Events.findOne({_id:Session.get('eventid')}).eSession !== undefined)
			{
				return Events.findOne({_id:Session.get('eventid')}).eSession.length;
			}
			else
				return 0;

		}
	},


	getspeakerscount:function () {
		if(Session.get('eventid') !=undefined)
		{
			if(Events.findOne({_id:Session.get('eventid')}).speakers !== undefined)
			{
				return Events.findOne({_id:Session.get('eventid')}).speakers.length;
			}
			else
				return 0;

		}
	},

	getattendeescount:function () {
		if(Session.get('eventid') !=undefined)
		{
			if(Events.findOne({_id:Session.get('eventid')}).attendees !== undefined)
			{
				return Events.findOne({_id:Session.get('eventid')}).attendees.length;
			}
			else
				return 0;

		}
	}



});


Template.summary.events = {
	'click #btnspkemail': function(){
		var event = Events.findOne({_id:Session.get('eventid')});
		for (i = 0; i < event.speakers.length; i++) {
      

			var html = "Hello "+ event.speakers[i].fname +" " + event.speakers[i].lname ;
			 html+= " Please login with your email and Appcode";
			 html+= "<br/> AppCode : "+ event.redeemnumber; 

	   	Meteor.call('sendEmail', "Event:"+ event.title +" Invitation", 

	   		html,

	   		 event.speakers[i].email);
	}
},

'click #btnatnemail': function(){
	var event = Events.findOne({_id:Session.get('eventid')});

	for (i = 0; i < event.attendees.length; i++) {
	   Meteor.call('sendEmail', "Event:"+ event.title +" Invitation", 
	   	"<h2>"+event.title+"</h2> Attendee Invitation",
	   	event.attendees[i].email);
	}

}


}
