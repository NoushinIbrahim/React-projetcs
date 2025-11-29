
import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authservice from './appwrite/auth.js'
import {login, logout} from './store/authslice.js'
import {Header, Footer} from './components/index.js'
import { Outlet } from 'react-router-dom'


function App() {
    const [loading, setloading] = useState(true)
    const dispatch = useDispatch()

    useEffect(()=>{
      authservice.getCurrentUser()
      .then((userdata)=>{
        if (userdata) {
          dispatch(login({userdata}))
        }else{
          dispatch(logout())
        }
      })
      .finally(()=> setloading(false))
    }, [])
 
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-btween bg-gray-400' >
      <div className='w-full block'>
        <Header />
        <main>
          todo:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
