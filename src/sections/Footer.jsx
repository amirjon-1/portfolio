import React from 'react'


const Footer = () => {
    return(
        <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>

            <div className='text-black flex gap-2'>
                <p> Amirjon | amirjon5321@gmail.com</p>


            </div>

            <div className='flex gap-3'>
            <a href='https://github.com/amirjon-1' target='_blank'> 
                <div className='social-icon'>
                    <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2'/>
                </div>
                </a>
                <a href='https://www.linkedin.com/in/amirjon-ulmasov-1b163b267/' target='_blank'> 
            <div className='social-icon'>
                    <img src="/assets/link.png" alt="linkedin" className='w-1/2 h-1/2'/>
                </div>
                </a>
            </div>
            
            <p className='text-black'>© 2024 Amirjon. All Rights Reserved</p>
        </section>

    )    
}

export default Footer