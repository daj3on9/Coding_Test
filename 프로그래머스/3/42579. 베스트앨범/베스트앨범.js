function solution(genres, plays) {
  const genreMap = genres.reduce((map, genre, i) => {
    if (!map.has(genre)) {
      map.set(genre, { total: 0, songs: [] });
    }
    map.get(genre).total += plays[i];
    map.get(genre).songs.push({ id: i, plays: plays[i] });
    return map;
  }, new Map());

  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total) 
    .flatMap(([_, data]) =>
      data.songs
        .sort((a, b) => b.plays - a.plays || a.id - b.id) 
        .slice(0, 2)
        .map(song => song.id)
    );
}
