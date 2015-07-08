Meteor.methods({
  addEvent: function(doc) {     
            Logger.info('Object before Insert : ');
            Logger.info('Method: ' +JSON.stringify(doc));          	
            check(doc, Event);
           // Events.clean(doc);
          //  this.unblock();   
            Events.insert(doc);

            
          
  }
});

