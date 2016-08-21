'use strict'

$(document).ready(function(){
  console.log('/public/js/script.js is loaded')

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
            $('<li />', {html: '<a href="' + content.url + '" target="_blank"><strong class="story_title">'+ content.title +'</strong></a><br><span class="story_desc">' + content.description + '</span><button class="addNews">Add</button>'})
          );
        });
      },
      error: function (error) {
        $("#newsapi_column").html('<p>Error: ' + error + '</p>');
      }
    });
  });

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
            $('<li />', {html: '<a href="' + content.url + '" target="_blank"><strong><span class="story_title">'+ content.title +'</span></strong></a><br><span class="story_desc">' + content.description + '</span><button class="addNews">Add</button>'}).attr('class', 'newsRow')
          );
        });
      },
      error: function () {
        $("#newsapi_column").html('<p>Error: ' + error + '</p>');
      }
    });
  });

  function addNewsStory(e){
    console.log("CLICKED on addNews");
    var $target=$(e.target);
    var $li = $target.closest('.newsRow');
    console.log('li = ', $li);
    var $title = $li.find('.story_title').eq(0).text();
    var $desc = $li.children('.story_desc').eq(0).text();
    console.log('title = ', $title);
    console.log('desc = ', $desc);
    $.ajax({
      url: '/addNews',
      dataType: 'json',
      data: {story_title: $title, story_desc: $desc},
      type: 'POST',
      success: function (data) {
            $('#snews_column ul').append(
            $('<li />', { html: `<a href="/stories/${data.id}">${$title}</a><br>${$desc}` }
            ))
      },
      // error: function (error) {
      //   $("#newsapi_column").html('<p>Error: ' + error + '</p>');
      //   console.log('error from script.js ', error)
      // }
    });
  }

  $('#newsapi_column').on('click', '.addNews', addNewsStory);

  function deleteNewsStory(e){
    console.log("CLICKED on deleteNews");
    var $target=$(e.target);
    var $li = $target.closest('.newsRow');
    console.log('li = ', $li);
    var story_id = $target.attr('data-story-id')
    $.ajax({
      url: '/stories/' + story_id,
      dataType: 'json',
      data: { story_id: story_id },
      type: 'DELETE',
      success: function(data) {
        window.location=data;
      },
      error: function(error) {
        console.log(error);
      }
    });
  }

  $('#snews_column').on('click', '.deleteNews', deleteNewsStory);

});

// http://stackoverflow.com/questions/8978328/get-the-value-of-a-dropdown-in-jquery
// fix delete error
// http://stackoverflow.com/questions/25351870/express-response-takes-request-method
