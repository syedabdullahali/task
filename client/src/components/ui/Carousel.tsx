import React, { ReactNode, useEffect, useState } from 'react'

interface CarouselProps {
    children: ReactNode[]
}

const Carousel = ({ children }: CarouselProps) => {
    const scrollLength = children.length
    const [scroll,setScroll] = useState(0)
    const [isMouseOver,setMouseOver] = useState(false)


   useEffect(()=>{
    if(!isMouseOver){
    const interval = setInterval(()=>{
        setScroll(prev=>(prev+1)%scrollLength) 
    },3000)
    return ()=>clearInterval(interval)
     }
   },[scrollLength,isMouseOver])

    return (
        <div  onMouseLeave={()=>{setMouseOver(false)}} onMouseEnter={()=>{setMouseOver(true)}}>
        <div className='w-full  overflow-hidden duration-200 cursor-pointer ' >
            <div  className='flex duration-700' style={{ width: `${ scrollLength * 100 }%` ,transform:`translateX(-${scroll * (100 / scrollLength)}%)` }}>
                {children}
            </div>
        </div>
                    <div className='flex justify-center  w-full cursor-pointer '>
       {new Array(scrollLength).fill(1).map((_, index) => (
                <span
                    onClick={()=>{setScroll(index)}}
                    key={index}
                    className={`${scroll===index?"bg-blue-600 ":"bg-gray-600"} left-1/2 z-10 h-3 w-3 rounded-full inline-block ml-1`}
                ></span>
            ))}   
            
            </div>
        </div>
    )
}

export { Carousel }
