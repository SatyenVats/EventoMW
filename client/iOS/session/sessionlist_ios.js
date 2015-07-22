Template.sessionlistios.helpers({
sessionsbyeventid: function(){
 var eid=Router.current().params.query.EventId;
     return	Sessions.find({eventid:eid});//{eventid:eid}
}
});

Template.sessionlistios.events({
    'click #gotoback': function(){
        window.history.back();
    }
});
