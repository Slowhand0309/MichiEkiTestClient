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
  }

  /**
   * Call when device ready state.
   */
  index.onDeviceReady = function() {

    $(function() {
      FastClick.attach(document.body);
    });

    var self = this;
    self.mapObj = new Map();
    self.mapObj.moveMyLocation();

    // User edit page.
    $('.ui.card').on('click', function() {
      self.mapObj.remove();
      location.href = 'user.html';
    });

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
