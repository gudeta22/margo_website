import React from 'react'
import HomeComponent from '../Components/HomeComponent'
import AboutComponent from '../Components/AboutComponent'
import ServiceComponents from '../Components/ServiceComponents'
import ProductComponent from '../Components/ProductComponent'

function Home() {
  return (
    <div>
        <HomeComponent />
        <AboutComponent />
        <ServiceComponents />
        <ProductComponent />
    </div>
  )
}

export default Home