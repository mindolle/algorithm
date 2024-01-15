function solution(s){
    var answer = true;
    s = s.toUpperCase();
    var num = 0;
    
    for(let a = 0; a < s.length; a++) {
        if(s[a] === "P") { num++ };
        if(s[a] === "Y") { num-- };
        
        answer = num === 0;
    }

    return answer;
}