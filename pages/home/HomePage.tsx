import { Main } from 'next/document'
import React from 'react'
import Category from '../category/components/Main'
import HeroSliderMain from '../heroSlider/components/Main'
import ProductGrid from '../productGrid/Main'

const HomePage = () => {
  return (
    <>
    <HeroSliderMain/>
    <Category/>
    <ProductGrid/>
    </>
  )
}

export default HomePage