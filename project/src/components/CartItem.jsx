import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../store/slice/cartSlice'

const CartItem = ({item}) => {
const dispatch = useDispatch()

  function handleRemoveFromCart(){
    dispatch(removeFromCart(item.id))    
  }
  return (
    <>
    <div className='flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl'>
      <div className='flex p-3'>
        <img 
        src={item?.image}
        className='h-28 rounded-lg'
        alt={item?.title}
        />
        <div className='ml-10 self-start space-y-5'>
          <h1 className='text-xl text-white font-bold'>{item?.title}</h1>
          <p className='text-white font-extrabold'>${(item?.price).toFixed(0)}</p>
        </div>
      </div>
      <div>
      <button className='bg-red-950 text-white border-2 border-red-950 rounded-lg font-bold p-4' onClick={handleRemoveFromCart}>Remove from cart</button>
      </div>
    </div>
    </>
  )
}

export default CartItem