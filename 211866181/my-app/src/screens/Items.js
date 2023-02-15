import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Items() {
  return (
    <div className='container'>
      <h3 className='text-center'>Welcome to Our menu</h3>
      <button className='btn btn-dark m-2'>
        <Link to='/items/cellphone' className='nav-link'>Cellphones</Link>
      </button>
      <button className='btn btn-dark m-2'>
        <Link to='/items/console' className='nav-link'>Consoles</Link>
      </button>
      <button className='btn btn-dark m-2'>
        <Link to='/items/laptop' className='nav-link'>Laptops</Link>
      </button>

      <Outlet/>
    </div>
  )
}


