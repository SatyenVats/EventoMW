Template.addesession.rendered = function () {
	$('#sessionfrom').datetimepicker({format: 'MM/DD/YYYY'});
	$('#sessionto').datetimepicker({format: 'MM/DD/YYYY'});
};


Template.addesession.events = {
// 'click #btnaddsessionspk': function(){
// 	if(Session.get('sessionid') !=undefined)
// 	{

//       var sessionid= Events.update(Session.get('eventid'),{ $addToSet: { 
//  	                                                 eSession: {'title':eventspkname,      'starttime':eventspklname,
//  	                                                            'endtime':eventspkphone,   'description':eventspkemail}
//  	                                                 }});
//       Session.set('sessionid',sessionid);
// 	}
// },
// 'click #btnaddsessionatn': function(){
// 	if(Session.get('sessionid') !=undefined)
// 	{
      
// 	}
// }

'click #btnaddsessions': function(){
	var sessiontitle=$('#sessiontitle').val();
	var eventdesc=$('#eventdesc').val();
	var sessionfrom=$('#sessionfrom').val();
	var sessionto=$('#sessionto').val();
	if(Session.get('eventid') !=undefined)
	{

      var sessionid= Events.update(Session.get('eventid'),{ $addToSet: { 
 	                                                 eSession: {'title':sessiontitle,      'starttime':sessionfrom,
 	                                                            'endtime':sessionto,   'description':eventdesc, 'speakers':[]}
 	                                                 }});


}

}
};




