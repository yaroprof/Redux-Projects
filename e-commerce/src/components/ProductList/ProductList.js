import React from 'react';

import './ProductList.scss';

export default function ProductList() {
  return (
    <section className='product py-5 bg-ghost-white'>
      <div className="container">
        <div className="product-content">
          <div className="section-title">
            <h3 className="text-uppercase fw-7 text-regal-blue ls-1">Our Products</h3>
          </div>
          <div className="product-items grid">
            <div className="product-item bg-white">
              <div className="product-item-img">
                image
                <div className="product-item-cat text-white fs-13 text-uppercase bg-gold fw-6">name</div>
              </div>
              <div className="product-item-body">
                <h6 className="product-item-title text-pine-green fw-4 fs-15">title</h6>
                <div className="product-item-price text-regal-blue fw-7 fs-18">price</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
