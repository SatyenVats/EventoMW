Template.sessionItem.helpers({
 getquestioncountbysessionid: function(id){
 	var sid=id;//Router.current().params.query.EventId;
 	    return	Questions.find({sessionid:sid}).count();//{eventid:eid}
 },
 getcontentcountbysessionid: function(id){
 	var sid=id;//Router.current().params.query.EventId;
 	return	Contents.find({sessionid:sid}).count();//{eventid:eid}
 }
});




 Template.sessionItem.events = {
'click #questionbadge': function(){
    Router.go('addquestionsession',{},{query:{SessionId: this._id}});
},
'click #contentbadge': function(){
    Router.go('addcontentsession',{},{query:{SessionId: this._id,EventId:this.eventid}});
}
};