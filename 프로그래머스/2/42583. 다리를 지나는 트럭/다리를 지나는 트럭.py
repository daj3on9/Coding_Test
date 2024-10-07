from collections import deque

def solution(bridge_length, weight, truck_weights):
    answer = 0
    bridge = deque([0] * bridge_length)  # 다리 위에 있는 트럭을 표현하는 큐
    bridge_weight = 0  # 현재 다리 위의 총 무게
    truck_weights = deque(truck_weights)  # 대기 중인 트럭들
    
    while truck_weights or bridge_weight > 0:  # 대기 트럭이 있거나 다리 위에 트럭이 있을 때 반복
        answer += 1
        
        # 다리의 맨 앞 트럭이 다리를 지나면 무게에서 제거
        bridge_weight -= bridge.popleft()
        
        if truck_weights:  # 대기 중인 트럭이 남아 있을 때
            if bridge_weight + truck_weights[0] <= weight:  # 다리가 견딜 수 있는 무게를 넘지 않으면
                truck = truck_weights.popleft()  # 트럭을 다리로 올림
                bridge.append(truck)  # 다리 끝에 트럭을 추가
                bridge_weight += truck  # 다리 위 총 무게에 추가
            else:
                bridge.append(0)  # 트럭이 올라갈 수 없으면 0을 추가 (빈 공간)
    
    return answer