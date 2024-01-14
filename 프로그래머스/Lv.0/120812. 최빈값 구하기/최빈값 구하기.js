function solution(array) {
    var count = {}; // 빈도를 저장할 객체
    var answer = -1; // 최종 반환 값
    var maxFrequency = 0; // 최대 빈도 수

    array.forEach(num => {
        count[num] = (count[num] || 0) + 1; // 나올 때마다 빈도수 1씩 증가

        if (count[num] > maxFrequency) {
            answer = parseInt(num);
            maxFrequency = count[num];
        } else if (maxFrequency === count[num] && maxFrequency > 1) {
            answer = -1;
        }
    });

    if (maxFrequency === 1) {
        answer = array.length === 1 ? array[0] : -1; // 모든 숫자가 1번씩 나온 경우
    }

    return answer;
}