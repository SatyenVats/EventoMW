 StandardLegends = new Mongo.Collection(null);
 SessionSpeakers = new Mongo.Collection(null);
 SessionAttendees = new Mongo.Collection(null);

 Template.esessionsinfo.onRendered(function() {
   

    //$("input").tagsinput();
});

 Template.esessionsinfo.events({
 "click .addspkatnpopup": function (e,t) {
       e.preventDefault();
       Session.set('sessionid',this.title);
       $("#sessionspeakersttendeeaddmodal").modal("show");
    },

"click #btnaddsessionspk": function (e,t) {
	   var fname=[];
	   fname.push($('#inputspeaker').val());
	   var currentsession= Session.get('sessionid');
       var sspeakers = Events.findOne({_id:Session.get('eventid')}, {speakers: {$elemMatch:{'fname':fname}}}).speakers;
       var doc = Events.findOne({_id:Session.get('eventid')}).eSession;
       if(sspeakers!==undefined)
       {    		
 			Meteor.call('addsessionspeaker',Session.get('eventid'),currentsession,fname,function(err, response) {});        	 
       }
     },

     "click #btnaddsessionatn": function (e,t) {
	   var fname=[];
	   fname.push($('#inputattendees').val());
	   var currentsession= Session.get('sessionid');
       var attendees = Events.findOne({_id:Session.get('eventid')}, {attendees: {$elemMatch:{'fname':fname}}}).attendees;
       var doc = Events.findOne({_id:Session.get('eventid')}).eSession;
	       if(attendees!==undefined)
	       {                   		
	 		Meteor.call('addsessionattendee',Session.get('eventid'),currentsession,fname,function(err, response) {});
	       } 
       }
     

  });


 Template.esessionsinfo.helpers({ 
 	settings : function() {
    var sspeakers = Events.findOne({_id:Session.get('eventid')}).speakers;

    sspeakers.forEach(function (obj) {
 		 SessionSpeakers.insert(obj);
		});


    return {
      position: 'bottom',
      limit: 5,
      rules: [
        {         
          collection: SessionSpeakers,
          field: 'fname',
          matchAll: true,
          template: Template.standardLegends
        }
      ]
    };
  },

  getattendees : function() {
    var attendees = Events.findOne({_id:Session.get('eventid')}).attendees;
    
    attendees.forEach(function (obj) {
 		 SessionAttendees.insert(obj);
		});


    return {
      position: 'bottom',
      limit: 5,
      rules: [
        {         
          collection: SessionAttendees,
          field: 'fname',
          matchAll: true,
          template: Template.standardLegends
        }
      ]
    };
  },


  legends: function() {
    return StandardLegends.find();
  },

  getspeakersinsessions:function  () { 

  	 return Events.findOne({_id:Session.get('eventid')},{eSession: {$elemMatch:{'title':Session.get('sessionid')}}}).eSession[0].speakers;

 },
   getattendeesinsessions:function  () {
  	 return Events.findOne({_id:Session.get('eventid')},{eSession: {$elemMatch:{'title':Session.get('sessionid')}}}).eSession[0].attendees;
  }

 });



 [{legend: 'Asp.net', code: '355', year: '2007',color: 'White',bg: 'Green'},
  {legend: 'Ajax', code: '355', year: '2007',color: 'White',bg: 'Green'},
  {legend: 'WPF', code: '355', year: '2007',color: 'White',bg: 'Green'},
  {legend: 'LINQ', code: '355', year: '2007',color: 'White',bg: 'Green'},
  {legend: 'IIS', code: '355', year: '2007',color: 'White',bg: 'Green'},
  {legend: 'SQL Server', code: '355', year: '2007',color: 'White',bg: 'Green'},
  {legend: 'Generic Programming', code: '355', year: '2007',color: 'White',bg: 'Green'},
  {legend: 'Windows 8 Apps', code: '355', year: '2007',color: 'White',bg: 'Green'},
  {legend: 'HTML5', code: '355', year: '2007',color: 'White',bg: 'Green'},
  {legend: 'Javascript', code: '355', year: '2007',color: 'White',bg: 'Green'},
  {legend: 'OOPS', code: '355', year: '2007',color: 'White',bg: 'Green'},
  {legend: 'IIS', code: '355', year: '2007',color: 'White',bg: 'Green'},
  {legend:  'SOA', code: '355', year: '2007',color: 'White',bg: 'Green'},
  {legend: 'Photoshop', code: '355', year: '2007',color: 'White',bg: 'Green'},
  {legend: 'Agile', code: '355', year: '2007',color: 'White',bg: 'Green'},
  {legend: 'BI', code: '355', year: '2007',color: 'White',bg: 'Green'},
  {legend: 'BizTalk',code: '360',year: '1996',color: 'Black',bg: 'Yellow'},
  {legend: 'Hadoop',code: '360',year: '1996',color: 'Black',bg: 'Yellow'},
  {
    legend: 'C++',
    code: '361',
    year: '2007',
    color: 'White',
    bg: 'Green'
  },
  {
    legend: 'Delphi',
    code: '356',
    year: '1996',
    color: 'Black',
    bg: 'Yellow'
  },
  {
    legend: 'Electronics',
    code: '357',
    year: '2007',
    color: 'White',
    bg: 'Green'
  },
  {
    legend: 'Furniture',
    code: '362',
    year: '1996',
    color: 'Black',
    bg: 'Yellow'
  },
  {
    legend: 'Meteor',
    code: '364',
    year: '2007',
    color: 'White',
    bg: 'Green'
  },
  {
    legend: 'Hadoop',
    code: '358',
    year: '1996',
    color: 'Black',
    bg: 'Yellow'
  },
  {
    legend: 'SQL',
    code: '100',
    year: '2007',
    color: 'Black',
    bg: 'Orange'
  },
  {
    legend: 'ACID',
    code: '108',
    year: '1996',
    color: 'Black',
    bg: 'Yellow'
  }
  ].forEach(function (obj) {
  StandardLegends.insert(obj);
});