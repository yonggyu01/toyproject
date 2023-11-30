let greetings;
let pa = "stap"
greetings = `안녕 그런데 오늘은? ${pa} 뭐하니
그냥 놀아라  ㅎㅎ
`

console.log(greetings)

//boolean type

//falshy bloolean
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

 // !! <- 이건 참인지 거짓인지 구분해주는 명령어

//truthy bloolean 참인 값
console.log(!!1)
console.log(!!-1)
console.log(!!Infinity)
console.log(!!{})
console.log(!!'text')


/////////////////////

//null 과 undefined


// object
 let orange = {name:'orange', color : 'orange', symbol : ':greenapple'}




 //원시타입과 객체값 차이점
// 아래는 원시타입이라 값 자체가 메모리에 저장되어있음
// 그래서  b에 a를 저장시키면   a 값이 바로 b에 저장되는 형식임
 let a = 1
 let b = a
b=2
 console.log(a)
 console.log(b)  //2 로 변경됨

 // 객체는 메모리 주소가 복사되어 전달되는 것이라서 원본이 바뀌면  같이 바뀜

 let apple = orange  // apple에 orange가 가리키는 저장 주소가 저장되는것임 
 console.log(apple)
 orange.name = '바꿀게'

 console.log(apple)
 

 // const  재할당 불가능

 

