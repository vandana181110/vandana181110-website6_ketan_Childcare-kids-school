// index page testimonial section
var sliderMain = document.querySelector('.slider-main');
let item = sliderMain.getElementsByClassName('item');

function next(){
   sliderMain.append(item[0]);
}
function prev(){
   sliderMain.prepend(item[item.length-1]); 
}
setInterval(
   next,3000);


function gohome()
{
window.location="../index.html";
}

// about page partner setion
