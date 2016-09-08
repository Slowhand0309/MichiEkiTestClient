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
    this.adjust();
  }

  /**
   * Bind events.
   */
  index.bindEvents = function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);

    // Modal dialog.
    $('.ui.card').on('click', function() {
      location.href = 'user.html';
    });
  }

  /**
   * Call when device ready state.
   */
  index.onDeviceReady = function() {

    this.mapObj = new Map();
    this.mapObj.moveMyLocation();
  }

  /**
   * Adjust size.
   */
  index.adjust = function() {
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
