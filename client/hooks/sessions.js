
var sessionHooks = {
  before: {
    insert: function(doc) {     
        doc.eventid = Router.current().params.query.EventId;          
      return doc;
    }
  }
}
 
AutoForm.addHooks('sessionForm', sessionHooks);
