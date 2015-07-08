Template.questionlist.helpers({ 	
  getquestioncountbysessionid: function(){
 	var sid=Router.current().params.query.SessionId;
 	    return	Questions.find({sessionid:sid});//{eventid:eid}
 },
 questionsbysessionid: function(){
 	var sid=Router.current().params.query.SessionId;
 	    return	Questions.find({session:sid});//{eventid:eid}
 },

  questionsbyeventid: function(){
 	var eid=Router.current().params.query.EventId;
 	    return	Questions.find({eventid:eid});//{eventid:eid}
 },
 questioncount: function(){
 	var sid=Router.current().params.query.SessionId;
 	return	Questions.find({sessionid:sid}).count();
 }

});




Template.addquestion.helpers({ 	
  getspeakerbysessionid: function(){ 	
  	var sid=Router.current().params.query.SessionId;
 	 return	Sessions.findOne({_id:sid}).speakers;//{eventid:eid}
 },
 sessiontitle:function(){ 	
  	var sid=Router.current().params.query.SessionId;
 	 return	Sessions.findOne({_id:sid}).title;
 	}
});


Template.questionItem.helpers({ 	
  getanswersbyquestionid: function(qid){ 	
 	    return	QAnswers.find({questionid:qid}).count();//{eventid:eid}
 }

});

Template.questionItem.events = {
 'click #questionbadge': function(){
    Router.go('questionanswers',{},{query:{Questionid: this._id}});
}
}

Template.questionanswers.helpers({ 
 answersbyquestionid: function(){
 	var qid=Router.current().params.query.Questionid;

 	
 	    return	QAnswers.find({questionid:qid});//{questionid:qid}
 },
 questiontitlebyquestionid: function(){
 	var qid=Router.current().params.query.Questionid; 	
 	    return	Questions.findOne({_id:qid}).title;
 }

});

