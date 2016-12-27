/**
 * Common object.
 */

;(function(global, $) {
  'use strict';

  global.Common = {

  };

  var common = global.Common;

  /**
   * Show alert dialog.
   *
   * @param  {String} title
   * @param  {String} msg
   */
  common.alert = function(title, msg) {
    if (navigator.notification.alert) {
      navigator.notification.alert(
        msg,
        null,
        title,
        'OK'
      );
    } else {
      window.alert(msg);
    }
  };

  /**
   * GET method.
   *
   * @param  {String} url
   * @param  {Object} params
   * @param  {Callback} onSuccess
   * @param  {Callback} onError
   */
  common.getJson = function(url, params, onSuccess, onError) {
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      data: params,
      success: onSuccess,
      error: onError
    });
  };

  /**
   * POST method.
   *
   * @param  {String} url
   * @param  {Object} params
   * @param  {Callback} onSuccess
   * @param  {Callback} onError
   */
  common.postJson = function(url, params, onSuccess, onError) {
    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: params,
      success: onSuccess,
      error: onError
    });
  };

}(this, jQuery));
