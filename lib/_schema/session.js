Sessions = new Mongo.Collection('sessions');  //testing autoform

Session = new SimpleSchema({
            eventid:     {  type: String,    label: "eventId",    optional:true },
            title:       { type: String,     label: "Title",   max: 200  },
            starttime:   {  type: Date,      label: "Start time"  },
            endtime:     {  type: Date,      label: "End time"  },
            description: {  type: String,    label: "Description"  },           
            speakers:    {  type: [String],  label: "Speakers" ,  optional:true,  defaultValue: [],         regEx: SimpleSchema.RegEx.Email},
            attendees:   {  type: [String],  label: "Attendees",  optional:true,  defaultValue: [],         regEx: SimpleSchema.RegEx.Email}
});

Sessions.attachSchema(Session);
Sessions.allow({
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