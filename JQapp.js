//1. Change the greeting from "Hello, There!" to "Hello, World!".
$('#greeting').text('Hello, World!');

// 2. Set the background color of each `<li>` to `yellow`.
$('li').css('background-color', 'yellow');

// 3. Create an image tag, set its `src` attribute to `http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif`, and append the to the `#greeting` div.
$('#greeting').append('<img id="ralph" src="http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif" />')

// 4. Add the class of `selected` to an `<li>` when it is clicked. Remove it from any other `li`s as well.
$('li').click(function(){
  var imageText = $(this).text();
  $('li').removeClass('selected');
  $(this).addClass('selected');
  $('img[alt="beer"]').attr('src', './images/' + imageText + '.jpeg');
})

// 5. Change the image to be the most recently clicked food item.
// Line 12 and 15

// 6. When the gray div is moused over, it's removed from the DOM.
$('#ghosting').mouseover(function(){
  $('#ghosting').hide();
})

// 7. When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.
$('#resize').mouseover(function(){
  $('#resize').css('width', '400px');
})
// 8. When the reset button is clicked - remove the `selected` class from each `<li>` and change the image to `panic.jpeg`.
$('input').click(function(){
  $('li').removeClass('selected');
  $('img[alt="beer"]').attr('src', './images/panic.jpeg')
})

// 9. When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"
$('body').keydown(function(e){
  var keycode = e.keyCode;
  if(keycode > 47 && keycode < 58){
    alert("I HATE NUMBERZZZ!")
  }
})
