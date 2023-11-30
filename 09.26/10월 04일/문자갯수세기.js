/*
A~Z까지 26번 a~z까지 26번이다.
결과값은 52칸의 배열을 얻게되며, 주어진 문자열을 읽어서 해당 문자열에 AZ1 az2 배열에 존재하는 대소문자와 일치할때만 일치하는 만큼의  숫자를 기입하면 된다.

0.answer에 52번 반복하여 0으로 기입된 배열을 만든다.
1.일단 알파벳 A~Z까지의 문자열을 AZ1변수에 담고 
2.알파벳 a~z까지문자열을  az2 변수에 담는다
3. AZ문자열의 길이만큼 증가하느 i와  az문자열의 길이만큼 증가하는 i값을 만들고
  만든 i값으로  AZ1.charAt(i)값을 증가시키면서  
   my 스트링의 길이만큼 존재하느 a를 만들어  이때 AZ.charAt(i) == my스트링.charAt(a)의 값이 일치한다면 answer[i]에 = answer[i]+1
   일치하지 않는다면 answer[i]에 = answer[i] + 0을 더해준다.
   위 행위를 전부 끝마치면 answer에는 A~Z에 해당하는 값이 비교가 끝나게 된다.
   a~z에 해당하는 값은 
   A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5
   인덱스값이 26번부터 시작해서 담아주면 된다.
*/
function solution(my_string) {
    var answer = [];
   for(i=0; i<52; i++){
        answer[i] = 0
    } 
    var AZ1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var az2 = AZ1.toLowerCase()
    for(i=0; i<AZ1.length; i++){
        for(a=0; a<my_string.length; a++){
            if(AZ1.charAt(i)==my_string.charAt(a)){
                answer[i] = answer[i] + 1
            }else{answer[i] = answer[i] + 0}    
        }    
    }
    for(i=0; i<az2.length; i++){
        for(a=0; a<my_string.length; a++){
            if(az2.charAt(i)==my_string.charAt(a)){
                answer[i+26] = answer[i+26] + 1
            }else{
                answer[26+i] = answer[26+i] + 0
            }    
        }    
    }
    return answer;
}
solution("Programmers")
