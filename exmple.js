/*
for (a = 0; a < 4; a++) {
    var b = []
    var w = ''
    for (d = 3-a; d >= 0; d--) {
        b[d-1] = ' '
        var t = b.length
        }
    // console.log(b)
    for (c = 0; c < a + a + 1; c++) {
        b[t+c] = '*'
        // console.log(x) 
    }
    for(q=0; q<b.length; q++){
        w = w+b[q]
    }
    console.log(w)
}
*/
function solution(str1, str2) {
    var answer = '';
    var t = str1+str2
for(a=0; a<t.length; a++){
    answer = answer + str1.charAt(a)
    answer = answer + str2.charAt(a)
}
console.log(answer)
    return answer;
}

solution("aaaaa","bbbbb")