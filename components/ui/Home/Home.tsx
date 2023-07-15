'use client'
import React from 'react'
import Banner from '../Banner/Banner'
import Gallery from '../Gallery/Gallery'
import Navbar from '../Navbar/Navbar'
import Product from '../Product/Product'
import Promotion from '../Promotions/Promotion'
import Subscribe from '../Subscribe/Subscribe'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='mx-32'>
        <Navbar/>
        <Banner/>
        <Promotion/>
        <Product/>
        <Gallery/>
        <Subscribe/>
    </div>
  )
}

export default Home