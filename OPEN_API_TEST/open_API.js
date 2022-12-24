/* Javascript Sample*/
var xhr = new XMLHttpRequest();
var url = "http://api.kcisa.kr/openapi/service/rest/meta5/getKTOE0102"; /*URL*/
url = "https://apis.data.go.kr/B551011/PhotoGalleryService/galleryList?numOfRows=1&pageNo=1&MobileOS=WIN&MobileApp=web&serviceKey=wWbCS%2FWxSjT413uUzDeI9VJyA6x8OpfFgCkA8vh6o4%2B51XNnvo9MIpVyW6wsAytOdWhX6efZr9iRjWZnETpqXg%3D%3D&_type=_json";

xhr.open("GET", url + queryParams);
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    console.log("status: " + this.status);
    console.log(
      "resultCode: " + $(this.responseText).find("resultCode").text()
    );
    console.log("resultMsg: " + $(this.responseText).find("resultMsg").text());

    var item = $(this.responseText).find("item");
    $(item).each(function () {
      console.log("title" + $(this).find("title").text());
      console.log("alternativeTitle" + $(this).find("alternativeTitle").text());
      console.log("creator" + $(this).find("creator").text());
      console.log("regDate" + $(this).find("regDate").text());
      console.log("collectionDb" + $(this).find("collectionDb").text());
      console.log("subjectCategory" + $(this).find("subjectCategory").text());
      console.log("subjectKeyword" + $(this).find("subjectKeyword").text());
      console.log("extent" + $(this).find("extent").text());
      console.log("description" + $(this).find("description").text());
      console.log("spatialCoverage" + $(this).find("spatialCoverage").text());
      console.log("temporal" + $(this).find("temporal").text());
      console.log("person" + $(this).find("person").text());
      console.log("language" + $(this).find("language").text());
      console.log("sourceTitle" + $(this).find("sourceTitle").text());
      console.log(
        "referenceIdentifier" + $(this).find("referenceIdentifier").text()
      );
      console.log("rights" + $(this).find("rights").text());
      console.log("copyrightOthers" + $(this).find("copyrightOthers").text());
      console.log("url" + $(this).find("url").text());
      console.log("contributor" + $(this).find("contributor").text());
    });
  }
};
xhr.send("");
