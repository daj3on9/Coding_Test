from collections import deque

def solution(bridge_length, weight, truck_weights):
    answer = 0
    bridge = deque([0] * bridge_length)
    bridge_weight = 0  # 현재 다리 위 무게
    truck_weights = deque(truck_weights)
    
    while truck_weights or bridge_weight > 0:
        answer += 1
        
        bridge_weight -= bridge.popleft()
        
        if truck_weights:
            if bridge_weight + truck_weights[0] <= weight:
                truck = truck_weights.popleft()
                bridge.append(truck)
                bridge_weight += truck
            else:
                bridge.append(0)
                
    return answer