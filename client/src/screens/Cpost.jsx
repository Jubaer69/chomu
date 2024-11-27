import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Cpost() {

    const [data, setData] = useState({
        cover: '',
        title: '',
        desc: ''
    })

    const nav = useNavigate()

    function handlepost(e){
        e.preventDefault();

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v4/post/createpost`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((d) => {
            if(d.data.success){
                alert(d.data.message)
                nav('/')
            }
        })
        .catch((err) => console.log(err))
    }

  return (
    <div className='w-full p-[30px_4%] lg:p-[50px_10%]'>
        <div className='w-full flex items-center justify-center mt-8'>
        <h2 className='inline-block text-[20px]  text-semibold bg-gradient-to-tr from-violet-500 to-violet-200 bg-clip-text text-transparent'>Create Post</h2>
        </div>

        <form onSubmit={handlepost} className='flex  items-center flex-col gap-3 mt-6'>
            <input
                className='w-full p-3 border border-white/[0.5] rounded-md bg-transparent'
            type="text" placeholder='Cover image url' value={data.cover} onChange={(e) => setData(p => ({...p, cover: e.target.value}))} />
            <input
                className='w-full p-3 border border-white/[0.5] rounded-md bg-transparent'
            type="text" placeholder='Title' value={data.title} onChange={(e) => setData(p => ({...p, title: e.target.value}))} />
            <textarea
                className='w-full p-3 border border-white/[0.5] rounded-md bg-transparent'
            type="text" placeholder='Description' value={data.desc} onChange={(e) => setData(p => ({...p, desc: e.target.value}))} />
            <input className='w-full bg-violet-300 text-black font-semibold p-3 rounded-md' type="submit" value={'Post'} />
        </form>
    </div>
  )
}

export default Cpost