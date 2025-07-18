$(document).ready(function () {
  // 메뉴
  $(".menu a").click(function (event) {
    event.preventDefault();
    // $('.menu a').removeClass('on');
    // $(this).addClass('on');
    $("html, body").animate({ scrollTop: $(this.hash).offset().top }, 500);
  });

  // 프로젝트 에니메이션
  $(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop();
    var meStart = $(".about-me").offset().top;
    var meEnd = meStart + $(".about-me").outerHeight();
    var windowWidth = $(window).width(); // 현재 창의 너비를 가져옵니다.

    // 화면 너비가 900px 이상일 때만 실행
    if (windowWidth > 1024) {
      if (scrollTop >= meStart && scrollTop < meEnd) {
        $(".about-me .s-con-inner").addClass("fixed").removeClass("unfixed");
      } else {
        $(".about-me .s-con-inner").removeClass("fixed").addClass("unfixed");
      }
    } else {
      // 900px 이하일 때 unfixed 클래스만 추가
      $(".about-me .s-con-inner").removeClass("fixed").addClass("unfixed");
    }
  });

  // 프로젝트 탭 버튼
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});
