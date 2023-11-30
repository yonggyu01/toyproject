/*
1. my_string의 글자를 m글자씩 읽어 임의이 temp에 저장한다. m글자를 찍었다면
m+1번째 부터 다시 m글자를 찍는다.
1-1 글자의 길이가 얼마나되는지 알수없으니 mystring의 길이를 m으로 나눠 나오는 값을 p변수에 저장하고, 
해당변수 값만큼 임의의변수를(a1,a2,a3등등) 생성한다. <-- 이과정은 불가능한듯함
2. 1-1에 생성된 변수에 mystring의 값을 m까지 읽어 저장한다.
2-1 해당과정은 mystring m까지 1번 반복하고 변수1번에 저장했다면 
    변수 2에는 mystring m+1인덱스 값부터 또 m만큼 저장해야한다.
    변수 3에서도....
    이 과정을 1-1에 나오는 p값만큼 반복한다.   
3. 저장된 변수의 값들을 읽어와서 변수의 c번째 글자만  answer에 붙여서 저장한다.
 3-1 순서는 1-1에서 생성한 임의의변수 a1 -> a2이런순서로 내려간다.

 좀더 쉽게 정리하자면 
 그냥 포문으로 m전까지 찍은뒤  그 뒷열부터  다시 찍어라
 그럼 temp.length는 처음값이 0이었다가  글자가 찍히면 4로 바뀌게 되고  다시 포문으로 진입할때 읽으면
 4부터 찍게됨 하지만 temp 값은 리셋하고 그 뒤부터 찍어야 해당 작업을 반복이 가능하다.
 내가 원하는 값은
 temp 가 일단 0  ~  m번찍힌다
 그뒤 포문의 값이 1 증가할때  temp는 리셋되고
 

 이걸 사용해서 식에 반영하면 가능하다.

*/
function solution(my_string, m, c) {
    var answer = '';
    var my1 = my_string.length/m
    var templang = 0;
    for(i=0; i<my1; i++){
        var temp =''
        for(a=templang; a<(m+templang); a++){
             temp = temp +  my_string.charAt(a)
             
             console.log(templang)
            }
            templang = templang + temp.length
            answer = answer + temp.charAt(c-1)
            console.log(temp)
    }
    
    return answer;
}

solution("ihrhbakrfpndopljhygc",4,2)