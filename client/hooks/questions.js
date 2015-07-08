
var questionHooks = {
  before: {
    insert: function(doc) {    
        // var temp =$('#qspeakers');
        // doc.speakers= temp;
        doc.sessionid = Router.current().params.query.SessionId;          
      return doc;
    }
  }
}
 
AutoForm.addHooks('questionForm', questionHooks);