const musicList = [
  {
  id: 1,
  title: '언어의 정원',
  director: '신카이 마코토',
  music: 'Rain - 秦基博(Motohiro Hata)',
  poster: './images/home/nail-1.jpg',
  youtube: 'https://www.youtube.com/embed/Dz_4XIBCg5c',
  text:
    '영화는 구두장이를 꿈꾸는 15세의 아키즈키 타카오와 27세의 여인 유키노 유카리가 비 오는 아침마다 신주쿠 공원에서 이어가는 만남을 그린다. 타카오는 구두 디자인을 하기 위해 등교를 늦게 하고, 유키노는 직장에서의 개인적 문제 때문에 일을 나가지 않는다.'
},
{
  id: 2,
  title: '아이언맨 3',
  director: '셰인 블랙',
  music: 'Blue(da ba dee) - Eiffel 65',
  poster: './images/home/nail-2.jpg',
  youtube: 'https://www.youtube.com/embed/ILhBfOoRC4I',
  text:
    '뉴욕 사건의 트라우마로 인해 영웅으로서의 삶에 회의를 느끼는 토니 스타크(로버트 다우니 주니어). 그가 혼란을 겪는 사이 최악의 테러리스트 만다린(벤 킹슬리)을 내세운 익스트리미스 집단 AIM이 스타크 저택에 공격을 퍼붓는다. '
},
{
  id: 3,
  title: '분노의 질주 : 홉스앤쇼',
  director: '데이비드 리치',
  music: 'Time in a bottle - YUNGBLUD ',
  poster: './images/home/nail-3.jpg',
  youtube: 'https://www.youtube.com/embed/iv-1PMbVI78',
  text:
    '분노의 질주 시리즈의 첫 스핀오프 영화이며, 데커드 쇼와 루크 홉스의 팀업 영화이다.'
},
{
  id: 4,
  title: '중경삼림',
  director: '왕가위',
  music: 'California Dreamin',
  poster: './images/gc.jpg',
  youtube: 'https://www.youtube.com/embed/Yh87974T6hk',
  text:
    '영화는 2개 에피소드가 옴니버스식으로 구성되어 있으며, 1부는 마약 밀매업자(임청하 扮)와 경찰 223(가네시로 다케시 扮) 사이에서 이루어지는 하룻밤의 미묘한 만남을 2부는 경찰 663(양조위 扮)과 웨이트리스 페이(왕페이 扮[5])의 교감을 그리고 있다.'
},

{
  id: 5,
  title: '아이언맨3',
  director: '셰인 블랙',
  music: 'Blue(da ba dee)-Eiffel 65',
  poster: './images/home/nail-2.jpg',
  youtube: 'https://www.youtube.com/embed/ILhBfOoRC4I',
  text:
    '뉴욕 사건의 트라우마로 인해 영웅으로서의 삶에 회의를 느끼는 토니 스타크(로버트 다우니 주니어). 그가 혼란을 겪는 사이 최악의 테러리스트 만다린(벤 킹슬리)을 내세운 익스트리미스 집단 AIM이 스타크 저택에 공격을 퍼붓는다. '
},
{
  id: 6,
  title: '분노의 질주 HOBBS & SHAW',
  director: '데이비드 리치',
  music: 'Time in a bottle-Bs.YUNGBLUD',
  poster: './images/home/nail-3.jpg',
  youtube: 'https://www.youtube.com/embed/iv-1PMbVI78',
  text:
    '분노의 질주 시리즈의 첫 스핀오프 영화이며, 데커드 쇼와 루크 홉스의 팀업 영화이다.'
},
{
  id: 7,
  title: '중경삼림',
  director: '왕가위',
  music: 'California Dreamin',
  poster: './images/gc.jpg',
  youtube: 'https://www.youtube.com/embed/Yh87974T6hk',
  text:
    '영화는 2개 에피소드가 옴니버스식으로 구성되어 있으며, 1부는 마약 밀매업자(임청하 扮)와 경찰 223(가네시로 다케시 扮) 사이에서 이루어지는 하룻밤의 미묘한 만남을 2부는 경찰 663(양조위 扮)과 웨이트리스 페이(왕페이 扮[5])의 교감을 그리고 있다.'
},
{
  id: 8,
  title: '언어의정원',
  director: '신카이 마코토',
  music: 'Rain - 秦基博(Motohiro Hata)',
  poster: './images/home/nail-1.jpg',
  youtube: 'https://www.youtube.com/embed/Dz_4XIBCg5c',
  text:
    '영화는 구두장이를 꿈꾸는 15세의 아키즈키 타카오와 27세의 여인 유키노 유카리가 비 오는 아침마다 신주쿠 공원에서 이어가는 만남을 그린다. 타카오는 구두 디자인을 하기 위해 등교를 늦게 하고 유키노는 직장에서의 개인적 문제 때문에 일을 나가지 않는다.'
},
{
  id: 5,
  title: '아이언맨3',
  director: '셰인 블랙',
  music: 'Blue(da ba dee)-Eiffel 65',
  poster: './images/home/nail-2.jpg',
  youtube: 'https://www.youtube.com/embed/ILhBfOoRC4I',
  text:
    '뉴욕 사건의 트라우마로 인해 영웅으로서의 삶에 회의를 느끼는 토니 스타크(로버트 다우니 주니어). 그가 혼란을 겪는 사이 최악의 테러리스트 만다린(벤 킹슬리)을 내세운 익스트리미스 집단 AIM이 스타크 저택에 공격을 퍼붓는다. '
},
{
  id: 6,
  title: '분노의 질주 HOBBS & SHAW',
  director: '데이비드 리치',
  music: 'Time in a bottle-Bs.YUNGBLUD',
  poster: './images/home/nail-3.jpg',
  youtube: 'https://www.youtube.com/embed/iv-1PMbVI78',
  text:
    '분노의 질주 시리즈의 첫 스핀오프 영화이며, 데커드 쇼와 루크 홉스의 팀업 영화이다.'
},
{
  id: 7,
  title: '중경삼림',
  director: '왕가위',
  music: 'California Dreamin',
  poster: './images/gc.jpg',
  youtube: 'https://www.youtube.com/embed/Yh87974T6hk',
  text:
    '영화는 2개 에피소드가 옴니버스식으로 구성되어 있으며, 1부는 마약 밀매업자(임청하 扮)와 경찰 223(가네시로 다케시 扮) 사이에서 이루어지는 하룻밤의 미묘한 만남을 2부는 경찰 663(양조위 扮)과 웨이트리스 페이(왕페이 扮[5])의 교감을 그리고 있다.'
},
{
  id: 8,
  title: '언어의정원',
  director: '신카이 마코토',
  music: 'Rain - 秦基博(Motohiro Hata)',
  poster: './images/home/nail-1.jpg',
  youtube: 'https://www.youtube.com/embed/Dz_4XIBCg5c',
  text:
    '영화는 구두장이를 꿈꾸는 15세의 아키즈키 타카오와 27세의 여인 유키노 유카리가 비 오는 아침마다 신주쿠 공원에서 이어가는 만남을 그린다. 타카오는 구두 디자인을 하기 위해 등교를 늦게 하고 유키노는 직장에서의 개인적 문제 때문에 일을 나가지 않는다.'
}
]

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
    newItem += `<div class="item">
            <a href="#"><img id="poster" src=${item.poster} alt="언어의정원"></a>
            <p id="title">${item.title}</p>
            <p id="music"><span>${item.music}</span></p>
          </div>`

          listItem.innerHTML = newItem
  })
}


function init() {
showList()
}

init()