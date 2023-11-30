// 콜백함수 중요
const sum = (a,b)=> a + b;
const multyfl = (a,b) => a*b;
function calcul(a,b,action){
    let result = action(a,b);
    console.log(result)
    return result;
}
// 콜백함수는 함수를 미리 정의해두고 나중에 해당 함수에  해당 함수가 가지고 있는
// 참조값만 가져와서  필요한 순간에 콜백되어 사용된다.


calcul(5,76,sum)
calcul(5,7,multyfl)
// 이런식으로 함수를 짜는게 좋은것 같음

