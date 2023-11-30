/*
** 정수배열 indices[0]의 값은 =  1이며 이 값은
** my_string에 삭제해야하는 내용을 나타냄
1. indice[0] 의 값을 읽으면 반환되는 값을 my_string에서 제거하고
2. 제거한뒤 문자열을 다시 찍어낸다
 app~ > > ap로 제거하여 찍어냄
3. 이 찍어낸 문자열에서 다시 indice[1] 증가시켜서
4. 앞서 내용을 지우고 다시 찍은 문자열에서 해당하는 값을 삭제하고
 2번 과정을 다시 한다.
이 작업을 indice끝까지 반복한다.


function solution(my_string, indices) {
    var answer = '';
    var taptap = my_string
    for(a=0; a<indices.length; a++){
        var temp = ''    
        for(i=0; i<taptap.length; i++){
            if(indices[a]!=i){
                temp = temp + taptap.charAt(i)
            }
        }
        taptap = temp
    }
    console.log(answer)
    return answer;
}
*/
/*
위 문제는 해석결과 배열문제임 ㅡㅡ;
다시 작성하면
1 . my스트링의 문자를 배열로 변경시켜서 한글자씩  temp배열 한칸씩에 넣는다 for 문 
2. indice[0~ ]부터 끝가지 들어간 숫자는 temp을 배열의 인덱스 값이며
3. indice에 0번부터 긑가지 읽어 해당 값마다  temp에 배열 0 index에 해당하는 곳에 값을 0으로 바꾼다
4. temp에는 문자와 0으로 바뀐 배열이 존재하게 된다
5. 이 배열을 처음부터 끝가지 읽으며 0이 아닐때만 answer에 저장하도록 한다.
*/
function solution(my_string, indices) {
    var answer = '';
    var temp= []
    for(i=0; i<my_string.length; i++){
        temp[i] = my_string.charAt(i)
    }
    for(i=0; i<indices.length; i++){
        temp[indices[i]] = 0
    }
    for(i=0; i<temp.length; i++){
        if(temp[i]!=0){
            answer =answer + temp[i]
        }
    }
    console.log(answer)
    return answer;
}


solution("apporoograpemmemprs",[1, 16, 6, 15, 0, 10, 11, 3])
/*
a p p o r o o g r a p e m m e m p r s
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8
a p o r o o g r a p e m m e m p r s
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 
a p o r o o g r a p e m m e m p s
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 
a p o r o o r a p e m m e m p s
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5  
a p o r o o r a p e m m e m p
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4  
p o r o o r a p e m m e m p
0 1 2 3 4 5 6 7 8 9 0 1 2 3   
p o r o o r a p e m e m p
0 1 2 3 4 5 6 7 8 9 0 1 2   
p o r o o r a p e m e p
0 1 2 3 4 5 6 7 8 9 0 1   
p o r o r a p e m e p
0 1 2 3 4 5 6 7 8 9 0    

---------------
    p   r o   g r a     m m e     r s
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8
배열문제네..a*/