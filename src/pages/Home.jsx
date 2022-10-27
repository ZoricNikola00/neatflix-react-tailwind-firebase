import React from 'react'
import Categories from '../components/Categories'
import Main from '../components/Main'
import { endpoints } from '../endpoints'

const Home = () => {
  return (
    <>
        <Main/>
        <Categories category={'UpComing'} endpoint={endpoints.upcoming}/>
        <Categories category={'Popular'} endpoint={endpoints.popular}/>
        <Categories category={'Top Rated'} endpoint={endpoints.topRated}/>
        <Categories category={'Trending'} endpoint={endpoints.trending}/>
    </>
  )
}

export default Home