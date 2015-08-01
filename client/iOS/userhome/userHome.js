Template.userhome.helpers({
 getuserdetails: function () {
       var eid=Router.current().params.query.EventId;
  	   //return Events.find({_id:eid});
       return Events.findOne({_id:eid}).speakers;
       }
});


Template.userhome.events({
        'submit #eventsbtn': function(event) {
            event.preventDefault();
              //Router.go('eventIos');
              Router.go('eventIos',{},{query:{EventId: eid._id}});
          }
        });
