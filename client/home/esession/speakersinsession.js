 Template.speakersinsession.helpers({ 

 	getsessionspeakers : function() {
 		
    var sspeakers = Events.findOne({_id:Session.get('eventid')}, {speakers: {$elemMatch:{'fname':'ad'}}}).speakers;
    return sspeakers;

}

});