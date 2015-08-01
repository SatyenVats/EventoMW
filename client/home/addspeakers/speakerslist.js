Template.speakerslist.helpers({
	getspeakers: function () {
		if(Session.get('eventid') !=undefined)
		{
			if(Events.findOne({_id:Session.get('eventid')}).speakers !== undefined)
			{
               return Events.findOne({_id:Session.get('eventid')}).speakers;
            }
		}
	},

	getspeakercount:function () {
		if(Session.get('eventid') !=undefined)
		{
			if(Events.findOne({_id:Session.get('eventid')}).speakers !== undefined)
			{
              return Events.findOne({_id:Session.get('eventid')}).speakers.length;
            }
          else
          	return 0;

		}
	}
});

 Template.speakerslist.events({
 "click .delete": function () {
    //  Meteor.call("deleteTask", this._id);
    }
    });