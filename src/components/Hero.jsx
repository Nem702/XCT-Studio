import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

useGSAP(() => {
  gsap.fromTo("#bg-video", {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
  },
  {
    clipPath: 'polygon(0 0, 100% 0, 83% 93%, 12% 88%)',
    scrollTrigger: {
      trigger: '#bg-video',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
    }
  })
})


  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
        <div className='h-full w-full'>
          <video
              id='bg-video'
              autoPlay
              muted
              loop
              className='h-full w-full object-cover'
          >
              <source src='assets/Aurora7s.mp4' type='video/mp4' />
          </video>
        </div>
        <div>
          <h1 className='absolute bottom-5 right-5 z-40 text-blue-200 text-7xl font-bold'>XCT Studio</h1>
        </div>
    </div>
  )
}

export default Hero