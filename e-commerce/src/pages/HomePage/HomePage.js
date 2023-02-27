import React from 'react';
import Slider from '../../components/Slider/Slider';
import Category from '../../components/Category/Category';
import ProductList from '../../components/ProductList/ProductList';

import './HomePage.scss';

export default function HomePage() {
  return (
    <div className='home-page'>
      <Slider />
      <Category />
      <ProductList />
    </div>
  )
}
