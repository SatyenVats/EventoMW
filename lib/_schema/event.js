Events = new Mongo.Collection('events');






<<<<<<< HEAD
Participants = new SimpleSchema({
		                 profileid:    {type: Profile,    label: "Name",       max: 200 },
				         isconfirmed:  {type: Boolean,    label: "isconfirmed",
				                        defaultValue:false , autoform: { type: "hidden"} }
						 });

=======
>>>>>>> updated schema

Event = new SimpleSchema({
		  title:        {type: String,      label: "Title",        max: 200 },
		  description:  {type: String,      label: "Description",  max: 2000 ,  autoform: { rows: 2} },
		  venuename:    {type: String,      label: "Venue Name",      max: 800,    optional: true},
		  address:      {type: String,      label: "Address",      max: 800,    autoform: { rows: 2},   optional: true},
		  starttime:    {type: Date,        label: "Start Time" ,  optional: true},
		  endtime:      {type: Date,        label: "End Time",     optional: true},
		  speakers:     {type: [Profile],   label: "Speakers(email)" ,    defaultValue: [],   optional: true},
		  attendees:    {type: [Profile],   label: "Attendees",    defaultValue: [] ,  optional: true},
		  eSession:     {type: [ESession],  label: "Sessions",    defaultValue: [] ,  optional: true},		  		  
		  redeemnumber: {type: String,      label: "RedeemNumber", max: 10 ,  optional: true},
		  latitude:     {type: String,      label: "Latitude", max: 40 ,  optional: true},
		  longitude:    {type: String,      label: "Longitude", max: 40 ,  optional: true}

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
