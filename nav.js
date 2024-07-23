document.addEventListener("DOMContentLoaded", () => {
     const body = document.querySelector("body"),
           modeSwitch = body.querySelector(".toggle-switch"),
           modeText = body.querySelector(".mode-text");
 
     modeSwitch.addEventListener("click", () => {
         body.classList.toggle("dark");
 
         if(body.classList.contains("dark")) {
             modeText.innerText = "Dia & Noche";
         } else {
             modeText.innerText = "Noche & Dia";
         }
     });
 });
 