 Template.addattendees.events = {
'click #btnaddatn': function(){

 function SaveAttendee (profileimgpath) {
   var currentevent = Events.find({_id:Session.get('eventid')});
   var eventatnname=$('#eventatnname').val();
   var eventatnlname=$('#eventatnlname').val();

   var eventatnemail=$('#eventatnemail').val();
   var eventatnphone=$('#eventatnphone').val(); 
   var eventatndetails=$('#eventatndetails').val(); 
   

  //  Events.upsert(Session.get('eventid'),
		// {
		//   // Modifier
		//   $set: {
		//       speakers: res.data['data']['last']['value'],
		//       time: Date.now() // no need coma here
		//   }
		// }
		// );


 var newatn=Events.update(Session.get('eventid'),{ $addToSet: { 
 	                                                 attendees: {'fname':eventatnname,'lname':eventatnlname,'phone':eventatnphone,
 	                                                            'email':eventatnemail,'profilepath':profileimgpath,
 	                                                            'details': eventatndetails,
 	                                                            'isconfirmed':false}
 	                                                 }});

   //Events.find()
 }


  if(Session.get('eventid') !=undefined)
  {
     
  // var eventspkimg=$('#eventspkimg').val();

   var files = $("input.file_bag")[0].files;
   var eventspkimg= S3.upload({files:files,path:"Evento"
		            },function(err,r){
		                     if (err) 
		                     {           
		                         throw new Meteor.Error("Upload Speaker img Error: " + err.reason);
		                     } 
		                     else {                        
		                         
		                          SaveAttendee(r.url);
		                         
		                     }               
		              
		            });

 //   Values.upsert(currentevent,
	// {
	//   // Modifier
	//   $set: {
	//       Speakers.: res.data['data']['last']['value'],
	//       time: Date.now() // no need coma here
	//   }
	// }
// );

  }


}
}