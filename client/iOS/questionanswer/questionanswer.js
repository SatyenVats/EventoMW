Template.questionanswerios.helpers({
 getspeakersbyeventid: function () {
       var eid=Router.current().params.query.EventId;
      return Events.find({_id:eid});

       }
});

Template.questionanswerios.events({
    'click #gotoback': function(){
        window.history.back();
    }
});
