Template.logisticsios.helpers({
 getlogisticsbyeventid: function () {
       var eid=Router.current().params.query.EventId;
      return Events.find({_id:eid});

       }
});

Template.logisticsios.events({
    'click #gotoback': function(){
        window.history.back();
    }
});
