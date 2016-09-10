/**
 * Main javascript object.
 * @type {Object}
 */

;(function(global, $) {
  'use strict';

  global.User = {

  }

  var user = global.User;

  /**
   * Initialize.
   */
  user.initialize = function() {
    this.bindEvents();
  }

  /**
   * Bind events.
   */
  user.bindEvents = function() {
    $('.menu .arrow').on('click', function() {
      location.href = 'index.html';
    });
    
    $(function() {
      FastClick.attach(document.body);
    });
  }

}(this, jQuery));

// Do initialize.
User.initialize();
