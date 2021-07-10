// Getting Required DOM Elements
// taskbar = document.querySelector(".taskbar");
window_icon = document.querySelector(".window_icon");
startmenu = document.querySelector(".startmenu");
explorer = document.querySelector(".explorer");
explorer_window = document.querySelector(".explorer-window");
close_btn = document.querySelector(".close-btn");
maximize_btn = document.querySelector(".maximize-btn");

// Toggle the StartMenu
window_icon.addEventListener("click", ()=>{
   if (startmenu.style.bottom == "-655px"){
      startmenu.style.bottom = "50px";
   }
   else{
      startmenu.style.bottom = "-655px";
   }
})

// Open and Close the explorer window
explorer.addEventListener("click", ()=>{
   if (explorer_window.style.top == "100%"){
      explorer_window.style.top = "10%";
   }

   else{
      explorer_window.style.top = "100%";
   }
})

// Close the explorer window
const close_explorer = () =>{

   explorer_window.style.top = "100%";
}

// Minimize and Maximize the explorer window
const maximize_window = () =>{
   explorer_window.style.width = "97%";
   explorer_window.style.height = "93vh";
   explorer_window.style.top = "0";
   explorer_window.style.marginLeft = "2rem"
   explorer_window.style.marginRight = "2rem"
   // explorer_window.style.marginBottom = "2px"
   maximize_btn.innerHTML = '<img src="media/restore_btn.png" alt="">';

   if (maximize_btn.innerHTML == '<img src="media/restore_btn.png" alt="">'){
      
   }
}
