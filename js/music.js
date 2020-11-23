const poster = document.getElementById('poster')
const title = document.getElementById('title')
const music = document.getElementById('music')
const listItem = document.querySelector('.list_item')


const items = musicList

console.log(musicList)
console.log(musicList[0].title)


function showList(index) {
 
  const item = musicList[index]

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
const divs = document.querySelectorAll('.list_item');
console.log(divs)

divs.forEach(el => el.addEventListener('click', event => {
  console.log('클릭!')
  console.log(event.target.classList[1]);
}));

//-----------------------------------------------

function init() {
showList()
}

init()

//----------------------------