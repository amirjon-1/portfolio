import React from 'react'

const Footer = () => {
    return (
        <footer className='c-space py-8 border-t border-gray-200'>
            <div className='max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4'>
                <div className='text-gray-600 text-sm'>
                    <p>© 2024 Amirjon Ulmasov</p>
                </div>

                <div className='flex gap-4'>
                    <a 
                        href='https://github.com/amirjon-1' 
                        target='_blank' 
                        rel="noreferrer"
                        className='w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors'
                    >
                        <img src="/assets/github.svg" alt="github" className='w-5 h-5 brightness-0 invert'/>
                    </a>
                    <a 
                        href='https://www.linkedin.com/in/amirjon-ulmasov-1b163b267/' 
                        target='_blank'
                        rel="noreferrer"
                        className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors'
                    >
                        <img src="/assets/link.png" alt="linkedin" className='w-5 h-5'/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer