
var eventid;
var currentevent;


Template.wizard.rendered = function () {
 // $('#us3').locationpicker({
 //  location: {latitude: 46.15242437752303, longitude: 2.7470703125},
 //  radius: 300,
 //  inputBinding: {
 //    latitudeInput: $('#us3-lat'),
 //    longitudeInput: $('#us3-lon'),
 //    radiusInput: $('#us3-radius'),
 //    locationNameInput: $('#us3-address')
 //  },
 //  enableAutocomplete: true,
 //  onchanged: function (currentLocation, radius, isMarkerDropped) {
 //            // Uncomment line below to show alert on each Location Changed event
 //            //alert("Location changed. New location (" + currentLocation.latitude + ", " + currentLocation.longitude + ")");
 //          }
 //        });

 $('#rootwizard').bootstrapWizard({'tabClass': 'bwizard-steps'});  

 $('#rootwizard').bootstrapWizard({onNext: function(tab, navigation, index) {

        //  Session.set('wizardindex', index);
        if(index==1) 
        { 
          var eventname=$('#eventname').val();
          var eventdesc=$('#eventdesc').val();
          var eventfrom=$('#eventfrom').val() +" 00:00";
          var eventto=$('#eventto').val()+" 00:00";
          eventid= Events.insert({'title':eventname,'description':eventdesc,                              
            'starttime':eventfrom,'endtime':eventto
          });   

          $('#redeemcode').val(eventid.slice(0,5));
          Session.set('eventid', eventid);
        }
        if(index!=1)
        {
          	// currentevent = Events.find({_id:eventid});
           //   var venuename=$('#venuename').val();
           //   var address=$('#us3-address').val();
           //   var latitude=$('#us3-lat').val();
           //   var longitude=$('#us3-lon').val();  
         }
         if(index==2) { 

           var venuename=$('#venuename').val();
           var address =$('#us3-address').val();
           var lat =$('#us3-lat').val();
           var lon =$('#us3-lon').val();

           var evt= Events.update(Session.get('eventid'), 
            { $set: { 'venuename':venuename,'address':address,'latitude':lat,'longitude':lon }}
            );



         }
         if(index==6) { 

          var redeemcode=$('#redeemcode').val();
          var evt= Events.update(Session.get('eventid'), 
            {$set: { 'redeemnumber':redeemcode }}
            );

        }



        var $total = navigation.find('li').length;
        var $current = index+1;
        var $percent = ($current/$total) * 100;
        $('#rootwizard').find('.progress-bar').css({width:$percent+'%'});



      }, onTabShow: function(tab, navigation, index) {
       var $total = navigation.find('li').length;
       var $current = index+1;
       var $percent = ($current/$total) * 100;
       $('#rootwizard').find('.progress-bar').css({width:$percent+'%'});
     }
   });





  // function LoadEventDetailsinWizard(eventid)
  // {

  // }



   // var eventname=$('#eventname').val();
   // var eventdesc=$('#eventdesc').val();
   // var eventfrom=$('#eventfrom').val();
   // var eventto=$('#eventto').val();
   // var eventvenue=$('#eventvenue').val();

   // var eventspkname=$('#eventspkname').val();
   // var eventspkemail=$('#eventspkemail').val();
   // var eventspkphone=$('#eventspkphone').val();   
   // var eventspkimg=$('#eventspkimg').val();

   // var eventatnname=$('#eventatnname').val();
   // var eventatnemail=$('#eventatnemail').val();
   // var eventatnphone=$('#eventatnphone').val();
   // var eventatnimg=$('#eventatnimg').val();
   // var redeemcode=$('#redeemcode').val();



 };


 Template.wizard.events = {
  'click #wizardnext': function(){
   var eventname=$('#eventname').val();
   var eventdesc=$('#eventdesc').val();
   var eventfrom=$('#eventfrom').val();
   var eventto=$('#eventto').val();
   var eventvenue=$('#eventvenue').val();

   var eventspkname=$('#eventspkname').val();
   var eventspkemail=$('#eventspkemail').val();
   var eventspkphone=$('#eventspkphone').val();   
   var eventspkimg=$('#eventspkimg').val();

   var eventatnname=$('#eventatnname').val();
   var eventatnemail=$('#eventatnemail').val();
   var eventatnphone=$('#eventatnphone').val();
   var eventatnimg=$('#eventatnimg').val();

   var redeemcode=$('#redeemcode').val();

   
 }
};