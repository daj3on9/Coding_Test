# [level 0] 가장 큰 수 찾기 - 120899 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120899) 

### 성능 요약

메모리: 10.1 MB, 시간: 0.00 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 05월 16일 09:47:33

### 문제 설명

<p>정수 배열 <code>array</code>가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>array의</code> 길이 ≤ 100</li>
<li>0 ≤ <code>array</code> 원소 ≤ 1,000</li>
<li><code>array</code>에 중복된 숫자는 없습니다.</li>
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
<td>[1, 8, 3]</td>
<td>[8, 1]</td>
</tr>
<tr>
<td>[9, 10, 11, 8]</td>
<td>[11, 2]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>1, 8, 3 중 가장 큰 수는 8이고 인덱스 1에 있습니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>9, 10, 11, 8 중 가장 큰 수는 11이고 인덱스 2에 있습니다.</li>
</ul>

### 문법!!

**공통점**
처음 검색된 위치를 반환한다.결과값은 0부터 시작하는 숫자다.시작 위치와 끝 위치를 지정해줄 수 있다. ex) 변수.find('찾는 문자', 시작 위치, 끝 위치)

**차이점**
찾는 문자가 없는 경우    - find(): -1 반환    - index(): ValueError 에러 발생
사용 가능한 자료형    - find(): 문자열          - 리스트, 튜플, 딕셔너리 자료형에서 사용 시 에러 발생    - index(): 문자열, 리스트, 튜플          - 딕셔너리 자료형에서 사용 시 에러 발생

**✅ 참고**
처음 검색된 위치를 반환하는데, 다른 중복되는 값의 인덱스를 모두 구하고 싶은 경우 filter() 함수를 사용하자filter(function, iterable)
출처: https://sxbxn.tistory.com/35 [∠( ᐛ 」∠)＿:티스토리]

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
