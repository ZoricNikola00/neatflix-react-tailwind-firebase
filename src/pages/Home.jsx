import React from 'react'
import Categories from '../components/Categories'
import Main from '../components/Main'
import { useGlobalContext } from '../context'

const Home = () => {
    const myKey=TMDB_API_KEY
    const {type}=useGlobalContext()
    const endpoints={
   
       onair:` https://api.themoviedb.org/3/tv/on_the_air?api_key=${myKey}&language=en-US&page=1`,
       trending:` https://api.themoviedb.org/3/${type}/now_playing?api_key=${myKey}&language=en-US&page=1`,
       popular:` https://api.themoviedb.org/3/${type}/popular?api_key=${myKey}&language=en-US&page=1`,
       topRated: `https://api.themoviedb.org/3/${type}/top_rated?api_key=${myKey}&language=en-US&page=1`,
       upcoming: `https://api.themoviedb.org/3/${type}/upcoming?api_key=${myKey}&language=en-US&page=1`,
   }

  return (
    <>
        <Main/>
        {type==='tv' && <Categories category={'On Air'} endpoint={endpoints.onair}/>}
        {type==='movie' && <Categories category={'UpComing'} endpoint={endpoints.upcoming}/>}
        <Categories category={'Popular'} endpoint={endpoints.popular}/>
        <Categories category={'Top Rated'} endpoint={endpoints.topRated}/>
        {type==='movie' && <Categories category={'Trending'} endpoint={endpoints.trending}/>}
    </>
  )
}

export default Home
