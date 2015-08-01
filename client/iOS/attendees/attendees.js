Template.attendeesios.helpers({
attendeesbyeventid: function(){
 var eid=Router.current().params.query.EventId;

 return	Events.findOne({_id:eid}).attendees;//{eventid:eid}
     //return	Sessions.find({eventid:eid});//{eventid:eid}
}
});


Template.attendeesios.events({
    'click #gotoback': function(){
        window.history.back();
    }
});
