Events = new Mongo.Collection('events'); 



Event = new SimpleSchema({
		  title:       {type: String,    label: "Title",        max: 200 },
		  description: {type: String,    label: "Description",  max: 2000 ,  autoform: { rows: 2}},
		  address:     {type: String,    label: "Address",      max: 800,    autoform: { rows: 2}},
		  starttime:   {type: Date,      label: "Start Time" ,  optional: true},
		  endtime:     {type: Date,      label: "End Time",     optional: true},
		  speakers:    {type: [String],  label: "Speakers" ,    defaultValue: [],         regEx: SimpleSchema.RegEx.Email},
		  attendees:   {type: [String],  label: "Attendees",    defaultValue: [],         regEx: SimpleSchema.RegEx.Email}
		  // createdat:   {type: Date,      label: "Created At" ,  defaultValue: new Date(), optional: true},
		  // createdby:   {type: String,    label: "Created By",   defaultValue:'',   optional: true},//Meteor.userId},
		  // updatedat:   {type: Date,      label: "Updated At",   defaultValue: new Date(), optional: true},
		  // updatedby:   {type: String,    label: "Updated By",   defaultValue:'', optional: true}// Meteor.userId}
});

Events.attachSchema(Event);

Events.allow({
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

