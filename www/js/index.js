/**
 * Main javascript object.
 * @type {Object}
 */

;(function(global, $) {
  'use strict';

  global.Index = {
    mapObj: null,
  }

  var index = global.Index;

  /**
   * Initialize.
   */
  index.initialize = function() {
    this.bindEvents();
    this.adjustSize();
  }

  /**
   * Bind events.
   */
  index.bindEvents = function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  }

  /**
   * Call when device ready state.
   */
  index.onDeviceReady = function() {
    $(function() {
      FastClick.attach(document.body);
    });

    // User edit page.
    $('.ui.card').on('click', function() {
      self.mapObj.remove();
      location.href = 'user.html';
    });

    index.setUserInformation();

    var self = this;
    self.mapObj = new Map();
    self.mapObj.moveMyLocation(function(marker) {
      self.mapObj.addRoadStationMarker();
    });
    

  }

  /**
   * Set user information.
   */
  index.setUserInformation = function() {
    // Set user name.
    var name = DataStore.getUserName();
    if (name) {
      $('#user_name').text(name);
    }

    // Set user location.
    var location = DataStore.getUserLocation();
    if (location) {
      $('#user_location').text(location);
    }

    // Set user image.
    var image = DataStore.getUserImage();
    if (image) {
      $('.ui.card>.image>img').attr('src', image);
    }
  }

  /**
   * Adjust size and restore user information.
   */
  index.adjustSize = function() {
    // Set grid height.
    var h = $('#card_board').height();
    $('#card_board>.grid').height(h);

    // Set card image height.
    h = $('.column.card').height();
    var imgHeight = h - $('.extra.content').innerHeight();
    $('.ui.card>.image').height(imgHeight);
  }

}(this, jQuery));

// Do initialize.
Index.initialize();
