
// 생성자 함수를 class로 변경함

class Fruit {  
    //생성자
    constructor(name, emoji) {
    this.name= name;
    this.emoji = emoji;
    }   // 클래스 생성자에서는 생성할 내용들은  컨스트럭터 안에 넣고 그외에 함수는 밖에 빼줌
    // 함수에는 this 없어도 됨,  function앞에 제외해야함
   
   // 클래스 레벨의 함수를 만들어보자, Fruit에서 이 함수를 실행시키면
   // 랜덤한 과일명의 객체를 찍어주는 함수 만들어보자
static makerandom() {
    // 클래스 레벨의 메서드는 this를 참조할 수 없음,  현재 템플릿 상태이기 때문임
    return new Fruit('straw', '🍗');
}
   //아래 메서드는  애플이나 바나나 같은 객체 안에서 객체안 내용들을 사용해서 작동하는 함수이기 때문에
   // 인스턴스 레벨의 함수
    display = function(){
        console.log(`${this.name} : ${this.emoji}`)
}
}
var meat = Fruit.makerandom();
var apple = new Fruit('apple','🍎');
var orange = new Fruit('orange','🍊')
var banana = new Fruit('banana','🍌')

apple.display();
orange.display();
banana.display();
meat.display();
console.log(meat);

// static 정적 프로퍼티,메서드

