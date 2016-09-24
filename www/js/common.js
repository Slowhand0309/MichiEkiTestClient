/**
 * Common object.
 */

;(function(global, $) {
  'use strict';

  global.Common = {

  }

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
  }

}(this, jQuery));
