Template.attendeelist.helpers({
	getattendees: function () {
		if(Session.get('eventid') !=undefined)
		{
			if(Events.findOne({_id:Session.get('eventid')}).attendees !== undefined)
			{
               return Events.findOne({_id:Session.get('eventid')}).attendees;
            }
		}
	},

	getattendeecount:function () {
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

 Template.attendeelist.events({
 "click .delete": function () {
    //  Meteor.call("deleteTask", this._id);
    }
    });