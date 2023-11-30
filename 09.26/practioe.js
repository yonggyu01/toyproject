/*
정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk를 만드려고 합니다.

변수 i를 만들어 초기값을 0으로 설정한 후 i가 arr의 길이보다 작으면 다음 작업을 반복합니다.

만약 stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
stk에 원소가 있고, stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 stk의 뒤에 추가하고 i에 1을 더합니다.
stk에 원소가 있는데 stk의 마지막 원소가 arr[i]보다 크거나 같으면 stk의 마지막 원소를 stk에서 제거합니다.
위 작업을 마친 후 만들어진 stk를 return 하는 solution 함수를 완성해 주세요.

1. 변수를 i = 0를 만들어라  (for문 -> 반복작업  i-> 0~ arr.lengthr보다 작을때까지 실행함)
2. stk의 길이를 확인
3-1 조건1) stk가 빈배열이면  arr[i]를  stk[0]에 추가하고 i에 1을 더함
    이제 stk에 원소가 생기게된다.
    조건2) 현재 stk에 생긴 원소가 stk의 마지막원소이다 (원소갯수 1개 => length는 1 이므로 배열에서는 [0]번째)
    stk[0]의 값 => arr[0] 인 상황인데  arr[i]는  1이 더해져서 현재 arr[1]이다
    두 원소를 비교해서 stk[0]의 값이 arr[i] 값보다 작다면 stk[1]에 추가하고
    i의 값에 1을 더한다.
    해당작업을 arr.length 값만큼 i 값을 증가시키며 반복한다.
    
3-2 조건2-1) stk원소 있을때 stk의 마지막  원소 arr[i]보다 크거나 같으면 stk 마지막 원소 stk에서 제거
*/

function solution(arr) {
    var stk = [];
    for(i = 0; i<arr.length; i++){
        if(stk.length == 0){
            stk[0] = arr[i]
            i = i + 1
        }
 
       if(stk[stk.length-i]<arr[i]){
        stk[i] = arr[i]
        i = i + 1
        console.log(i)
        }else if(stk[stk.length-i]>=arr[i]){
            stk.length = stk.length -1
        }      
    }
console.log(stk)
    return stk;
}

solution([1, 4, 2, 5, 3])

// 결과는 1,2,3이 나와야함
