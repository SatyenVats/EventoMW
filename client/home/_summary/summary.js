Template.summaryhome.helpers({
	getEvent: function () {		
		if(Session.get('eventid') !==undefined)
		{
			return Events.find({_id:Session.get('eventid')});
		}
	}});

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