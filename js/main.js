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
      // 배지 요소 숨기기
      // badgeEl.style.display = "none";

      // gsap.to(요소, 지속시간, 옵션: {}) 메소드: CSS 속성을 통해 애니메이션 처리
      gsap.to(badgeEl, 0.6, {
        opacity: 0, 
        display: 'none'
      });
    } else {
      // 배지 요소 보이기
      // badgeEl.style.display = "block";
      
      gsap.to(badgeEl, 0.6, {
        opacity: 1, 
        display: 'block'
      });
      
    }
});

// 순차적으로 VISUAL 섹션 내 요소 보이기
// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');

// 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션: {}) 메소드: CSS 속성을 통해 애니메이션 처리
  gsap.to(fadeEl, 1, {
    // delay: 몇 초 뒤에 실행될 것인가?
    // index값을 이용하여 0.7s씩 증가
    delay: (index + 1) * 0.7, // 0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
});

// 공지사항 수직 슬라이드 기능 작성
// new 키워드로 Swiper 객체를 생성 => 슬라이드 기능을 생성
// new Swiper(선택자, 옵션: {}); 
new Swiper('.notice .swiper', {
  direction: 'vertical', // 수직 슬라이드
  loop: true, // 반복 재생 여부
  autoplay: true, // 자동 재생 여부
});
