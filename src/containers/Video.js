import React from 'react'
import videoBg from '../assets/Marvel.mp4'

function Video() {
  return (
<div className='main h-full w-full'>
        <div className="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-10"></div>
        <video className='h-full w-full object-cover' autoPlay loop muted src={videoBg}  /> 
        <div className='content absolute w-full h-full top-0 flex flex-col items-center justify-center text-white'>
            <h1>Guess Who Got It To Work Yeeeeeee</h1>
        </div>
    </div>
  )
}

//got around the irritating border by setting dark mode on as default, sort of a cop out but works
//probably should change dark mode background to a darker black colour

export default Video;