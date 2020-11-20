const  content = document.querySelectorAll('.content')
console.log(content)

for(let i=0; i < content.length; i++) {
  content[i].addEventListener('click',function() {  //content는 여러개의 div이므로 배열형태를 가짐.
    console.log('hahaha')
    console.log(this) //this는 클릭을 한 content div를 가리킨다.

    this.classList.toggle('active') //this는 일반형,표준형함수에서만 작동함. arrow(축약형)함수일때는 작동안함.
  })
}


// var title = $('.content h2')
// console.log(title)
// title.eq(0).addClass('active').next().slideDown() //초기화 accordion 박스가 열린상태에서 시작
// title.click(function(){
//   var content = $(this).next()
//   console.log(content)

//   $(this).parent('.content').find(div).not(text).slideUp()
//   text.slideToggle()

//   if($(this).hasClass('active')) {
//     $(this).removeClass('active')
//   } else {
//     $(this).addClass('active')
//   }
// })