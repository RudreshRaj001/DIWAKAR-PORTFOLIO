var icon = document.getElementById('icon');
// icon.onclick = function(){
//   document.body.classList.toggle('dark-theme');
//   if(document.body.classList.contains('dark-theme')){
//     icon.src = "ASSETS/sun.png";
//   } else{
//     icon.src = "ASSETS/moon.png";
//   }
// }
icon.onclick = function(){
  document.body.classList.toggle('dark-theme');
  icon.src = document.body.classList.contains('dark-theme') ? "ASSETS/moon.png" : "ASSETS/sun.png";
}
// icon.onclick = function(){
//   document.body.classList.toggle('dark-theme');
//   icon.src = document.body.classList.contains('dark-theme') ? "ASSETS/sun.png" : "ASSETS/moon.png";
// }
