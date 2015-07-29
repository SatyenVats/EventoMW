Template.userdata.helpers({
 geteventdetails: function () {
       var eid=Router.current().params.query.EventId;
  	   return Events.find({_id:eid});

       }
});


Template.userdata.events({
        'submit #eventsbtn': function(event) {
            event.preventDefault();
              //Router.go('eventIos');
              Router.go('eventIos',{},{query:{EventId: eid._id}});
          }
        });
