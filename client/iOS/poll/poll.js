Template.pollios.helpers({
 getspollbyeventid: function () {
       var eid=Router.current().params.query.EventId;
      return Events.find({_id:eid});

       },
       currenteventid: function(){
         return Router.current().params.query.EventId;
       }
});

Template.pollios.events({
    'click #gotoback': function(){
        window.history.back();
    }
});
