class Car {
    constructor(color) {
        this.color = color;
        this.isDoor = true;
    }
    move(){
        console.log("움직인다.")
    }

    stop(){
        console.log("멈춘다.")
    }
    returnColor(){
        return this.color;
    }
}

// 객체로 감싸서 모듈로 내보냄
module.exports = {Car};
