import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'


function Github() {
  const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/NoushinIbrahim").then(respnse => respnse.json())
    //     .then(data => {console.log(data);
    //         setdata(data)
    //     })
    // }, [])
  return (
    <div className='text-center m-2 bg-orange-700 text-white p-4 text-3xl'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  )
}

export default Github

export const githubinfoloader = async ()=>{
  const response = await fetch("https://api.github.com/users/NoushinIbrahim");
  return response.json()

}