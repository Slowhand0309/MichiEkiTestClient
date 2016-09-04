/**
 * Main javascript object.
 * @type {Object}
 */

var Index = {

  initialize: function() {
    this.bindEvents();
  },

  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  onDeviceReady: function() {

    var div = document.getElementById("map_canvas");
    map = plugin.google.maps.Map.getMap(div);
  }
};

Index.initialize();
