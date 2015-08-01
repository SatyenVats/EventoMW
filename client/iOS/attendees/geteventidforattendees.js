Template.attendIos.helpers({
eventid: function(){
 var eid=Router.current().params.query.EventId;

     return Events.find({_id:eid});
},
currenteventid: function(){
  return Router.current().params.query.EventId;


}

});



Template.sessionlistios.events({
    'click #gotoback': function(){
        window.history.back();
    }
});
