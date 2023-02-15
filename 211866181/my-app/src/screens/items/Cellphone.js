import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {  cellList } from '../../dummy-data'

export default function Cellphone() {
  return (
    <div>
      <h5>Pick up your favorite Cellphone</h5>

      {cellList.map(cellphone =>(
        <button className='btn btn-light m-1' key={cellphone.id}>
          <Link to={`/items/cellphone/${cellphone.name}`}
           className='nav-link'>{cellphone.name}</Link>
        </button>
      ))}

      <Outlet/>
    </div>
  )
}
