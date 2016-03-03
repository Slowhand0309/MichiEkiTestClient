
function doInfo() {
  console.log("info");
  run('http://localhost:9292/api/info');
}

function doPing() {
  console.log("ping");
  run('http://localhost:9292/api/ping');
}

function run(_url) {
  $.ajax({
    type: 'GET',
    url: _url,
    dataType: 'json',
    success: function(data){
      console.log(data);
    }
  });
}
