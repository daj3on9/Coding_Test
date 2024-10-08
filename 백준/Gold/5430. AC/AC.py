from collections import deque

N = int(input())

for _ in range(N):
    p = list(input())  # 명령어 리스트
    n = int(input())  # 숫자 개수
    input_string = input().strip()

    # 숫자 배열 처리
    if input_string == "[]":
        dq = deque()
    else:
        dq = deque(map(int, input_string[1:-1].split(',')))

    # 반전 여부를 추적하는 변수
    is_reversed = False
    error_flag = False

    # 명령어 처리
    for cmd in p:
        if cmd == 'R':
            is_reversed = not is_reversed  # 실제로 뒤집지 않고 반전 상태를 기록
        elif cmd == 'D':
            if not dq:
                print("error")
                error_flag = True
                break
            else:
                if is_reversed:
                    dq.pop()  # 반전 상태에서는 뒤에서 제거
                else:
                    dq.popleft()  # 정방향 상태에서는 앞에서 제거

    # 명령어 처리가 완료된 후 결과 출력
    if not error_flag:
        if is_reversed:
            dq.reverse()  # 마지막에만 실제로 뒤집기
        print("[" + ",".join(map(str, dq)) + "]")
