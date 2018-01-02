window.addEventListener('load', function() {
 // ----------------------> Funcionalidad Menú <-----------------------
 var openAnimatedMenu = document.getElementById('open-animated-menu');
 var closeAnimatedMenu = document.getElementById('close-animated-menu');

 openAnimatedMenu.addEventListener('click', openMenu);
 function openMenu() {
   document.getElementById('animated-menu').style.width = '250px';
   var lastDay = document.getElementById('last-day');
   var lastHour = document.getElementById('last-hour');
   lastDay.textContent = moment().format('MMMM Do YYYY');
   lastHour.textContent = moment().format('h:mm:ss a');
 }

 closeAnimatedMenu.addEventListener('click', closeMenu);
 function closeMenu() {
   document.getElementById('animated-menu').style.width = '0';
 }


}