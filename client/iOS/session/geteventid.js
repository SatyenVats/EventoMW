Template.sessionListIos2.helpers({
eventid: function(){
 var eid=Router.current().params.query.EventId;

     return Events.find({_id:eid});
}

});



Template.sessionlistios.events({
    'click #gotoback': function(){
        window.history.back();
    }
});
