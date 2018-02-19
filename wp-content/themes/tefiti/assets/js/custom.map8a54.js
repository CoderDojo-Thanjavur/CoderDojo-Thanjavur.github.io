
(function ($) {

    $(document).ready(function () {


        var map = jQuery('#map');
        var mapIcon = map.data('map-icon');
        var mapLatitute = map.data('map-latitute');
        var mapLongitute = map.data('map-longitude');
        var mapZoom = map.data('map-zoom');


        if ($('#map').length) {
            google.maps.event.addDomListener(window, "load", tefiti_contact_google_map);
        }
        function tefiti_contact_google_map() {



            // Create a new StyledMapType object, passing it an array of styles,
            // and the name to be displayed on the map type control.
            var styledMapType = new google.maps.StyledMapType(
                    [
                        {
                            "featureType": "water",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#65ac4c"
                                }
                            ]
                        }
                    ],
                    {name: 'Styled Map'});

            // Create a map object, and include the MapTypeId to add
            // to the map type control.

            var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: mapLatitute, lng: mapLongitute},
                zoom: mapZoom,
                scrollwheel: false,
                icon: mapIcon,
                mapTypeControlOptions: {
                    mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                        'styled_map']
                }

            });
            var myLatlng = new google.maps.LatLng(mapLatitute, mapLongitute);
            var marker = new google.maps.Marker({
                position: myLatlng,
                icon: mapIcon,
                title: "Hello World!"
            });
            marker.setMap(map);

            //Associate the styled map with the MapTypeId and set it to display.
            map.mapTypes.set('styled_map', styledMapType);
            map.setMapTypeId('styled_map');
        }

    });    

})(jQuery)