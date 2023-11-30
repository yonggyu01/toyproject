const a = 0;
const b =1 ;

const ab ={
    a : a, b: b
}

console.log(ab)
//  객체 ab에   키에는 변수 a 그리고 값에도 a의 값을 저장하고 b에도 똑같이 저장했다.
// 만약 이런식으로 키와 값이 같은 객체를 생성할 경우   축약이 가능함
bb = { a ,b}
// 이렇게 축약이됨

console.log(bb)
var tak;

function makeobj(name, age){
 
    return {      //name : name,  age : age
        //값이 같으면 축약
        name, age
    }
}


console.log(tak = makeobj('aa','bb'))

