
// 생성자 함수를 class로 변경함

class Fruit {  
    //생성자
    constructor(name, emoji) {
    this.name= name;
    this.emoji = emoji;
    }   // 클래스 생성자에서는 생성할 내용들은  컨스트럭터 안에 넣고 그외에 함수는 밖에 빼줌
    // 함수에는 this 없어도 됨,  function앞에 제외해야함
    display = function(){
        console.log(`${this.name} : ${this.emoji}`)
}
}

var apple = new Fruit('apple','🍎');
var orange = new Fruit('orange','🍊')
var banana = new Fruit('banana','🍌')

// apple은 fruit 클래스의 인스턴스이다 라고 설명해야함
apple.display();
// orange은 fruit 클래스의 인스턴스이다 라고 설명해야함
orange.display();
banana.display();

// 동일하게 작동함 클래스도 