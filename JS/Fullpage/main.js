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
