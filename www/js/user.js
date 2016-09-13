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
    $(function() {
      FastClick.attach(document.body);
    });

    $('.menu .arrow').on('click', function() {
      location.href = 'index.html';
    });

    $('.actions>.cancel').on('click', function() {
      location.href = 'index.html';
    });

    var self = this;
    $('.actions>.save').on('click', function() {
      self.onSave();
    });
  }

  /**
   * Validate input values.
   *
   * @return {Boolean} False if invalid.
   */
  user.validate = function() {
    var name = $('#user_name_input').val();
    if (!name) {
      return false;
    }
    var location = $('#location_input').val();
    if (!location) {
      return false;
    }
    return true;
  }

  /**
   * Call when push save button.
   */
  user.onSave = function() {
    if (!this.validate()) {
      alert('Save error.')
      return;
    }
    // Set user name to localStorage.
    DataStore.setUserName($('#user_name_input').val());

    // Set user location to localStorage.
    DataStore.setUserLocation($('#location_input').val());

    alert('Save success.')
  }

}(this, jQuery));

// Do initialize.
User.initialize();
