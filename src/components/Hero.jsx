import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  useEffect(() => {
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
    });
  }, []);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {/* gsap clips id, z-index positions, scroll text animation */}
      <div id='bg-video' className='h-full w-full relative z-40'>
        <video
          autoPlay
          muted
          loop
          className='h-full w-full object-cover z-0'
        >
          <source src='assets/Aurora7s.mp4' type='video/mp4' />
        </video>
        <div className='absolute inset-0 flex items-end justify-end p-5'>
          <h1 className='text-blue-200 text-7xl font-bold z-50'>XCT Studio</h1>
        </div>
      </div>
      <div className='absolute inset-0 flex items-end justify-end p-5 z-0'>
        {/* text shadow drop-shadow-[0px_0px_20px_rgba(0,255,145,1)] */}
        <h1 className='text-black text-7xl font-bold drop-shadow-[0px_0px_20px_rgba(0,255,145,1)]'>XCT Studio</h1>
      </div>
    </div>
  );
}

export default Hero;