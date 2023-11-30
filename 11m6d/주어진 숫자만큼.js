/*주어진 숫자만큼  0부터 순회하는 함수
    순회하면서 특정한 일을 함
    5, 순회하는 숫자를다 출력함
    4, 순회하는 숫자의 두뱃값을 다 출력
    순회하다는 말이 0부터 ~ 주어진 숫자값 사이에 존재하는 숫자를 말하는것인가?
    그렇다고 생각하자.
    1. 최소 3개의 함수가 필요함
    1개는 주어진 숫자만큼 반복하여 출력하는 함수
    또다른 함수는 똑같이 반복하나 해당 값에 *2를 해서 출력해주는 함수
    그리고 이 두가지를 묶어서 콜백해줄 함수를 작성해야함
    
   let loop = function (num){
    let tm='';
    for(i=0; i<=num; i++){
        tm = tm + i 
    }
    return tm
   };
   let double = (num)=>{
    let pm =[];
    let tt = ''
    for(i=0; i<=num; i++){
        pm[i] = i * 2
    }
    for(i=0;i<pm.length;i++){
        tt =tt+ pm[i]
    }
    return tt;
   };
   function iterate(num, action){
    let result = action(num)
    console.log(result)
    return result;
   };
   iterate(2,loop);
   저 아지메가 내려는 문제는 내가 이해한거랑 좀 다르긴 하네..
   난 한방에 다 찍으라는줄 알았네
   하나씩 찍는다면 콘솔로그로 써도 되는데

   정리해서 다시 써보ㄴ자
   */

   function callback (num, action){
    for(i=0; i<num; i++){
        action(i)
    }
   }
   let one = function(num){
    console.log(num)
   }
   callback(3,one)
   
   let db = (num) =>{
    console.log(num*2)
   }

   callback(6,db)

