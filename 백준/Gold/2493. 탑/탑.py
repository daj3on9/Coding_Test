import sys

N = int(sys.stdin.readline())  # 첫 번째 입력: 숫자의 개수
top = list(map(int, sys.stdin.readline().split()))  # 두 번째 입력: 탑의 높이 리스트
answer = [0] * N  
stack = []

for i in range(N):
    while stack and top[stack[-1]] <= top[i]:
        stack.pop()  # 현재 탑보다 작거나 같은 탑을 스택에서 제거
    if stack:
        answer[i] = stack[-1] + 1  # 스택의 맨 위 값이 현재 탑보다 큰 탑의 인덱스
    stack.append(i)  # 현재 탑의 인덱스를 스택에 추가

# 정답 출력
print(" ".join(map(str, answer)))
