import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import GenreMovieList from '../Components/GenreMovieList'
import Component  from './../Components/Footer'
function Home() {
  return (
    <div>
      <Header/>
      <Hero/>

      <GenreMovieList/>

      <Component/>
    </div>
  )
}

export default Home
