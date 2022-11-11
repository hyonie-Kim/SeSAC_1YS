$(function () {
  // jQuery를 사용한 초기화
  $("#fullpage").fullpage({
    //options here
    //autoScrolling: true,
    //scrollHorizontally: true,
    anchors: ["section1", "section2", "section3", "section4", "section5"],
    navigation: true,
    navigationPosition: "right",
    sectionsColor: ["#ccc", "##fef8f8", "#eee", "#fff"],
  });

  // if ($(this).width() <= 768) {
  //   //window의 너비가 768 이하라면
  //   $.fn.fullpage.destroy();
  // } else {
  // }
});

// $(window).resize(function () {
//   if ($(this).width() <= 768) {
//     //window의 너비가 768 이하라면
//     $.fn.fullpage.destroy("all");
//   } else {
//     fullpageActivate();
//   }
// });

// fullpageActivate();

// 알라딘 API

// function aladin1(success, data) {
//   console.log("성공!", success);
//   console.log(data);

//   var title = data.item[0].title;
//   var cover = data.item[0].cover;
//   var content = data.item[0].description;

//   $("#title").append("<strong>" + title + "</strong>");
//   $("#content").append(content);

//   var img = "<img src='" + cover + "'/>";
//   $("#book_img").append(img);
// }

// function aladin2(success, data) {
//   if (!success) {
//     console.log("도서검색 실패");
//   }
//   return;
//   console.log("data?", data);
// }

// function aladin2(success, data){
//   console.log("도서 리스트",success)
//   console.log("데이터",data)
// }

// 도서 조회
// $.ajax({
//   method: "GET",
//   dataType: "jsonp",
//   jsonp: "aladin1",
//   url: "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx",
//   data: {
//     Query: "자바스크립트",
//     TTBKey: "ttblovely2012530900001",
//     output: "JS",
//     cover: "big",
//     callback: "aladin1",
//   },
// });

// 상품리스트
// $.ajax({
//   method: "GET",
//   dataType: "jsonp",
//   jsonp: "aladin2",
//   url: "http://www.aladin.co.kr/ttb/api/ItemList.aspx",
//   data: {
//     QueryType: "ItemNewAll",
//     TTBKey: "ttblovely2012530900001",
//     SearchTarget: "Book",

//     output: "JS",
//     cover: "big",
//     callback: "aladin2",
//   },
// });

$.ajax({
  //요청 정보
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "제이쿼리" },
  headers: { Authorization: "KakaoAK e04473d46599613a0c21d848cedc2df0" },
}).done(function (msg) {
  //응답 후 코드
  console.log("조회 데이터", msg);
  console.log("제목 검색 :", msg.documents[0].title);
  console.log("책 이미지 :", msg.documents[0].thumbnail);

  // $("p").append("<strong>" + msg.documents[0].title +"</strong>");
  // $("p").append("<img src='"+ msg.documents[0].thumbnail +"'/>")

  for (let i = 0; i < 10; i++) {
    console.log(msg.documents[i].thumbnail);
    $("p").append("<img src='" + msg.documents[i].thumbnail + "'/>");
  }
});

// ----------------------------------------------------------------------------
