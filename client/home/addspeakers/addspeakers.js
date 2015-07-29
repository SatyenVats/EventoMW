 Template.addspeakers.events = {
'click #btnaddspk': function(){

 function SaveSpeaker (profileimgpath) {
   var currentevent = Events.find({_id:Session.get('eventid')});
   var eventspkname=$('#eventspkname').val();
   var eventspklname=$('#eventspklname').val();

   var eventspkemail=$('#eventspkemail').val();
   var eventspkphone=$('#eventspkphone').val(); 
   var eventspkdetails=$('#eventspkdetails').val(); 
   

  //  Events.upsert(Session.get('eventid'),
		// {
		//   // Modifier
		//   $set: {
		//       speakers: res.data['data']['last']['value'],
		//       time: Date.now() // no need coma here
		//   }
		// }
		// );


 var newspk=Events.update(Session.get('eventid'),{ $addToSet: { 
 	                                                 speakers: {'fname':eventspkname,'lname':eventspklname,'phone':eventspkphone,
 	                                                            'email':eventspkemail,'profilepath':profileimgpath,
 	                                                            'details': eventspkdetails,
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
		                         
		                          SaveSpeaker(r.url);
		                         
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