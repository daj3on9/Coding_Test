function solution(book_time) {
  function timeToMinutes(time) {
    const [hour, minute] = time.split(":").map(Number);
    return hour * 60 + minute;
  }

  const times = book_time.map(([start, end]) => [
    timeToMinutes(start),
    timeToMinutes(end) + 10, // 청소시간 포함
  ]);

  times.sort((a, b) => a[0] - b[0]);

  const rooms = [];

  for (const [start, end] of times) {
    let used = false;
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i] <= start) {
        rooms[i] = end; // 방 퇴실시간 갱신
        used = true;
        break;
      }
    }
      
    if (!used) {
      rooms.push(end);
    }
  }

  return rooms.length;
}