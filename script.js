var i = 0;
window.onload= function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 75) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

/*Modal creation*/
var modal = document.getElementsByClassName("overlay")[0]
var modal_small = document.getElementsByClassName("overlay")[1]

var button = document.getElementsByClassName("project-link")
var close_button = document.getElementsByClassName("close-button")[0]
var finalButton = document.getElementById("final")
var dollar0 = document.getElementById("0-dollars")
var dollar25 = document.getElementById("25-dollars")
var dollar75 = document.getElementById("75-dollars")
var dollar200 = document.getElementById("200-dollars")
var reward25 = document.getElementsByClassName("reward-enter")[0]
var reward75 = document.getElementsByClassName("reward-enter")[1]
var reward200 = document.getElementsByClassName("reward-enter")[2]

function showModal(){
  modal.style.display= "block";
}
function closeModal(){
  modal.style.display= "none";
}
function setSmallmodal(){
  modal.style.display= "none";
  modal_small.style.display="block";
}
function removeSmallmodal(){
  modal_small.style.display="none";
}
function selectedPledge(){
    if (dollar25.checked === true){
      dollar25.parentElement.parentElement.style.borderColor = "hsl(176, 50%, 47%)";
		reward25.classList.add("active-25")
	}
	if (dollar75.checked === true){
		dollar75.parentElement.parentElement.style.borderColor = "hsl(176, 50%, 47%)";
		reward75.classList.add("active-75")
	}
 	if (dollar0.checked === true){
		dollar0.parentElement.style.borderColor = "hsl(176, 50%, 47%)";
	}
	if (dollar200.checked === true){
		dollar200.parentElement.parentElement.style.borderColor = "hsl(176, 50%, 47%)";
		reward200.classList.add("active-200")
	}
	if(dollar25.checked === false){
		dollar25.parentElement.parentElement.style.borderColor = "hsl(0, 0%, 48%)";
		reward25.classList.remove("active-25")
	}
	if(dollar0.checked === false){
		dollar0.parentElement.style.borderColor = "hsl(0, 0%, 48%)";
	}
	if(dollar75.checked === false){
		dollar75.parentElement.parentElement.style.borderColor = "hsl(0, 0%, 48%)";
		reward75.classList.remove("active-75")
	}
	if(dollar200.checked === false){
		dollar200.parentElement.parentElement.style.borderColor = "hsl(0, 0%, 48%)";
		reward200.classList.remove("active-200")
	}
}
var bookmark = document.getElementsByClassName("bookmark")[0]
function changetoBookmark(){
	//console.log(bookmark.children[1])
	bookmark.children[1].innerHTML = "Bookmarked"
	bookmark.classList.toggle("active")
}
var navbar = document.getElementsByClassName("navbar-small")[0]
var menu = document.getElementsByClassName("menu")[0]
function showMenu(){
navbar.classList.toggle("present")
menu.classList.toggle("show")
}