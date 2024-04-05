import React from 'react'
import Hero from './components/Hero'
import Companies from './components/Companies'
import Features from './components/Features'
import Trusted from './components/Trusted'
import Quote from './components/Quote'
import Price from './components/Price'
import Questions from './components/Questions'
import Banner from './components/Banner'

const Home = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <Features />
      <Trusted />
      <Quote />
      <Price />
      <Questions />
      <Banner />
    </div>
  )
}

export default Home