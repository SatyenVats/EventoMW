 Template.sidebar.helpers({ 	
 	     getsessionCount: function () {
 	     	var eid=Router.current().params.query.EventId;
 		    return Sessions.find({eventid:eid}).count();
  		  },
  		  getcontentCount: function () {
  		  	var eid=Router.current().params.query.EventId;
 		    return Contents.find({eventid:eid}).count();
  		  },
  		  getquestionCount: function () {
  		  	var eid=Router.current().params.query.EventId;
 		    return Questions.find({eventid:eid}).count();
  		  },
  		  getanswerCount: function () {
  		  	var eid=Router.current().params.query.EventId;
 		    return QAnswers.find({eventid:eid}).count();
  		  },
  		  getpollCount: function () {
  		  	var eid=Router.current().params.query.EventId;
 		    return Polls.find({eventid:eid}).count();
  		  }
});

Template.sidebar.events = {


    'click .side-bar-sessions': function(){
      Meteor.defer(function() { 
        Router.go('addsession',{},{query:{EventId: Router.current().params.query.EventId}});
      })
     },
     'click .side-bar-contents': function(){
      
          Meteor.defer(function() { 
            Router.go('addcontent',{},{query:{EventId: Router.current().params.query.EventId}});
          })

     },
     'click .side-bar-questions': function(){
       Meteor.defer(function() { 
        Router.go('addquestion',{},{query:{EventId: Router.current().params.query.EventId}});
      })
     },
     'click .side-bar-answers': function(){
        Router.go('addsessionevent',{},{query:{EventId: Router.current().params.query.EventId}});
     },
     'click .side-bar-polls': function(){
       Meteor.defer(function() { 
        Router.go('addpoll',{},{query:{EventId: Router.current().params.query.EventId}});
      })
     }
}