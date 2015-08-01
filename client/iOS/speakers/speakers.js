Template.speakersios.helpers({
 getspeakersbyeventid: function () {
       var eid=Router.current().params.query.EventId;
      //return Events.find({_id:eid});
      //return	Events.findOne({_id:eid}).speakers;


      return _.map(Events.findOne({_id:eid}).speakers, function(value, index){
            return {value: value, index: index};
          });
       }
});

Template.speakersios.events({
    'click #gotoback': function(){
        window.history.back();
    }
});


Template.spkr.helpers({
  isActive : function(i){

    return i===0?'active': '';
  }
});
