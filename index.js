
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
// for slide show to activate
let active=0; //records current active image
let slideShow=document.getElementsByClassName('slideShow');
setInterval(imageSlider, 2000);
for (let index=0; index < slideShow.length; index++) {    
    slideShow[index].style.display='none'; 
}
// for forst Element
slideShow[0].style.display='block';
function imageSlider(){
    
    for (let index=0; index <slideShow.length; index++) {
        if (active===index) {
            slideShow[active].style.display='block';   
        }  
        else{
            slideShow[index].style.display='none';
        }

    }
    active++;
    if (active==slideShow.length) {
        active=0;
    }
}
