Template.speakerIos.helpers({
attendeesbyeventid: function(){
 var eid=Router.current().params.query.EventId;
     return	Sessions.find({eventid:eid});//{eventid:eid}
}
});
