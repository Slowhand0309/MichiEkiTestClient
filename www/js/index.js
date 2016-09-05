/**
 * Main javascript object.
 * @type {Object}
 */
'use strict';

var Index = {

  mapObj: null,

  /**
   * Initialize.
   */
  initialize: function() {
    this.bindEvents();
    this.adjust();
  },

  /**
   * Bind events.
   */
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  /**
   * Call when device ready state.
   */
  onDeviceReady: function() {

    this.mapObj = new Map();
    this.mapObj.moveMyLocation();
  },

  /**
   * Adjust size.
   */
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
