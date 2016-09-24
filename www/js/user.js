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

    // Restore user name.
    var name = DataStore.getUserName();
    if (name) {
      $('#user_name_input>input').val(name);
    }

    // Restore user location.
    var location = DataStore.getUserLocation();
    if (location) {
      $('#location_input>input').val(location);
    }

    // Restore user image.
    var image = DataStore.getUserImage();
    if (image) {
      $('.user_image>img').attr('src', image);
    }
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

    $('.user_image').on('click', function() {
      self.onSelectImage();
    });

    var self = this;
    $('.actions>.save').on('click', function() {
      self.onSave();
    });
  }

  /**
   * Call when tap image.
   */
  user.onSelectImage = function() {
    navigator.camera.getPicture(
      function(imageData) {
        //base64 = 'data:image/jpeg;base64,' + imageData;
        $('.user_image>img').attr('src', imageData);
        DataStore.setUserImage(imageData);

      }, function(message) {
        Common.alert('Select image failed. ' + message);
      }, {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      });
  }

  /**
   * Validate input values.
   *
   * @return {Boolean} False if invalid.
   */
  user.validate = function() {
    var name = $('#user_name_input>input').val();
    if (!name) {
      if (!$('#user_name_input').hasClass('error')) {
        $('#user_name_input').addClass('error');
      }
      return false;
    }
    var location = $('#location_input>input').val();
    if (!location) {
      if (!$('#location_input').hasClass('error')) {
        $('#location_input').addClass('error');
      }
      return false;
    }
    return true;
  }

  /**
   * Call when push save button.
   */
  user.onSave = function() {
    if (!this.validate()) {
      Common.alert('Save error.')
      return;
    }
    // Set user name to localStorage.
    DataStore.setUserName($('#user_name_input>input').val());
    // Set user location to localStorage.
    DataStore.setUserLocation($('#location_input>input').val());

    Common.alert('Save success.')
  }

}(this, jQuery));

// Do initialize.
User.initialize();
