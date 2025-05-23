# [level Lv.0] 짝수는 싫어요 - 120813 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120813?language=javascript) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.05 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 1월 0일 23:25:34

### 문제 설명

<p>정수 <code>n</code>이 매개변수로 주어질 때, <code>n</code> 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>n</code> ≤ 100</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>10</td>
<td>[1, 3, 5, 7, 9]</td>
</tr>
<tr>
<td>15</td>
<td>[1, 3, 5, 7, 9, 11, 13, 15]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 #1</p>

<ul>
<li>10 이하의 홀수가 담긴 배열 [1, 3, 5, 7, 9]를 return합니다.</li>
</ul>

<p>입출력 #1</p>

<ul>
<li>15 이하의 홀수가 담긴 배열 [1, 3, 5, 7, 9, 11, 13, 15]를 return합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
>
> 
### 사용한 메소드 :

---

- **push() 함수**
    
    배열 끝에 값 추가하기
    
    배열 끝에 하나 이상의 요소를 추가하는 함수
    
    배열의 새로운 길이 반환
    
    객체도 추가 가능
    
    ```jsx
    const arr = [1,2,3];
    
    arr.push(4); //배열 끝에 4를 추가
    console.log(arr); //출력 값 : [1,2,3,4]
    
    arr.push(5,6,7); //배열 끝에 요소 여러 개 추가
    console.log(arr); // 출력 값 : [1,2,3,4,5,6,7]
    
    const totalElements = arr.push(8);
    console.log(totalElements) // 출력 값 : 8
    
    const myArray = []; //빈 배열 생성
    
    const object1 = {name: "John", age: 30};
    const object2 = {name: "Jane", age: 25};
    
    myArray.push(object1); // 배열의 끝에 객체 추가
    myArray.push(object2);
    
    console.log(myArray); // 출력: [{name: 'John', age: 30}, {name: 'Jane', age: 25}]
    ```
    
    → push 함수 사용하지 않고 배열의 끝에 값을 추가 하는 방법
    
    - concat()  함수
        
        ```jsx
        const arr = [1, 2, 3];
        const newArr = arr.concat(4);
        console.log(newArr); // 출력: [1, 2, 3, 4]
        ```
        
    - 스프레드 문법 사용
        
        ```jsx
        const arr = [1,2,3];
        const newItem = 4;
        **const newArr = [...arr, newItem] //스프레드 문법 사용**
        console.log(newArr); // 출력 : [1,2,3,4]
        ```
        
    - length 속성 이용
        
        효율적이진 않음!
        
        ```jsx
        const arr = [1, 2, 3];
        arr[arr.length] = 4;
        console.log(arr); // 출력: [1, 2, 3, 4]
        ```
