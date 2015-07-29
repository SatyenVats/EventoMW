Template.summaryhome.helpers({
	getEvent: function () {		
		if(Session.get('eventid') !==undefined)
		{
			return Events.find({_id:Session.get('eventid')});
		}
	}});



