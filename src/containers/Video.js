import React from 'react'
import videoBg from '../assets/Marvel.mp4'

function Video() {
  return (
<div className='main h-full w-full mb-50'>
        <div className="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-10 "></div>
        <video className='h-full w-full object-cover -mt-[100px]' autoPlay loop muted src={videoBg}  /> 
        <div className='content absolute w-full h-full top-0 flex flex-col items-center justify-center text-white'>
            <h1 className="text-9xl font-['Inter'] font-extrabold z-50 tracking-tight">Search. <span className='text-transparent bg-clip-text bg-gradient-to-br  from-cyan-300 to-blue-600'>Review.</span></h1>
            <h1 className="text-5xl font-['Inter'] font-bold tracking-tight">React to movies. State your opinion.</h1>
        </div>
    </div>
  )
}

//got around the irritating border by setting dark mode on as default, sort of a cop out but works
//probably should change dark mode background to a darker black colour

export default Video;