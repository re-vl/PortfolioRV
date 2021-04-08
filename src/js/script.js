window.addEventListener("DOMContentLoaded", () => {
   const menu = document.querySelector(".nav");
   //появление меню через 300рх
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

   const t = ["Меня зовут Владимир.  ", "Я web-разработчик.  "];

   function typeText() {
      let line = 0,
         count = 0,
         direct = 1,
         dalay = 400,
         out = "",
         htmlOut = document.querySelector(".out");

      function typeLine() {
         //рисуем строку
         setTimeout(() => {
            out = t[line].slice(0, count);
            htmlOut.innerHTML = out + "<span>|</span>";
            count += direct;

            if (count >= t[line].length) {
               direct = -1;
               dalay = dalay / 4;
            }
            if (count == 0 && direct == -1) {
               direct = 1;
               dalay = dalay * 4;
               if (line == 0) {
                  line = 1;
               } else if (line == 1) {
                  line = 0;
               }
            }
            typeLine();
         }, getRandomInt(getRandomInt(dalay * 3.0)));
      }
      typeLine();
   }

   function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
   }

   typeText();
});
