/**
 * main.js
 *
 */

var Main = {

  /**
   * Initialize main.
   */
  initialize: function() {
    this.bindEvent();
  },

  /**
   * Bind button click event.
   */
  bindEvent: function() {
    // Info button.
    $('#info').bind('click', function() {
      console.log("click [info]");
      Main.get('http://localhost:9292/api/info');
    });

    // Ping button.
    $('#ping').bind('click', function() {
      console.log("click [ping]");
      Main.get('http://localhost:9292/api/ping');
    });
  },

  /**
   * Get json data.
   */
  get: function(url) {

    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',
      success: function(data){
        var jsonData = $.parseJSON(data);
        console.table(jsonData);
      }
    });
  }
};

Main.initialize();
