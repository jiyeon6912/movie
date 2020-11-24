var cols = document.querySelectorAll("#cols .btn");

for (var i = 0; i < cols.length; i++) {
  cols[i].addEventListener("click", click);
}
// cols[1].style.color = "red";

function click(e) {
  // window.alert(this.innerHTML);
  console.log('클릭!')
  console.log(this)
  console.log(i)
}

//--------------------------------

// var cols = document.querySelectorAll(".list_item .item");

// for (var i = 0; i < cols.length; i++) {
//   cols[i].addEventListener("click", click);
// }
// cols[1].style.color = "red";

// function click(e) {
//   window.alert(this.innerHTML);
// }