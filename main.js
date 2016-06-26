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
      Main.get('http://localhost:9292/api/info',
        function(data) {
          $('#info_msg .list .version span').text(data.version);
          $('#info_msg .list .methods span').text(data.methods.join(','));
          $('#info_msg .list .link a').text(data.link);
        }
      );
    });

    // Ping button.
    $('#ping').bind('click', function() {
      console.log("click [ping]");
      var url = 'http://localhost:9292/api/ping';
      var echo = $('#ping_echo input').val();
      if (echo != '') {
        url += '?echo=' + echo;
      }
      Main.get(url, function(data) {
        $('#ping_msg p').text(data.ping);
      });
    });
  },

  /**
   * Get json data.
   */
  get: function(url, onSuccess) {

    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',
      success: function(data){
        console.log(data);
        onSuccess(data);
      }
    });
  }
};

Main.initialize();
