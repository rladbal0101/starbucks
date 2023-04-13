// 검색창 요소(.search) 선택 시 강제 포커스 및 제어
const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('.search input'); // 아래와 같이 최적화
// document(HTML 파일)부터 찾는게 아닌 이미 찾은 searchEl 부터 찾기시작
const searchInputEl = searchEl.querySelector('input');

// 검색창 요소를 클릭하면 input 요소를 포커스 하도록 실행
searchEl.addEventListener('click', function () { // 이벤트 핸들러
  searchInputEl.focus(); // 포커스 강제 적용
});

// input 요소에 포커스되면 실행
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); // HTML 속성을 추가하는 메소드
});

// input 요소에 포커스가 해제(블러)되면 실행
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); // HTML 속성을 추가하는 메소드
});

// 스크롤 시 전역 배지(고정 배너) 숨기기
const badgeEl = document.querySelector('header .badges');

// window: 브라우저 창 객체(BOM: Browser Object Model)
window.addEventListener('scroll', function () {
    // console.log(window.scrollY); // y축으로 얼마나 스크롤 했는지에 대한 수치

    // 만약 y축으로 스크롤 한 수치가 500을 초과하면 배지 요소를 숨기고 그렇지 않으면 다시 보이기!!
    if (window.scrollY > 500) {
      badgeEl.style.display = "none";
    } else {
      badgeEl.style.display = "block";
    }
});