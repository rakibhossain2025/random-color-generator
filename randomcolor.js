// function ramdom(){
//   const r = parseInt(200 + Math.random() * 56);
//   const g = parseInt(200 + Math.random() * 56);
//   const b = parseInt(200 + Math.random() * 56);
//   console.log(`${b},${g}, ${r}`)
//   return `${b},${g}, ${r}`
// }
//   document.getElementById("theme-change").addEventListener("click", function (){
//     document.body.style.backgroundColor = ramdom()
//   })
// document.getElementById("theme-change").addEventListener("click", function () {
//   function ramdom() {
//     const r = parseInt(200 + Math.random() * 56);
//     const g = parseInt(200 + Math.random() * 56);
//     const b = parseInt(200 + Math.random() * 56);
//     return `${b},${g}, ${r}`;
//   }
//   document.body.style.backgroundColor= ramdom()
// });
document.getElementById("theme-change").addEventListener("click", function () {
  function getRandomLightColor() {
    const r = Math.floor(200 + Math.random() * 56);
    const g = Math.floor(200 + Math.random() * 56);
    const b = Math.floor(200 + Math.random() * 56);
    return `rgb(${r}, ${g}, ${b})`;
  }

  document.body.style.backgroundColor = getRandomLightColor();
});


