// class Tiger {
//     constructor (color){
//         this.color = color;

//     }
//     eat(){
//         console.log('먹자')
//     }
//     sleep(){
//         console.log('잔다')
//     }
// }
// class Dog {
//     constructor (color){
//         this.color = color;

//     }

// }

class Animal{
    constructor(color){
        this.color = color    
    }
        eat(){
            console.log('먹자')
        }
        sleep(){
            console.log('잔다')
        }
        play(){
            console.log('놀자')
        }
    }

class Dog extends Animal {}

let dog = new Dog('노랑이');
console.log(dog)
dog.play()
dog.eat()

class Tiger extends Animal {
    get fight(){
        console.log('싸우자')
    }
}

let tiger = new Tiger('초록색');
console.log(tiger)
tiger.fight

class Racoon extends Animal{
    constructor(color, ownerName){
        super(color);  // 부모클래스의 생성자를 뜻함.
        this.ownerName = ownerName;
    }
    cute(){
        console.log('귀요미')
    }
    eat(){
        super.eat();  //자식요소 쪽에서 함수를 재정의할때 슈퍼는 부모의 eat을 호출하는거고 
        console.log('라쿤이 먹는다.') //이건 오버라이드라고 부름 함수에 다른행동을 추가
    }
}

let racoon = new Racoon('검은색','내꺼');
console.log(racoon)
racoon.cute();
racoon.eat();


