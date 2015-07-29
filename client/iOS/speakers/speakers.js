Template.speakersios.helpers({
 getspeakersbyeventid: function () {
       var eid=Router.current().params.query.EventId;
      //return Events.find({_id:eid});
      return	Events.findOne({_id:eid}).speakers;
       }
});

Template.speakersios.events({
    'click #gotoback': function(){
        window.history.back();
    }
});
