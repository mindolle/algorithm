function solution(n) {
    var answer = 1;
    let result = [];
    
    while (answer <= n) {
      if (n % answer === 0) result.push(answer)
      answer++
    }
    const sum = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
}