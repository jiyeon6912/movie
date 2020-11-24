const poster = document.getElementById('poster')
const title = document.getElementById('title')
const music = document.getElementById('music')
const listItem = document.querySelector('.list_item')

const items = musicList

// console.log(musicList)
// console.log(musicList[0].title)


function showList(index) {
 
  // const item = musicList[index]

  let newItem = ''
  items.map(item => {
    newItem += `<div class="item" data-item=${item.dataitem}>
            <a href="#"><img id="poster" src=${item.poster} alt="언어의정원"></a>
            <p id="title">${item.title}</p>
            <p id="music"><span>${item.music}</span></p>
          </div>`

          listItem.innerHTML = newItem
  })
}
//----------------------------------------------
console.log('시작!')
console.log(items)
//  items.addEventListener('click',function(){
//    console.log('클릭!')
//  })
// const divs = document.querySelector('.list_item')

// divs.addEventListener('click',function(){
//   console.log('클릭!')
//   console.log(this)
// })

// listItem.forEach(el => el.addEventListener('click', event => {
//   console.log('클릭!')
//   console.log(event.target);
// }));
// const detailBox = document.querySelector('.music_detail_box')

// let detail = ''
// musicList.map(item => {
//   detail += `<div class="youtube_box">
//   <iframe src="${item.youbube}" frameborder="0"></iframe>
//   <h4><span>영화제목: </span>${item.title}</h4>
//   <p><span>영화음악: </span>${item.music}</p>
// </div>

// <div class="content">
//   <p><span>영화감독: </span>${item.director}</p>
//   <p>작품정보:</p>
//   <p>${item.text}</p>
// </div>`
 
// detailBox.innerHTML = detail

// })


//-----------------------------------------------

function init() {
showList()
}

init()

//----------------------------