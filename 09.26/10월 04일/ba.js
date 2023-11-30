function solution(intStrs, k, s, l) {
    var answer = [];
    var kbig = 0;
    for(a=0; a<intStrs.length; a++){
    var temp = intStrs[a]
    var temp1 = ''
    for(i=s; i<(s+l); i++){
       temp1 = temp1 + temp.charAt(i)
    }
    if(temp1>k){
           answer[kbig] = temp1
            kbig = kbig + 1
           }
    }
    console.log(answer)
    return answer;
}
solution(["0123456789","9876543210","9999999999999"],50000,5,5)