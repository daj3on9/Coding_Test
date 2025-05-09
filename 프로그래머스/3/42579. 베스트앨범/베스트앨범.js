function solution(genres, plays) {
  const genrePlayMap = new Map(); 
  const genreSongMap = new Map(); 

  
  genres.forEach((genre, i) => {
    genrePlayMap.set(genre, (genrePlayMap.get(genre) || 0) + plays[i]);

    if (!genreSongMap.has(genre)) genreSongMap.set(genre, []);
    genreSongMap.get(genre).push(i); 
  });

  return [...genrePlayMap.entries()]
    .sort((a, b) => b[1] - a[1]) 
    .flatMap(([genre]) =>
      genreSongMap
        .get(genre)
        .sort((a, b) => plays[b] - plays[a] || a - b) 
        .slice(0, 2)
    );
}
