window.addEventListener("DOMContentLoaded", () => {
   const menu = document.querySelector(".nav");

   document.onscroll = function () {
      if (document.documentElement.scrollTop > 300) {
         menu.classList.remove("moveup");
         menu.classList.add("movedowd");
         menu.classList.remove("hide");
      } else {
         menu.classList.remove("movedowd");
         menu.classList.add("moveup");
      }
   };

   const text = document.getElementById("typed"),
      txt = "Речмедилов Владимир",
      speed1 = 200,
      speed2 = 30;
   let i = 0,
      backspace = false;

   function typeWriter() {
      text.innerHTML = txt.substr(0, i);

      if (i > txt.length) {
         backspace = true;
      }
      if (i == 0) {
         backspace = false;
      }
      if (!backspace) {
         i++;
         setTimeout(typeWriter, speed1);
      } else {
         i--;
         setTimeout(typeWriter, speed2);
      }
   }

   typeWriter();
});
