Profiles =  new Mongo.Collection('profiles');
Profile = new SimpleSchema({
	               fname:        {type: String,    label: "First Name",       max: 200 },
 				   lname:        {type: String,    label: "Last Name",        max: 200 },
 				   phone:        {type: String,    label: "Phone",            max: 200 }, 		
 				   details:      {type: String,    label: "description",          max: 9000 }, 					 
 				   email:        {type: String,     label: "Email",           max: 200 },
 				   profilepath:  { type: String,     label: "File Path",      max:2000,   optional: true  },
 				   isconfirmed:  {type: Boolean,    label: "isconfirmed",    defaultValue:false , autoform: { type: "hidden"} }

 				});

Profiles.attachSchema(Profile);

Profiles.allow({
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