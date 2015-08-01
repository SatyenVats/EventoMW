Template.esessionlist.helpers({
	getsessions: function () {
		if(Session.get('eventid') !=undefined)
		{
			if(Events.findOne({_id:Session.get('eventid')}).eSession !== undefined)
			{
               return Events.findOne({_id:Session.get('eventid')}).eSession;
            }
		}
	},

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


	geteventspeakers: function() {
    return {
      position: Session.get("position"),
      limit: 10,
      rules: [
        {
          // token: '',
          collection: StandardLegends,
          field: 'legend',
          matchAll: true,
          template: Template.standardLegends
        }
      ]
    };
  }

});








