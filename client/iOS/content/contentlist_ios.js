Template.contentios.helpers({
 getcontentbyeventid: function () {
       var eid=Router.current().params.query.EventId;
      return Events.find({_id:eid});

       }
});

Template.contentios.events({
    'click #gotoback': function(){
        window.history.back();
    }
});
