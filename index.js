 // 스크롤 위치를 감지하는 이벤트 등록
 window.addEventListener('scroll', function() {
  
    // 애니메이션을 실행할 텍스트 선택
    var text = document.querySelector('.animate-me');
    
    // 텍스트가 화면에 보이면 애니메이션 실행
    if (isElementInViewport(text)) {
      var scrollPosition = window.pageYOffset;
      text.style.transform = 'translateY(' + (-scrollPosition * 0.5) + 'px)';
    }
  });
  
  // 요소가 화면에 보이는지 체크하는 함수
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
