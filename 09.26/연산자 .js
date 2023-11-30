/*

a   b  c  d의 값이 몇인지 알수없음 (그러나 주사위 1~6 이하의 정수임)
해당 숫자를 문자열로 변경하여 합친값을 number에 저장한뒤
해당 문자열의 길이만큼 반복하는 for문에서 a의 값과 abcd 문자열을 비교하여 
같으면 numberlength라는 배열에 저장하고 
틀린경우 false1 이라는 배열에 저장한다.
나온 결과값의 길이가 4일경우 
전부 동일한 값임  이경우 1111 * a 를 하면 답이 나옴

길이가 3이 나오는경우
중복되는 값은 numberlength에 있고 중복되지 않은 값은 false1에 담겨있으므로
numberlength에 저장되어있는 첫글자를 불러오면 중복값이고 false1에 담긴 값은 q가 된다
(10*(numberlength.charAt(0)+false1))*(10*(numberlength.charAt(0)+false1))

두개씩 같은값의경우는 더 쉽다
number에 저장되어있는 문자를 a로 비교하기때문에
numberlength에 첫글자와 false1의 첫글자만 불러오면 됨
(numberlength.charAt(0)+false1.charAt(0))*|numberlength.charAt(0)-false1.charAt(0)|

마지막으로 모든 숫자가 다 다른경우
numberlength는 1이 찍히게 된다.
이 경우 a로 number 문자열을 한칸씩 비교하며 a보다 작은경우  answer에 저장시키면 가장 작은값만 얻게된다.
*/

/*
a   b  c  d의 값이 몇인지 알수없음
해당 숫자를 문자열로 변경하여 합친값을 number에 저장한뒤
해당 문자열의 길이만큼 반복하는 for문에서 a의 값과 abcd 문자열을 비교하여 
같으면 numberlength라는 배열에 저장하고 
틀린경우 false1 이라는 배열에 저장한다.
나온 결과값의 길이가 4일경우 
전부 동일한 값임  이경우 1111 * a 를 하면 답이 나옴

길이가 3이 나오는경우
중복되는 값은 numberlength에 있고 중복되지 않은 값은 false1에 담겨있으므로
numberlength에 저장되어있는 첫글자를 불러오면 중복값이고 false1에 담긴 값은 q가 된다
(10*(numberlength.charAt(0)+false1))*(10*(numberlength.charAt(0)+false1))

두개씩 같은값의경우는 더 쉽다(두가지 조건이 필요함  두개씩 맞고 두개는 다른경우가 있음)
number에 저장되어있는 문자를 a로 비교하기때문에
numberlength에 첫글자와 false1의 첫글자만 불러오면 됨
(numberlength.charAt(0)+false1.charAt(0))*|numberlength.charAt(0)-false1.charAt(0)|

마지막으로 모든 숫자가 다 다른경우
numberlength는 1이 찍히게 된다.
이 경우 a로 number 문자열을 한칸씩 비교하며 a보다 작은경우  answer에 저장시키면 가장 작은값만 얻게된다.
*/

function solution(a, b, c, d) {
    var answer = 0;
    var number = String(a)+String(b)+String(c)+String(d)
    var numberlength = ''
    var false1 = ''
   
    for(i=0; i<number.length; i++){
        if(a==number.charAt(i)){
            numberlength=numberlength + number.charAt(i)
        }else if(a!=number.charAt(i)){
            false1 = false1 + number.charAt(i)
        }
    }
    for(i=0; i<numberlength.length; i++){
        if(numberlength.length == 4){
            answer = 1111*a
        }
        if(numberlength.length == 3){
            answer = ((10*Number(numberlength.charAt(0))+Number(false1)))
            answer = answer * answer
        } 
        if(numberlength.length == 2 && false1.charAt(0) != false1.charAt(1)){
           answer =  Number(false1.charAt(0))*Number(false1.charAt(1))
          }else if(numberlength.length == 2 && false1.charAt(0)==false1.charAt(1)){  
       var ta = Number(numberlength.charAt(0))-Number(false1.charAt(0))
       var pa = 0;
       if(ta<0){ 
           pa = pa - ta
       }else { 
           pa = ta
       }            
              answer = (Number(numberlength.charAt(0))+Number(false1.charAt(0)))*(pa) 
          }
        if(numberlength.length == 1){
            var less1 = a
            for(q=0; q<number.length; q++){
                if(less1 > Number(String(number.charAt(q)))){               
                    less1 = number.charAt(q)
                }
              answer = Number(less1)   
            }
            
        }

    }
    return answer;
}
solution(3,3,2,2)
