import React, { useRef } from 'react'

const navItems = ['Item1', 'Item2', 'Item3','Item4','Item5',]

const Navbar = () => {
    const navContainerRef = useRef(null);


  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:instet-x-6'>
        <header>
            <nav className='flex size-full items-center justify-between p-4 bg-black text-white'>
                <div className="flex items-center gap-7">
                    <img src="/assets/logo.png" alt="logo" className='w-10 rounded' />
                </div>
                <div className="flex h-full items-center">
                    <div className="hidden md:block">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className='relative ms-10 text-xs uppercase cursor-pointer'
                        >
                            {item}
                        </a>
                    ))}
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar