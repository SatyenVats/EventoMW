var contentHooks = {
  before: {
    insert: function(doc) {     
        doc.sessionid = Router.current().params.query.SessionId;          
      return doc;
    }
  }
}
 
AutoForm.addHooks('contentForm', contentHooks);