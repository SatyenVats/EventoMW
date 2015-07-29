Template.attendeesdetails.helpers({
getattendeesdetails: function () {
      var eid=Router.current().params.query.EventId;
      var email_id=Router.current().params.query.Email;
      console.log(email_id);
      console.log(eid);
      //return Events.findOne({"attendees.email":{ $all: [email_id] }}).attendees;//{eventid:eid}
      //return Events.findOne( { $and: [ {"attendees.email" :  { $all: [email_id] }}, {"_id" :  { $all: 'pyiXBcSTqhJWqmy5S' }} ] });
      //return Events.findOne({_id:'pyiXBcSTqhJWqmy5S'}).attendees.
      var obj =[];
      obj.push(_.find(Events.findOne({_id:eid}, {attendees : {$elemMatch : {email:email_id}}}).attendees, function(item) {return item.email === email_id}));
      return obj;
      //db.myCollection.find( { $where: "attendees.email" } );
      //return Events.find({_id:eid});

      }
      });


Template.attendeesdetails.events({
    'click #gotoback': function(){
        window.history.back();
    }
});
