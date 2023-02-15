import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { laptopList } from '../../dummy-data'

export default function Laptop() {
  return (
    <div>
      <h5>Pick up your favorite Laptop</h5>

      {laptopList.map(laptop =>(
        <button className='btn btn-light m-1' key={laptop.id}>
          <Link to={`/items/laptop/${laptop.name}`}
           className='nav-link'>{laptop.name}</Link>
        </button>
      ))}

      <Outlet/>
    </div>
  )
}
