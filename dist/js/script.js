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

   // набор текста

   let el = document.querySelector("#screen");
   let source = el.textContent;
   let length = source.length;
   let direction = 1; // +1 or -1
   let cursor = 0;
   let timeout;

   function makeStep() {
      el.textContent = source.substring(0, cursor);
      if (cursor == length) (direction = -1), (timeout = 2000);
      else if (cursor == 0) (direction = 1), (timeout = 2000);
      else if (direction == 1) timeout = 100 + Math.floor(Math.random() * 100);
      else if (direction == -1) timeout = 50;
      cursor += direction;

      setTimeout(makeStep, timeout);
   }

   makeStep();
});
