/**
 * Map class.
 * @type {Object}
 */

Map = (function() {
  'use strict';

  /**
   * Constructor.
   */
  var _map = function() {
    // Create api object.
    this.api = new API();
    // Get map object.
    var div = document.getElementById("map_canvas");
    this.map = plugin.google.maps.Map.getMap(div);

    // Set configuration.
    this.map.setMyLocationEnabled(true);

    // Bind event.
    this.map.addEventListener(
      plugin.google.maps.event.MAP_READY, this.moveMyLocation);
  };

  /**
   * Move my location.
   */
  _map.prototype.moveMyLocation = function(onSuccess) {

    var self = this;
    self.onSuccess = onSuccess;
    if (self.map) {
      self.map.getMyLocation(function(location) {
        // Set location.
        self.location = location;
        /*
          location structure
          {
            "status":true,
            "speed":-1,
            "time":XXXXXXXX.XXXXXX,
            "hashCode":XXXXXXXXXXXX,
            "latLng":{
              "lat":XX.XXXXXX,
              "lng":-XXXX.XXXXX
            },
            "accuracy":XX,
            "altitude":X}
         */


        self.map.animateCamera({
          'target': location.latLng,
          'tilt': 60,
          'zoom': 18,
          'bearing': 140
        }, function() {

          self.map.addMarker({
            'position': location.latLng,
            'animation': plugin.google.maps.Animation.BOUNCE
          }, function(marker) {
            if (self.onSuccess) {
              self.isConnected(function() {
                // Server connected.
                self.onSuccess(marker);
              });
            }
          });

        });
      }, function(msg) {
        alert("error: " + msg);
      });
    }
  };

  /**
   * Check server connection.
   *
   * @param  {Callback}  onSuccess
   */
  _map.prototype.isConnected = function(onSuccess) {
    // Check michieki server.
    this.api.ping(
      function() {
      // On Success.
      onSuccess();
    }, function() {
      // On Error.
      Common.alert("Not connected MichiEki server!!");
    });
  };

  /**
   * Add road station marker.
   */
  _map.prototype.addRoadStationMarker = function() {
    var self = this;
    this.api.search(
      this.location.latLng.lat,
      this.location.latLng.lng,
      null,
      function(data) {
        self.markRoadStationList(data);
      },
      function(msg) {
        Common.alert('Search error', msg);
      }
    );
  };

  /**
   * Mark road station on map.
   *
   * @param  {Array} data Road station list.
   */
  _map.prototype.markRoadStationList = function(data) {
    var self = this;
    $.each(data, function(i, v) {
      console.log("add road station: " + v.name);

      var latLng = { 'lat': v.lat, 'lng': v.lng };
      self.map.addMarker({
        'position': latLng,
        'animation': plugin.google.maps.Animation.BOUNCE
      }, function(marker) {
          marker.showInfoWindow();
      });
    });
  };

  /**
   * Remove map.
   */
  _map.prototype.remove = function() {
    this.map.remove();
  };

  return _map;
}());
