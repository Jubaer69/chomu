import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function View() {
    const {id} = useParams()
    const [data, setData] = useState(null)
    const [jub, setJub] = useState(false)

    useEffect(() => {
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v4/post/viewpost`, {id}, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((d) => {
            if(d.data.success){
                setData(d.data.viewpost)
                setJub(true)
            }
        })
        .catch((err) => setJub(false))
    }, [])

  return (
    <div className='w-full p-[20px_4%] lg:p-[40px_10%] '>
        {
            jub ? 
                (data ? <div>
                    <img className='w-full h-auto object-cover lg:w-auto rounded-lg' src={data.cover} alt="" />
                    <div className='mt-5'>
                        <h2 className='text-[22px] capitalize font-bold lg:text-[24px]'>{data.title}</h2>
                        <p className=' first-letter:capitalize leading-[28px] lg:leading-[32px] mt-3 lg:text-[18px]'>{data.desc}</p>
                    </div>
                </div>
                : 
                <div>No post found</div>)

                : <p>Loading...</p>
                
            
        }
    </div>
  )
}

export default View