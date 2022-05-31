import React from 'react'
import Carousel from './Carousel'
import Categories from './Categories'
import Footer from './Footer'
import GetInTouch from './GetInTouch'
import Header from './Header'
import Jumbo from './Jumbo'
import LatestBlog from './LatestBlog'
import Testimonials from './Testimonials'
import TopProducts from './TopProducts'

function Main() {
  return (
    <React.Fragment>
    <Header />
    <Carousel />
    <Categories />
    <TopProducts />
    <Jumbo />
    <LatestBlog />
    <Testimonials />
    <GetInTouch />
    <Footer />
    </React.Fragment>
  )
}

export default Main