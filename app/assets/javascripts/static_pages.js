$(document).ready(function(){
  var add_color = function(){
    var box = $('<div>');
    box.addClass('box');

    var color = $('#color').val();
    box.css('background-color', color);

    box.appendTo('#color_divs')

    $('#color').val('').focus();
  };

  var set_color = function(){
    var box = $(this);
    var color = box.css('background-color');

    $('#selected_color').css('background-color', color)
  };


  var paint = function(){
    var paint_box = $(this);
    var color = $('#selected_color').css('background-color');

    paint_box.css('background-color', color);
  };

  var add_img = function(){
    var input_string = $("#img_url").val();
    var box = $('<div>');
    box.addClass('box');

          box.css('background-image',  "url(" + input_string + ")");
          box.css('background-size', "50px");
          box.appendTo("#image_divs");
          $("#canvas").css('background-image', "url(" + input_string + ")");
          $("#canvas").css('background-size', "400px 125px");
          $("#img_url").val('');

  };

  var set_image = function(){
    var box = $(this);
    var img_url = box.css('background-image');
    
    $("#canvas").css('background-image', img_url);
    $("#canvas").css('background-size', "400px 125px"); 

  }

  $('#add_color').on('click', add_color);
  $('#color_divs').on('click', '.box', set_color);
  $('.paint_box').on('mouseover', paint);
  $('#add_img').on('click', add_img);
  $('#image_divs').on('click', '.box', set_image);
});