/**
 * Main javascript object.
 * @type {Object}
 */

var Index = {

  initialize: function() {
    this.bindEvents();
    this.adjust();
  },

  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  onDeviceReady: function() {

    var div = document.getElementById("map_canvas");
    map = plugin.google.maps.Map.getMap(div);
  },

  adjust: function() {
    // Set grid height.
    var h = $('#card_board').height();
    $('#card_board>.grid').height(h);

    // Set card image height.
    h = $('.column.card').height();
    var imgHeight = h - $('.extra.content').innerHeight();
    $('.ui.card>.image').height(imgHeight);
  }
};

Index.initialize();
