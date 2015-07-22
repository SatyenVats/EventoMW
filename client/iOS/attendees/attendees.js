Template.attendeesIos.helpers({
attendeesbyeventid: function(){
 var eid=Router.current().params.query.EventId;
     return	Sessions.find({eventid:eid});//{eventid:eid}
}
});


Template.attendeesIos.events({
    'click #gotoback': function(){
        window.history.back();
    }
});
