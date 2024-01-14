# [level Lv.0] 최빈값 구하기 - 120812 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120812?language=javascript) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.15 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 1월 0일 23:1:52

### 문제 설명

<p>최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 <code>array</code>가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>0 &lt; <code>array</code>의 길이 &lt; 100</li>
<li>0&nbsp;≤&nbsp;<code>array</code>의 원소 &lt; 1000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>array</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[1, 2, 3, 3, 3, 4]</td>
<td>3</td>
</tr>
<tr>
<td>[1, 1, 2, 2]</td>
<td>-1</td>
</tr>
<tr>
<td>[1]</td>
<td>1</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>[1, 2, 3, 3, 3, 4]에서 1은 1개 2는 1개 3은 3개 4는 1개로 최빈값은 3입니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>[1, 1, 2, 2]에서 1은 2개 2는 2개로 최빈값이 1, 2입니다. 최빈값이 여러 개이므로 -1을 return 합니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li>[1]에는 1만 있으므로 최빈값은 1입니다.</li>
</ul>

<hr>

<p>※ 공지 - 2022년 10월 17일 제한 사항 및 테스트케이스가 수정되었습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
>
### 사용한 메소드
- **forEach 메소드**
    
    배열을 순회하여 처리하는 메소드, 배열의 각 요소에 대해 주어진 함수를 순서대로 한 번씩 실행한다.
    
    해당 함수를 통해 배열의 요소를 접근하지 않고 간편하게 배열의 요소 처리 가능
    
    각 요소의 값 뿐만 아니라 인덱스와 배열 자체도 콜백 함수에서 사용 가능
    
    **주어진 함수는 배열의 크기만큼 반복 실행되며, 배열 요소의 개수에 따라 콜백 함수가 호출되는 횟수가 결정**
    
    ```jsx
    arr.forEach(function(currentValue[, index[, array]]) {
        // 실행할 코드
    }[, thisArg]);
    ```
    
    1. `arr`: `forEach()` 함수에 적용할 배열
    2. `function`: `arr` 배열의 각 요소에 적용할 때 호출되는 콜백 함수입니다. 이 함수는 세 개의 매개변수를 가질 수 있습니다.
        - `currentValue` (필수 값): 처리할 현재 요소. 이 매개변수를 통해 현재 요소에 접근 가능
        - `index` (선택 사항): 처리할 현재 요소의 인덱스. 이 매개변수를 사용하여 현재 요소의 인덱스에 접근할 수 있습니다.
        - `array` (선택 사항): `forEach()` 함수를 호출한 배열. 이 매개변수를 사용하여 원본 배열에 접근할 수 있습니다.
    3. `thisArg` (선택 사항): `function`을 실행할 때 `this`로 사용할 객체. 이 매개변수는 필요에 따라 사용됩니다.
    
    반환 값은 항상 `undefined`
    
    참고 사이트 :
    
    [https://codingeverybody.kr/자바스크립트-foreach-함수/](https://codingeverybody.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-foreach-%ED%95%A8%EC%88%98/)
