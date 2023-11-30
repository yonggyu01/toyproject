// const apple = {name:'apple' , 
//     display:function(){
//         console.log(`${this.name}:😍`)
// }
// }

// 

// ////////////// 생성자 함수

// const orange = {name:'orange' , 
//     display:function(){
//         console.log(`${this.name}:🤣`)
// }
// }
//


// 생성자 함수는 작성시 함수명의 첫글자는 대문자로 만들어줘야함

function Fruit(name, emoji){
    this.name= name;
    this.emoji = emoji;
    this.display = function(){
        console.log(`${this.name} : ${this.emoji}`)
    }
}
//위에는 생성자 함수임

var apple = new Fruit('apple','🍎');
var orange = new Fruit('orange','🍊')
var banana = new Fruit('banana','🍌')

apple.display();
orange.display();
banana.display();

// 클래스를 통해서 객체를 만들수도 있으며
// 이렇게 만들어진 객체를 인스턴스라고 함
