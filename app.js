//1. Change the greeting from "Hello, There!" to "Hello, World!".
document.getElementById("greeting").textContent = "Hello, World!";

//2. Set the background color of each `<li>` to `yellow`.
var listItems = document.querySelectorAll("li");
for(var i = 0; i < listItems.length; i++){
  listItems[i].style.backgroundColor = "yellow"
}

// 3. Create an image tag, set its `src` attribute to `http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif`, and append the to the `#greeting` div.
var helloWorldText = document.getElementById("greeting");
var ralph = document.createElement("img");
ralph.setAttribute('src', 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif');
helloWorldText.appendChild(ralph);

//4. Add the class of `selected` to an `<li>` when it is clicked. Remove it from any other `li`s as well.
function changeSelected(e){
  for(var i = 0; i < listItems.length; i++){
      listItems[i].className = "";
  }
  e.target.className = "selected";
  changePicture(e.target);
}

for(var i = 0; i < listItems.length; i++){
  // listItems[i].onclick = changeSelected
  listItems[i].addEventListener('click', changeSelected);
}


// 5. Change the image to be the most recently clicked food item.
var pictureItems = document.querySelectorAll("img");


function changePicture(target){
  pictureItems[1].setAttribute('src', "./images/" + target.innerHTML + ".jpeg");
}

// 6. When the gray div is moused over, it's removed from the DOM.
var greyBox = document.querySelectorAll("div")[4];
greyBox.addEventListener("mouseover", deleteOnHover);

function deleteOnHover(e) {
  e.target.hidden = true;
}


// 7. When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.
var orangeBox = document.querySelectorAll("div")[5];
orangeBox.addEventListener("mouseover", doubleWidth);

function doubleWidth(e) {
  e.target.style.width = "400px";
}

// 8. When the reset button is clicked - remove the `selected` class from each `<li>` and change the image to `panic.jpeg`.
var resetButton = document.querySelectorAll("input")[0];

function removeSelected(){
  for(var i = 0; i < listItems.length; i++){
      listItems[i].className = "";
  }
}

function changeToPanicPic(target){
  pictureItems[1].setAttribute('src', "./images/panic.jpeg");
}
