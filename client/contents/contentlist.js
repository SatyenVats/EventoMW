 Template.contentlist.helpers({
 contentsbysessionid: function(){
 	var eid=Router.current().params.query.EventId;
 	    return	Contents.find({eventid:eid});//{eventid:eid}
 }
 
});