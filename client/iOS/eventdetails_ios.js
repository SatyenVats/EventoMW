Template.eventdetails_ios.helpers({
sessionsbyeventid: function(){
 var eid=Router.current().params.query.EventId;
     return	Sessions.find({eventid:eid});//{eventid:eid}
},
geteventdetails: function () {
      var eid=Router.current().params.query.EventId;
      return Events.find({_id:eid});

      }
});
