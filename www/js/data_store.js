/**
 * DataStore javascript object.
 * @type {Object}
 */
'use strict';

var DataStore = {

  USER_NAME: 'user_name',
  USER_LOCATION: 'user_location',
  USER_IMAGE: 'user_image',

  /**
   * Get user name.
   *
   * @return {String} name
   */
  getUserName: function() {
    return this.getValue(this.USER_NAME, '');
  },

  /**
   * Set user name.
   *
   * @param {String} name
   */
  setUserName: function(name) {
    localStorage.setItem(this.USER_NAME ,name);
  },

  /**
   * Get user location.
   *
   * @return {Object} location
   */
  getUserLocation: function() {
    return this.getValue(this.USER_LOCATION, null);
  },

  /**
   * Set user location.
   *
   * @param {Object} location
   */
  setUserLocation: function(location) {
    localStorage.setItem(this.USER_LOCATION ,location);
  },

  /**
   * Get value with key.
   *
   * @param  {String} key
   * @param  {Object} defaultValue
   * @return {Object} value
   */
  getValue: function(key, defaultValue) {
    var result = localStorage.getItem(key);
    return result || defaultValue;
  }
};
