import React, { useRef } from 'react'

import { navLinks } from '../../constants'
const Navbar = () => {
    return (
        <nav className='fixed inset-x-0 top-4 z-50 h-16 border-none'>
            <div className='flex size-full items-center justify-between p-4 bg-black text-white'>
                <a href="#home" className='relative ms-10 text-xs uppercase cursor-pointer'>
                    <p>XCT Studio</p>
                </a>
                <div className='items-center justify-between p-4 bg-black text-white'>
                <ul className='flex items-center gap-4'>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
            
        </nav>
    )
}
export default Navbar