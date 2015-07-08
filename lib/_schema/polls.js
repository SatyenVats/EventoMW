Polls = new Mongo.Collection('polls');
Poll  = new SimpleSchema({
                 // pollid:          { type: String,     label: "PollId",         max: 200 },
                 eventid:         { type: String,     label: "SessionId",      max: 200, optional: true },
                 title:           { type: String,     label: "Title",          max: 2000 ,  autoform: { rows: 2}},
                 optiona:         { type: String,     label: "Option A",       max: 200 },
                 optionb:         { type: String,     label: "Option B",       max: 200 },
                 optionc:         { type: String,     label: "Option C",       max: 200,   optional: true },
                 optiond:         { type: String,     label: "Option D",       max: 200,   optional: true },
                 optione:         { type: String,     label: "Option E",       max: 200,   optional: true },

                 acount:          { type: Number,     label: "ACount",         max: 10,    optional: true  },
                 bcount:          { type: Number,     label: "BCount",         max: 10,    optional: true  },
                 ccount:          { type: Number,     label: "CCount",         max: 10,    optional: true  },
                 dcount:          { type: Number,     label: "DCount",         max: 10,    optional: true  },
                 ecount:          { type: Number,     label: "ECount",         max: 10,    optional: true  }
               
});

Polls.attachSchema(Poll);

Polls.allow({
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