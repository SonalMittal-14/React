import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(6) //6 ya 6 se zada character honge

  const [numberAllowed, setNumberAllowed] = useState(false) // number ya toh password mai hoga ya nahi hogaaa false mtlb nahi hoga true mtlb hoga

  const [charAllowed, setCharAllowed] = useState(false) // special character ya toh password mai hoga ya nahi hogaaa false mtlb nahi hoga true mtlb hoga

  const [password, setPassword] = useState("") // yaha pe hum password generate karvayenge isliye humnai yaha kuch nahi lia hai 


  //useRef Hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    }
    if(charAllowed){
      str += "!@#$%^&*_-+={}[]()`~/?|"
    }

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char) 
      setPassword(pass) 
    }

  } , [length, numberAllowed, charAllowed, setPassword]) // callback ke andar hum apni dependencies dalte h


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,21);
    window.navigator.clipboard.writeText(password)
  } , [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  

  return (
    <>
      <div className='bg-black min-h-screen'>
        <h1 className='text-5xl text-center font-bold font-serif text-white pt-12'>Password Generator</h1>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 pt-8 pb-6 '>
          <div className='flex shadow rounded-lg overflow-hidden md-4 '>
            <input 
            type="text" 
            value = {password}
            className='outline-none w-full py-1 px-3  '
            placeholder='password'
            readOnly 
            ref={passwordRef} 
            />
            <button
            onClick={copyPasswordToClipboard}
            className='bg-blue-700 text-white px-3 py-2 shrink-0 outline-none'>Copy</button>
          </div>

          <div className='flex text-sm gap-x-2'> 
            <div className='flex items-center gap-x-1 pd-8 pt-8'>
              <input type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(event) => {setLength(event.target.value)}}
              />
              <label>Length : {length}</label>
            </div>
            <div className='flex items-center gap-x-1 pt-8' >
              <input type="checkbox" 
              defaultChecked= {numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className='flex items-center gap-x-1 pt-8'>
              <input type="checkbox" 
              defaultChecked= {numberAllowed}
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
              />
              <label htmlFor="characterInput">Special Character</label>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
