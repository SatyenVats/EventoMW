Template.attendeesIos.helpers({
attendeesbyeventid: function(){
 var eid=Router.current().params.query.EventId;

 return Events.find({eventid:eid}).fetch().attendees;
     //return	Sessions.find({eventid:eid});//{eventid:eid}
}
});


Template.attendeesIos.events({
    'click #gotoback': function(){
        window.history.back();
    }
});
