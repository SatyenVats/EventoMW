Template.eventbrief.helpers({
geteventbrief: function () {
      var eid=Router.current().params.query.EventId;
      return Events.find({_id:eid});

      }
      });
