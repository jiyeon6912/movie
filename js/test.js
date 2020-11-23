const divs = document.querySelectorAll('.a');

divs.forEach(el => el.addEventListener('click', event => {
  console.log(event.target.classList[1]);
}));

// 1. 클래스 이름으로 모든 요소를 ​​가져옵니다
// 2. forEach를 사용하여 모든 요소를 ​​반복합니다.
// 3. 각 요소에 이벤트 리스너 첨부
// 4. event.target특정 요소에 대한 추가 정보를 검색하는 데 사용