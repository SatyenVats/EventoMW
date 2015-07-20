
Template.userhome.helpers({
 geteventdetails: function () {
       var eid=Router.current().params.query.EventId;
  	   return Events.find({_id:eid});

       }
});


Template.userhome.events({
        'submit #eventsbtn': function(event) {
            event.preventDefault();
              Router.go('eventIos');
          }
        });
