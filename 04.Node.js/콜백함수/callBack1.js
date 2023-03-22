function doHomework(subject, callback) {
  console.log(`${subject} 과목 숙제를 시작합니다.`);
  callback();
}

doHomework("코딩", function () {
  console.log("코딩 숙제 끝!(1)");
});

function finishHomework() {
  console.log("코딩 숙제 끝!(2)");
}

doHomework("코딩",finishHomework)