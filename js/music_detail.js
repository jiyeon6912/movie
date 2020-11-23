const youtube = document.getElementById('youtube')
const title = document.getElementById('title')
const music = document.getElementById('music')
const  director = document.getElementById('director')
const musicBox = document.querySelector('.music_detail_box')


const items = musicList

console.log(musicList)
console.log(musicList[0].title)
console.log(musicBox)
// console.log(current)



// function showList(index) {
 
//   const item = musicList[index]

//   let newItem = ''
//   items.map(item => {
//     newItem += `<div class="item" data-item=${item.dataitem}>
//             <a href="#"><img id="poster" src=${item.poster} alt="언어의정원"></a>
//             <p id="title">${item.title}</p>
//             <p id="music"><span>${item.music}</span></p>
//           </div>`

//           listItem.innerHTML = newItem
//   })
// }


// function init() {
// showList()
// }

// init()