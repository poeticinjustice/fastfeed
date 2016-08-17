'use strict'

$(document).ready(function(){
  console.log('/public/js/script.js is loaded')

  $('#newsButton').on('click', function(){
    $('#newsapi_column ul').empty();
    $.ajax({
      url: '/key/newsapi',
      dataType: 'json',
      success: function (data) {
        var results = data.articles;
        $(results).each(function(index) {
          var content = results[index];
            $('#newsapi_column ul').append(
            $('<li />', {html: '<a href="' + content.url + '" target="_blank">'+ content.title +'</a>'})
          );
        });
      },
      error: function () {
        $("#newsapi_column").html('<p>Error: ' + error + '</p>');
      }
    });
  });


});
