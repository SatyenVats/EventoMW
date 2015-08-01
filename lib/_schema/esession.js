//ESessions = new Mongo.Collection('esessions');  //testing autoform

ESession = new SimpleSchema({          
            title:       {  type: String,     label: "Title",   max: 200  },
            starttime:   {  type: Date,      label: "Start time"  },
            endtime:     {  type: Date,      label: "End time"  },
            description: {  type: String,    label: "Description"  },           
            speakers:    {  type: [String],  label: "Speakers" ,  optional:true},
            attendees:   {  type: [String],  label: "Attendees",  optional:true},
            contents:     {type: [Content],   label: "Longitude", max: 40 ,  optional: true}
});

// ESessions.attachSchema(ESession);
// ESessions.allow({
//   insert: function(userId, doc){
//         return doc && doc.userId === userId;
//       },
//   update: function(userId, doc){
//         return doc && doc.userId === userId;
//       },
//   remove:  function(userId, doc){
//         return doc && doc.userId === userId;
//       }
// });