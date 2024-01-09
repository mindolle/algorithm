function solution(n)
{
    let num=n;
    var answer = 0;
    num=num.toString();
    for (let i = 0; i<num.length; i++) {
        answer+=Number(num[i]);
    }
    return answer;
}