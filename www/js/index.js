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
    this.setupCard();
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
   * Adjust size and restore user information.
   */
  index.setupCard = function() {
    // Set grid height.
    var h = $('#card_board').height();
    $('#card_board>.grid').height(h);

    // Set card image height.
    h = $('.column.card').height();
    var imgHeight = h - $('.extra.content').innerHeight();
    $('.ui.card>.image').height(imgHeight);

    var name = DataStore.getUserName();
    $('.extra.content>a>div').text(name);

    // Restore user image.
    var image = DataStore.getUserImage();
    if (image) {
      $('.ui.card>.image>img').attr('src', image);
    }
  }

}(this, jQuery));

// Do initialize.
Index.initialize();
