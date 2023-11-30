/*
정리하자면
v =는 +  ㅅ은 - 로 보고  진리표를 작성하자면
x y양쪽 값이 트루트루일때는 더하거나 빼도 결과값은 트루
 + 인경우는 양측값이 f가 아닌이상 항상 트루값 리턴하고
 -인경우는 양측이 트루 아닌이상 항상 폴스를 리턴한다
*/

function solution(x1, x2, x3, x4) {
    var answer = true;
    var temp =''
    function plus(a, b){
      if(a||b){
       temp = true 
    }
    else if(a == false && b== false){
        temp = false
    }
    return temp;
    }
    var answerA = ''
    plus(x1, x2)
    answerA = temp
    var answerB = ''  
    plus(x3, x4)
    answerB = temp
    function minus(answerA, answerB){
        if(answerA&&answerB){
        answer = true 
        }
        else if(answerA == false || answerB== false){
            answer = false
        }
        return answer;           
    }
    minus(answerA, answerB)
    return answer;
}