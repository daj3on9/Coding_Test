function solution(numbers) {
    const set = new Set();

    function getPermutations(arr, prefix = "") {
        if (prefix) set.add(Number(prefix)); 
        for (let i = 0; i < arr.length; i++) {
            const newArr = [...arr];
            newArr.splice(i, 1); 
            getPermutations(newArr, prefix + arr[i]);
        }
    }

    getPermutations(numbers.split(""));
    
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++) {
          if (n % i === 0) return false;
        }
        return true;
    }

    return [...set].filter(isPrime).length;

}