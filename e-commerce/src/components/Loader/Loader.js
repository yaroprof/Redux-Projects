import React from 'react'

const Loader = () => {
  return (
    <div className='container'>
      <div className="flex flex-center loader">
        <img src={spinner} alt="loader" />
      </div>
    </div>
  )
}

export default Loader