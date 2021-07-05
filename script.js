taskbar = document.querySelector(".taskbar");
startmenu = document.querySelector(".startmenu");

taskbar.addEventListener("click", ()=>{
   // startmenu.classList.toggle("startmenu");
   if (startmenu.style.bottom == "-655px"){
      startmenu.style.bottom = "50px";
   }
   else{
      startmenu.style.bottom = "-655px";
   }
})


