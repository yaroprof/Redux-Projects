import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '../../components/Slider/Slider';
import Category from '../../components/Category/Category';
// import ProductList from '../../components/ProductList/ProductList';

import './HomePage.scss';
import { fetchCategories } from '../../store/categorySlice';

export default function HomePage() {

  const dispatch = useDispatch();

  const{ data: categories, status: categoryStatus } = useSelector((state) => state.Category)

  useEffect(() => {
    dispatch(fetchCategories())
  })

  return (
    <div className='home-page'>
      <Slider />
      <Category categories={categories} status={categoryStatus} />
      {/* <ProductList /> */}
    </div>
  )
}
