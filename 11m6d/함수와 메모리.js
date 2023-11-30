function add(a,b){
    return a + b
}

const sum = add

// sum 도 add가 갖고있는 주소를 가지게됨
// sum 과 add둘다 함수처럼 사용가능해짐

console.log(add(1,2))
console.log(sum(1,2))
// 동일하게 사용하게됨/ 함수의 이름 자체는 주소를 가르치고 있게됨

// 함수상에서 return 값을 정의하지 않는다면   명시적으로 undifined를 반환해줌

// return을 함수 중간에 사용하면 함수가 종료됨
// 사용예로는 함수를 일찍 종료를 원할시 return의 조건을 걸어서 일찍 종료시킬 수 있음
 
function basic1(a=1, b=2){
    // 매개변수의 기본값을 위와같이 정할 수 있다.
    // a와 b의 값이 지정되지 않았다면 내가 설정해둔 값인 a = 1 b =2로 해서 값이 출력됨
    console.log(a)
    console.log(b)
    return a + b;
}
console.log(basic1('강남','스타일'))

// 이런식으로 함수를 구성할 경우 좀더 재사용이 가능할것으로 판단됨

// Rest 매개변수 Rest Parameters
// 내가 몇개의 파라매터를 받아올지 모를때 사용하는 방식으로

function manynumber(...numbers){
    console.log(numbers)

}
manynumber(1,2,3,4,5,6,7,8,9,10);
function manynumber1 (a1,b1,...tnumbers){
    console.log(tnumbers)
    console.log('a1= ', a1)
    console.log('b1= ',b1)
    return;
}
console.log(manynumber1('e','r',1,2,3,4,5,6))

