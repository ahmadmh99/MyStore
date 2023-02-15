import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { consoleList } from '../../dummy-data'

export default function Console() {
  return (
    <div>
      <h5>Pick up your favorite Console</h5>

      {consoleList.map(console =>(
        <button className='btn btn-light m-1' key={console.id}>
          <Link to={`/items/console/${console.name}`}
           className='nav-link'>{console.name}</Link>
        </button>
      ))}

      <Outlet/>
    </div>
  )
}
