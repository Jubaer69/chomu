import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='w-full min-h-screen bg-black text-white overflow-x-hidden'>
        <header className='w-full p-[15px_4%] lg:p-[15px_10%] flex items-center justify-between'>
          <h2 className='text-[22px] lg:text-[24px] font-semibold'>Golpo</h2>
          <div className='flex items-center gap-5 text-[16px] lg:gap-8'>
            <Link to={'/'}>Home</Link>
            <Link to={'/createpost'}>Create Post</Link>
          </div>
        </header>
        <Outlet />
    </div>
  )
}

export default App
