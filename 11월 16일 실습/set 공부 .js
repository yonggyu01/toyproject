// let ltt = new Set([1,2,3])
// console.log(ltt)
// ltt.add(5)   // 특징은 add하나에 한개씩인듯? 변수를 하나 넣던 값을 하나 넣던 둘중하나임
// console.log(ltt.has(6))


// console.log(ltt)
// let to = [1,56,7,8,43,78,[9,3,1,]]
// // ltt.add()
// let tq1 = [...new Set(to.flat())]
// console.log(tq1)
// ltt.forEach(function(value){
//     console.log(value)
// })
//  set 는 중복 값을 허용하지 않음  값의 추가는 add()로만 사용가능 forEach 반복이 가능하여
// 이터러블 객체임
/*
rest 파라메터   spread operator  
작성은 똑같으나
 느낌은 좀 다름
 function abc(...aaa) <-함수의 파라메터로 사용하는경우에는 rest 파라메터
    함수에서는  rest 파라메터는 맨 뒷쪽에 한번만 사용가능하다
     function abc (fi ,se, thir, ...numbers)
위처럼   맨뒤에만 써야하고  중간이나 맨 앞에오면 문법오류남
그리고 rest 파라메터로 값을 받게되면
 함수 내에서 인자로는 numbers를 사용해서 활용이 가능한데
 배열로 들어오기 때문에 for of를 활용해서 
 값을 처리할 수도 있고 일반 반복문 써도됨
 배열[i] 식으로 사용가능하다



 let array = [1,2,3,4,5,6,7,8,9,10]
 let qtqt = [...array]  <- 이경우 spread operator로 사용

   */

 let vava1 = new Set([1,2,3,4,5,6])
 let vava2 = new Set([1,2,3])
//  let set = [...vava1].filter(function(item){ return vava2.has(item)})
let set1 = [...vava1].filter(item=> vava2.has(item))
//  console.log(set)
 console.log(set1)

function egg(chicken){
    const newLocal = ''
    return Promise.resolve('나는 계란이다')
}

egg().then(function(chic){
    return 
})