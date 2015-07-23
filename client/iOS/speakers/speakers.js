Template.speakersios.helpers({
 getspeakersbyeventid: function () {
       var eid=Router.current().params.query.EventId;
      return Events.find({_id:eid});

       }
});

Template.speakersios.events({
    'click #gotoback': function(){
        window.history.back();
    }
});
