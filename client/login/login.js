// Template.loginform.events({

//     'submit #loginform' : function(e, t){
//       e.preventDefault();
//       // retrieve the input field values
//       var email = t.find('#login-email').value
//         , password = t.find('#login-password').value;

//         // Trim and validate your fields here.... 

//         // If validation passes, supply the appropriate fields to the
//         // Meteor.loginWithPassword() function.
//         Meteor.loginWithPassword(email, password, function(err){
//         if (err)
//         {
//           // The user might not have been found, or their passwword
//           // could be incorrect. Inform the user that their
//           // login attempt has failed. 
//         }
//         else
//         {

//           // The user has been logged in.
//         }
//       });
//          return false; 
//       }
//   });


Template.login1.events({

'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        console.log("Form submitted.");
    }

  });