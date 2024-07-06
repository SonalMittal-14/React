import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className='fixed flex flex-wrap bottom-12 left-[30%]  px-2 '>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button  onClick={() => setColor("red")}   className='outline-none px-4 bg-red-600 py-1 rounded-full text-white shadow-lg'>Red</button>
            <button  onClick={() => setColor("green")}  className='outline-none px-4 bg-green-600 py-1 rounded-full text-white shadow-lg'>Green</button>
            <button  onClick={() => setColor("blue")}   className='outline-none px-4 bg-blue-600 py-1 rounded-full text-white shadow-lg'>Blue</button>
            <button  onClick={() => setColor("yellow")}   className='outline-none px-4 bg-yellow-600 py-1 rounded-full text-white shadow-lg'>Yellow</button>
            <button  onClick={() => setColor("pink")}   className='outline-none px-4 bg-pink-600 py-1 rounded-full text-white shadow-lg'>Pink</button>
            <button  onClick={() => setColor("purple")}   className='outline-none px-4 bg-purple-600 py-1 rounded-full text-white shadow-lg'>Purple</button>
            <button  onClick={() => setColor("white")}   className='outline-none px-4 bg-white py-1 rounded-full text-black shadow-lg'>White</button>
            <button  onClick={() => setColor("black")}   className='outline-none px-4 bg-black py-1 rounded-full text-white shadow-lg'>Black</button>
          </div>
        </div>
      <div className='w-full min-h-screen ' style={{backgroundColor: color }}>
      </div>
        
    </>
  )
}

export default App
