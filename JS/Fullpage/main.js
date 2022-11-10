$(function () {
  // jQuery를 사용한 초기화
  $("#fullpage").fullpage({
    //options here
    //autoScrolling: true,
    //scrollHorizontally: true,
    anchors: ["section1", "section2", "section3", "section4", "section5"],
    navigation: true,
    navigationPosition: "right",
    sectionsColor: ["#ccc", "#bbb", "#eee", "#fff"],
  });
});

// $(window).resize(function () {
//   if ($(this).width() <= 768) {
//     //window의 너비가 768 이하라면
//     fullpage_api.destroy("all");
//   } else {
//   }
// });

// 알라딘 API

function aladin1(success, data) {
  console.log("성공!", success);
  console.log(data);

  var title = data.item[0].title;
  var cover = data.item[0].cover;
  var content = data.item[0].description;

  $("#title").append("<strong>" + title + "</strong>");
  $("#content").append(content);

  var img = "<img src='" + cover + "'/>";
  $("#book_img").append(img);
}
// function aladin2(success, data) {
//   if (!success) {
//     console.log("도서검색 실패");
//   }
//   return;
//   console.log("data?", data);
// }

$.ajax({
  method: "GET",
  dataType: "jsonp",
  jsonp: "aladin1",
  url: "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx",
  data: {
    Query: "자바스크립트",
    TTBKey: "ttblovely2012530900001",
    output: "JS",
    cover: "big",
    callback: "aladin1",
  },
});

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
