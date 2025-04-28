function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = Array(bridge_length).fill(0);
    let bridge_weights = 0;
    
    while (truck_weights.length > 0 || bridge_weights > 0) {
        time++;

        bridge_weights -= bridge.shift();

        if (truck_weights.length > 0) {
            if (bridge_weights + truck_weights[0] <= weight) {
                const truck = truck_weights.shift();
                bridge.push(truck);
                bridge_weights += truck;
            } else {
                bridge.push(0);
            }
        }
    }

    return time;
    
}