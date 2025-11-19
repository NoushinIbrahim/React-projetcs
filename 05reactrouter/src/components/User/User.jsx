import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-orange-700 text-white p-4 text-center m-1'>User: {userid} </div>
  )
}

export default User