
Template.glocation.rendered = function () {
 $('#us3').locationpicker({
        location: {latitude: 46.15242437752303, longitude: 2.7470703125},
        radius: 300,
        inputBinding: {
            latitudeInput: $('#us3-lat'),
            longitudeInput: $('#us3-lon'),
            radiusInput: $('#us3-radius'),
            locationNameInput: $('#us3-address')
        },
        enableAutocomplete: true,
        onchanged: function (currentLocation, radius, isMarkerDropped) {
            // Uncomment line below to show alert on each Location Changed event
            //alert("Location changed. New location (" + currentLocation.latitude + ", " + currentLocation.longitude + ")");
        }
    });

    $(".tab-pane").css({'visibility':'hidden'  , 'position':'absolute'});
    $("ul.tabs li:first").addClass("active").show(); 
    $(".tab-pane:first").css({'visibility':'visible' , 'position':'static'}); 

    //On Click Event
    $("ul.tabs li").click(function() {
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active"); 
        $(".tab-pane").css({'visibility':'hidden' , 'position':'absolute'}); 
        var activeTab = $(this).find("a").attr("href"); 
        $(activeTab).css({'visibility':'visible'  , 'position':'static'});
        return false;
    });

}