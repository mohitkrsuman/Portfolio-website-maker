$(document).ready(function() {
   var movementStrength = 25;
   var height = movementStrength / $(window).height();
   var width = movementStrength / $(window).width();
   $("#top-image").mousemove(function(e){
             var pageX = e.pageX - ($(window).width() / 2);
             var pageY = e.pageY - ($(window).height() / 2);
             var newvalueX = width * pageX * -1 - 25;
             var newvalueY = height * pageY * -1 - 50;
             $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
   });
   });

// script for collapsible effect in about page

let coll = document.getElementsByClassName("collapsible");

let i;

// for(i=0; i<coll.length; i++){
//    coll[i].addEventListener('click', function(){
//       this.classList.toggle("active");
//       let content = this.nextElementSibling;
//       if(content.style.display === "block"){
//          content.style.display = "none";
//       }else{
//          content.style.display = "none";
//       }
//    });
//}
for(i =0; i<coll.length; i++){
   coll[i].addEventListener('click', function(){
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if(content.style.maxHeight){
         content.style.maxHeight = null;
      }else{
         content.style.maxHeight = content.scrollHeight + "vw";
      }
   })
}


// For progress bars
let k = 0;
let elemA = document.getElementById("myBarD");
function moveA(){
   if(k==0){
      k=1;
      let widthA = 1;
      var idA = setInterval(frameA, 10);
      function frameA(){
         if (widthA>=80){
            clearInterval(idA);
            k=0;
         }else{
            widthA++;
            elemA.style.width = widthA + "%"; 
         }
      }
   }
}
moveA();

let j = 0;
move();
let elem = document.getElementById("myBarA");

function move(){
   if(j==0){
      j = 1;
      let width = 1;
      var id = setInterval(frame, 10);
      function frame(){
         if(width >= 85){
            clearInterval(id);
            j=0;
         }else{
            width++;
            elem.style.width = width + "%";
         }
      }
      
     
   }
}


// Typewriting effect in resume page
let x=0;
let txt = 'Hope You Liked It 😀.';

function typeWriter(){
   if(x < txt.length){
      document.getElementById("typewriter-text").innerHTML += txt.charAt(x);
      x++;
      setTimeout(typeWriter, 50);
   }
}


// portfolio image filtering


 const filterItem = document.querySelector(".items");
 const filterImg = document.querySelectorAll(".images");

 window.onload = ()=>{ //once window loaded
   filterItem.onclick = (selectedItem)=>{// when user clicked on filterItem div
     if(selectedItem.target.classList.contains("item")){// if user cick element has .item class
        filterItem.querySelector(".actives").classList.remove("actives"); // remove the active class whoch is in the first element
        selectedItem.target.classList.add("actives"); // add that active on the user selected element or item
        let filterName = selectedItem.target.getAttribute("data-name");//getting data name value of the user selected item and storing it in a filtername variable
        filterImg.forEach((images)=>{
           let filterImages = images.getAttribute("data-name"); // getting image data-name value
           // if user selected item data name value is equal to image data name value
           // or user selected item data name value is equal to "all"
           if((filterImages == filterName) || filterName == "all"){
              images.classList.add("show");
           }else{
              images.classList.remove("show");
              images.classList.add("hide");
           }
        });

     }
   }
 }

 // Blog read more logics

 function readMore(){
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("blog-post_cta");

    if(dots.style.display === "none"){
       dots.style.display = "inline";
       btnText.innerHTML = "Read More";
       moreText.style.display = "none";
      //  content.style.maxHeight = null;
    }else{
       dots.style.display = "none";
       btnText.innerHTML = "Read Less";
       moreText.style.display = "inline";     //  content.style.maxHeight = content.scrollHeight + "vw";
      }
 }
