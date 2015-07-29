Template.sessionlistios.helpers({
sessionsbyeventid: function(){
 var eid=Router.current().params.query.EventId;

     return	Events.findOne({_id:eid}).eSession;//{eventid:eid}
},
geteventid:function () {
  
  var eid2=Router.current().params.query.EventId;
  return	eid;
  //return Events.find({_id:eid2});
}
});



Template.sessionlistios.events({
    'click #gotoback': function(){
        window.history.back();
    }
});
