import React from 'react'

const Hero = () => {
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
        <video
            autoPlay
            muted
            loop
            className='h-full w-full object-cover'
        >
            <source src='assets/Aurora7s.mp4' type='video/mp4' />
        </video>
        <div>
          <h1 className='absolute bottom-5 right-5 z-40 text-blue-200 text-5xl font-semibold'>XCT Studio</h1>
        </div>
    </div>
  )
}

export default Hero