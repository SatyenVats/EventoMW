var eventHooks = {
  before: {
    insert: function(doc) {   

       // $.each(doc.speakers, function(i,item) {
       //     doc.sessionid = Router.current().params.query.SessionId;  

       // });
       

      return doc;
    }
  }
}
 
AutoForm.addHooks('eventForm', eventHooks);


Events.after.insert(function(userId, doc) {
  console.log("after client Hooks Inserted:", this._id);  
  if(this._id !==false)
  Router.go('addsessionevent',{},{query:{EventId: this._id}});
});

