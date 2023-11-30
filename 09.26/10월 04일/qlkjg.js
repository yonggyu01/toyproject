/*
num리스트의 값중에 음수가 나오면 해당 음수값의 인덱스를 출력하고
없으면 -1 출력하면되겠다
첫번째로 나오라고 했으니
리스트를 읽다가 음수가 발견되면 리턴하고 포문을 바로 종료시키는 방식으로 수식을 구성

1. num리스트의 길이만큼 반복하는 포문을 작성해서
2. 리스트를 하나씩 불러와 0보다 큰지 작은지를 비교한다
3. 만약 0보다 작다면
 i값을  answer에 리턴하고  포문의 i값을 num리스트의 길이로 변경하여 종료시킨다
 4. 0보다 큰 값만 있다면 -1을 answer에 리턴한다.
*/
function solution(num_list) {
    var answer = 0;
    for(i=0; i<num_list.length; i++){
        if(num_list[i]<0){
            console.log(i)
            answer = i
        }else{
            answer = -1
        }
    }
    return answer;
}
solution([12, 4, 15, 46, 38, -2, 15])