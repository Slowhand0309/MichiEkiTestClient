/**
 * DataStore javascript object.
 * @type {Object}
 */

;(function(global, $) {
'use strict';

  global.DataStore = {
    USER_NAME: 'user_name',
    USER_LOCATION: 'user_location',
    USER_IMAGE: 'user_image'
  };

  var store = global.DataStore;

  /**
   * Get user name.
   *
   * @return {String} name
   */
  store.getUserName = function() {
    return this.getValue(this.USER_NAME, '');
  }

  /**
   * Set user name.
   *
   * @param {String} name
   */
  store.setUserName = function(name) {
    localStorage.setItem(this.USER_NAME ,name);
  }

  /**
   * Get user location.
   *
   * @return {Object} location
   */
  store.getUserLocation = function() {
    return this.getValue(this.USER_LOCATION, null);
  }

  /**
   * Set user location.
   *
   * @param {Object} location
   */
  store.setUserLocation = function(location) {
    localStorage.setItem(this.USER_LOCATION ,location);
  }

  /**
   * Get value with key.
   *
   * @param  {String} key
   * @param  {Object} defaultValue
   * @return {Object} value
   */
  store.getValue = function(key, defaultValue) {
    var result = localStorage.getItem(key);
    return result || defaultValue;
  }

}(this, jQuery));
