/**
 * API object.
 * michieki/api.js
 */

API = (function() {
  'use strict';

  var BASE_URL = 'http://localhost:9292/api';

  /**
   * Constructor.
   *
   * @param  {String} url
   */
  var api = function(url) {
    this.baseUrl = url || BASE_URL;
  }

  /**
   * Ping to server.
   *
   * @param  {Callback} onSuccess
   * @param  {Callback} onError
   */
  api.prototype.ping = function(onSuccess, onError) {

    var url = this.baseUrl + '/ping';
    // Get response.
    Common.getJson(url, null, onSuccess, onError);
  }

  /**
   * Get information.
   *
   * @param  {Callback} onSuccess
   * @param  {Callback} onError
   */
  api.prototype.info = function(onSuccess, onError) {

    var url = this.baseUrl + '/info';
    // Get response.
    Common.getJson(url, null, onSuccess, onError);
  }

  /**
   * Search road stations.
   *
   * @param  {Number} lat
   * @param  {Number} lng
   * @param  {Number} scope
   * @param  {Callback} onSuccess
   * @param  {Callback} onError
   */
  api.prototype.search = function(lat, lng, scope, onSuccess, onError) {

    var url = this.baseUrl + '/search';
    var s = scope || 30; // Default 30km.
    var params = {
      lat: lat,
      lng: lng,
      scope: s
    };
    // Get response.
    Common.getJson(url, params, onSuccess, onError);
  }

  /**
   * Get road station list.
   *
   * @param  {String} area
   * @param  {String} name
   * @param  {Callback} onSuccess
   * @param  {Callback} onError
   */
  api.prototype.list = function(area, name, onSuccess, onError) {

    var url = this.baseUrl + '/list';
    var params = {}
    if (area) {
      params['area'] = area;
    }

    if (name) {
      params['name'] = name;
    }
    // Get response.
    Common.getJson(url, params, onSuccess, onError);
  }

  return api;
}());
