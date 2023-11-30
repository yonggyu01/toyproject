// 접근자 프로퍼티(accessor property) 
class Student{
    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

    }
    get fullName(){
        return `${this.firstName}${this.lastName}`;
    }
    set fullName(value){
        return console.log(value)
    }

} 

// 
var kim = new Student('김','수현')
console.log(kim)
console.log(kim.fullName)
//게터가 중요한 이유는 보통 fullName이 함수로 작성되어있어서  콘솔로 불러올때도
// kim.fullName(); 이런식으로 호출해야하나 
// 함수 작성된 앞에 get이라고 작성해둬서   접근자 프로퍼티를 해두면 호출하는 시점에서
// 데이터를 만들어서 리턴을 해둔다. -> 접근자 프로퍼티 get임
// get은   함수를 호출할때  발동하고

// set도 있는데 set은 함수에 값을 할당 할때 발동됨
kim.fullName = '김철수'
// 이런식으로 값을 할당할때 발동하게 할수있다.

