function handleToggle(targetIndex) {
   for (let i = 1; i <= 10; i++) {
      const selector = `.mean${i}`;
      if (i === targetIndex) {
         $(selector).slideToggle();
      } else {
         $(selector).slideUp();
      }
   }
}


$(document).ready(function () {
   for (let i = 1; i <= 10; i++) {
      $(`.chek${i}`).click(function () {
         handleToggle(i);
      });
   }
});
