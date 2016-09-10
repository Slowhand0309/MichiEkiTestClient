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
    // Get map object.
    var div = document.getElementById("map_canvas");
    this.map = plugin.google.maps.Map.getMap(div);

    // Set configuration.
    this.map.setMyLocationEnabled(true);
  };

  /**
   * Move my location.
   */
  _map.prototype.moveMyLocation = function() {
    var self = this;
    if (self.map) {
      self.map.getMyLocation(function(location) {

        self.map.addMarker({
          'position': location.latLng
        });

        self.map.animateCamera({
          'target': location.latLng,
          'tilt': 60,
          'zoom': 18,
          'bearing': 140
        });
      }, function(msg) {
        alert("error: " + msg);
      });
    }
  };

  /**
   * Remove map.
   */
  _map.prototype.remove = function() {
    this.map.remove();
  }

  return _map;
}());
