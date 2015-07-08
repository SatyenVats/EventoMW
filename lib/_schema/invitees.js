Invitees = new Mongo.Collection('invitees'); 

Invitee = new SimpleSchema({
	    email:       {type: String,    label: "Email",          max: 200 },
	    confirmed:   {type: String,    label: "Confirmation",   max: 200 , optional: true},
	    title:       {type: String,    label: "Title",          max: 200 , optional: true}

	});


Invitees.attachSchema(Invitee);

Invitees.allow({
  insert: function(userId, doc){
		    return doc && doc.userId === userId;
		  },
  update: function(userId, doc){
		    return doc && doc.userId === userId;
		  },
  remove:  function(userId, doc){
		    return doc && doc.userId === userId;
		  }
});