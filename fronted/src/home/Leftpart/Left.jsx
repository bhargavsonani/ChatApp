import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

function Left() {
  return (
    <div className=' text-gray-300 w-[30%] bg-black '>
        <Search/>
        <div className='flex-1 overflow-y-auto'  style={{minHeight:"calc(84vh - 8vh)"}}>
        <Users/>
      </div>
        <Logout/>
    </div>
  )
}

export default Left