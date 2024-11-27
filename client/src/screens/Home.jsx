import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v4/post/getallposts`)
        .then((d) => {
            if(d.data.success){
                setData(d.data.allposts)
                console.log(d.data.allposts)
            }
        })
        .catch((err) => console.log(err))
      }, [])

  return (
    <div className='w-full p-[20px_4%] lg:p-[40px_10%]'>


        {
            data.length > 0 ? <>
            <div className='w-full flex items-center justify-center mt-8'>
        <h2 className='inline-block text-[20px]  text-semibold bg-gradient-to-tr from-violet-500 to-violet-200 bg-clip-text text-transparent'>My Writings</h2>
        </div>
                <div className='w-full mt-5 grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-4 lg:mt-10'>
                {
                    data.map((e,i) => {
                        return <div className=''>
                            <img className='w-[80%] lg:w-full h-[240px] object-cover lg:h-[280px] rounded-lg' src={e.cover} alt="" />
                            <div className='mt-3'></div>
                            <Link to={`/viewpost/${e._id}`} className='font-semibold capitalize mt-3'>{e.title}</Link>
                            <p className='text-[14px] text-slate-300'>{e.desc.length > 18 ? e.desc.slice(0,18)+'...' : e.desc}</p>
                        </div>
                    })
                }
            </div>
            </>
            : 
            <div className='pt-10'>
                <p className='text-center'>You don't have any post. <Link to={'/createpost'} className='text-cyan-300 underline'>Create post</Link></p>
            </div>

           
        }
    </div>
  )
}

export default Home