import { useCallback, useEffect, useState, useRef } from 'react'


function App() {
  const [length, setlength] = useState(6)
  const [numberallowed, setnumberallowed] = useState()
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState('')

  // ref hook
  const passwordref = useRef(null)

  const passwordgenerator = useCallback(()=>{
    let pass = ''
    let str = 'ZXCVBNMLKJHGFDSAQWERTYUIOPzxcvbnmasdfghjklqwertyuiop'
      if (numberallowed) str+= '0123456789';
      if (charallowed) str+= '@#$%^&*()_+:"?><~';

      for (let i = 1; i <=length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }

      setpassword (pass)

  }, [length, numberallowed, charallowed, setpassword])

  const copypassword = useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])

    useEffect(()=>{
      passwordgenerator()
    }, [length, numberallowed, charallowed, passwordgenerator])

  return (
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-b-lg px-4 my-8 text-orange-400 bg-gray-800 p-5'>
       <h1 className='text-white text-center my-3 p-'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 bg-white '
        placeholder='password'
        readOnly
        ref={passwordref}
        />
        <button className='outline-none bg-blue-700 text-white px-3 py0.5 shrink-0 cursor-pointer' onClick={copypassword}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberallowed}
          id='numberinput'
          onChange={()=>{
            setnumberallowed((prev)=> !prev)
          }} />
          <label htmlFor="numberinput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charallowed}
          id='charallowed'
          onChange={()=>{
            setcharallowed((prev)=>!prev)
          }}
          />
          <label htmlFor="charallowed">Charaters</label>
        </div>
      </div>
    </div>
    
  )
}

export default App
