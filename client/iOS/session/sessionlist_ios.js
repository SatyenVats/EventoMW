Template.sessionlistios.helpers({
sessionsbyeventid: function(){
 var eid=Router.current().params.query.EventId;

     return	Events.findOne({_id:eid}).eSession;//{eventid:eid}
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

// Template.sessionlist_ios.helpers({
// sessionsbyeventid: function(){
//  var eid=Router.current().params.query.EventId;
//      return	Sessions.find({eventid:eid});//{eventid:eid}
// }
// });

// Template.sessionlistios.events({
//     'click #gotoback': function(){
//         window.history.back();
//     }
// });
