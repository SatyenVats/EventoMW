Meteor.methods({
  addEvent: function(doc) {     
            Logger.info('Object before Insert : ');
            Logger.info('Method: ' +JSON.stringify(doc));          	
            check(doc, Event);
           // Events.clean(doc);
          //  this.unblock();   
            Events.insert(doc);

            
          
  },

 addsessionspeaker :function(eventid,currentsession,fname){ 
  	   var doc = Events.findOne({_id:eventid}).eSession;
  	   for(i=0;i<doc.length;i++)
        {
        	if(doc[i].title==currentsession)
        	{
    			 var test= Events.update(
                               {_id:eventid,"eSession.title" : currentsession},
                               { $addToSet :{"eSession.$.speakers":fname[0]}});  
                            
            }
  }
},

 addsessionattendee :function(eventid,currentsession,fname){
  	

  	   var doc = Events.findOne({_id:eventid}).eSession;
  	   for(i=0;i<doc.length;i++)
        {
        	if(doc[i].title==currentsession)
        	{
    			 var test= Events.update(
                               {_id:eventid,"eSession.title" : currentsession},
                               { $addToSet :{"eSession.$.attendees":fname[0]}});  
                               
            }
  }
}



});

