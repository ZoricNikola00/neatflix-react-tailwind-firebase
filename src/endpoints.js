const myKey='72de8895bb64376912ef844faac64a10'
export const endpoints={
    latest:`https://api.themoviedb.org/3/movie/latest?api_key=${myKey}&language=en-US`,
    trending:` https://api.themoviedb.org/3/movie/now_playing?api_key=${myKey}&language=en-US&page=1`,
    popular:` https://api.themoviedb.org/3/movie/popular?api_key=${myKey}&language=en-US&page=1`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${myKey}&language=en-US&page=1`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${myKey}&language=en-US&page=1`,
}