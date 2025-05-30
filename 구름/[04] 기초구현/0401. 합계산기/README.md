# [04] 기초구현 : 합계산기

날짜: 2025년 4월 3일  
언어 : js

### 문제

보통의 계산기는 한 번에 하나의 계산 결과만 나타낼 수 있다. 그래서 여러 개의 계산 결과가 필요한 경우에는 이전 계산 결과를 따로 기록해 둬야 하는 번거로움이 있었다.

플레이어는 이러한 점을 해결하기 위해서 **합 계산기**를 만들었다. 합 계산기는 여러 개의 계산식을 입력받은 뒤, 각각의 계산 결과를 모두 합해서 출력하는 기능을 가지고 있다. 합 계산기에 입력할 수 있는 계산식은 아래 조건을 만족해야 한다.

- 계산식은 `<정수> <연산기호> <정수>` 형태이다.
- `<연산 기호>` 에는 더하기, 빼기, 곱하기, 나누기 네 가지 사칙 연산 기호가 들어갈 수 있다. 이때, 나눗셈 결과의 나머지는 버린다.

합 계산기에 입력할 $T$개의 계산식이 주어질 때, 합 계산기의 출력 결과를 구해보자.

### 입력

첫째 줄에 식의 개수 $T$ 가 주어진다.

다음 $T$ 개의 줄에는 계산식이 주어진다.

- $1 \le T \le 100$
- 계산식은 `<정수> <연산 기호> <정수>` 형태로 주어진다.
- `<정수>` 에는 1 이상 1000 이하의 정수가 주어진다.
- `<연산 기호>` 에는 `+` `-` `*` `/` 중 하나의 문자가 주어진다.
- 각각 더하기, 빼기, 곱하기, 나누기 기호를 의미한다.

### 출력

합 계산기가 계산한 결과를 출력하시오.

### 예시

입력

```jsx
3;
1 + 3;
4 / 3;
3 - 2;
```

출력

```jsx
6;
```

---

### 🤧 풀이

입력받은 계산식을 `split`을 사용하여 나눈뒤, `switch`문을 사용하여 각 연산 기호에 맞는 연산을 한다!
