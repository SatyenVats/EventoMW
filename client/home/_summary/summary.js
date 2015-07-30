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
			
			// var html = "Hello "+ event.speakers[i].fname +" " + event.speakers[i].lname ;
			// html+= " Please login with your email and Appcode";
			// html+= "<br/> AppCode : "+ event.redeemnumber; 
			// var dataContext={
			// 	  from:"Motifworks@mw.com",
			// 	  to: event.speakers[i].email,
			// 	  name: event.speakers[i].fname +" " + event.speakers[i].lname,
			// 	  subject:"Invitation to Event <h3>"+event.title+" !",
			// 	  message:"You must see this, it's amazing !  Your Appcode is "+ event.redeemnumber, 
			// 	  url:"http://myapp.com/content/amazingstuff"				 
			// 	};
			// Meteor.call('sendEmail', dataContext.from,dataContext.to,dataContext.subject,dataContext.message);

			var html = "Hello "+ event.speakers[i].fname +" " + event.speakers[i].lname ;
			html+= " Please login with your email and Appcode";
			html+= " <br/>AppCode : "+ event.redeemnumber; 
			html +="<img src='http://www.bsgroup.com.vn/cache/images/800x454-0/uploads/services_category/Party_Event_155984_1369623948.jpg' />";
			Meteor.call('sendEmail', "Event:"+ event.title +" Invitation", html,event.speakers[i].email);

		}
	},
	'click #btnatnemail': function(){
		var event = Events.findOne({_id:Session.get('eventid')});
		for (i = 0; i < event.attendees.length; i++) {    
			var html = "Hello "+ event.speakers[i].fname +" " + event.speakers[i].lname ;
			html+= " Please login with your email and Appcode";
			html+= " <br/>AppCode : "+ event.redeemnumber; 
			html +="<img src='http://www.bsgroup.com.vn/cache/images/800x454-0/uploads/services_category/Party_Event_155984_1369623948.jpg' />";
			Meteor.call('sendEmail', "Event:"+ event.title +" Invitation", html,event.speakers[i].email);
		}
	}
}
