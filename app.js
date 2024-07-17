 let hamburger = document.getElementById("hamburger");
 hamburger.addEventListener('click',showLinks);
 function showLinks(){
   let dropdown = document.getElementById("dropdown");
   if(dropdown.classList.contains("hidden")){
     dropdown.classList.remove("hidden")
   }
   else{
     dropdown.classList.add("hidden");
   }
 }