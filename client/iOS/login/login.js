Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;

        var events = Events.findOne( { $and: [ {"speakers.email" :  { $all: [emailVar] }}, {"redeemnumber" :  { $all: [passwordVar ] }} ] });
        if(events !== undefined)
          {

               Router.go('userhome',{},{query:{EventId: events._id}});
               //Router.go('userhome',{},{query:{EventId: pyiXBcSTqhJWqmy5S}});
          }

    }
});
