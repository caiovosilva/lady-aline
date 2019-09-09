import React from 'react'

export default function CartItem ({ item, value }) {
  const { id, title, img, price, total, count } = item
  const { alterQuantity, removeItem } = value

  return (
    <div className='row my-2 text-capitalize text-center'>
      <div className='col-10 mx-auto col-lg-2'>
        <img
          src={img}
          style={{ width: '5rem', height: '5rem' }}
          className='img-fluid'
          alt='product'
        />
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>produto: </span>
        {title}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>preço: R$</span>
        {price}
      </div>
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div>
            <span className='btn btn-black mx-1' onClick={() => alterQuantity(id, -1)}>
                            -
            </span>
            <span className='btn btn-black mx-1'>{count}</span>
            <span className='btn btn-black mx-1' onClick={() => alterQuantity(id, 1)}>
                            +
            </span>
          </div>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <div className='cart-icon' onClick={() => removeItem(id)}>
          <i className='fas fa-trash' />
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <strong>total : R$ {total}</strong>
      </div>
    </div>
  )
}
