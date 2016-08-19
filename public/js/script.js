'use strict'

$(document).ready(function(){
  console.log('/public/js/script.js is loaded')

  $('#newsSource').on('click', function(){
    var newsSourceChoice = $('#newsSourceDrop option:selected').text();
    $('#newsapi_column ul').empty();
    $.ajax({
      url: '/key/newsSourceChoice',
      dataType: 'json',
      data: {newsSourceChoice: newsSourceChoice},
      success: function (data) {
        var results = data.articles;
        $(results).each(function(index) {
          var content = results[index];
            $('#newsapi_column ul').append(
            $('<li />', {html: '<a href="' + content.url + '" target="_blank"><strong>'+ content.title +'</a></strong><br>' + content.description + ' <button>Add</button>'})
          );
        });
      },
      error: function () {
        $("#newsapi_column").html('<p>Error: ' + error + '</p>');
      }
    });
  });
  $('#newsCategory').on('click', function(){
    var categoryChoice = $('#categoryDrop option:selected').text();
    $('#newsapi_column ul').empty();
    $.ajax({
      url: '/key/categoryChoice',
      dataType: 'json',
      data: {categoryChoice: categoryChoice},
      success: function (data) {
        var results = data.articles;
        $(results).each(function(index) {
          var content = results[index];
            $('#newsapi_column ul').append(
            $('<li />', {html: '<a href="' + content.url + '" target="_blank"><strong>'+ content.title +'</a></strong><br>' + content.description + ' <button>Add</button>'})
          );
        });
      },
      error: function () {
        $("#newsapi_column").html('<p>Error: ' + error + '</p>');
      }
    });
  });

});

// http://stackoverflow.com/questions/8978328/get-the-value-of-a-dropdown-in-jquery
