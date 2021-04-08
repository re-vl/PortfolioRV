 let direction = 1, // +1 or -1
      cursor = 0,
      number = 0,
      timeout,
      i = 0;

   for (i = 0; i <= 10; ) {
      i += direction;
      if (i >= 10 && direction == 1) {
         direction = -1;
      } else if (i <= 0 && direction == -1) {
         direction = 1;
      }
      console.log(i);
      task(i);
   }
   function task(i) {
      setTimeout(function () {
         el0.innerHTML = source0.substring(0, i);
      }, 100 * i);
   }