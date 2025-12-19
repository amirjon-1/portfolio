import HackerRoom from '../components/HackerRoom'
import React from "react";

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden" id="home">
            <div className="w-full h-full absolute inset-0">
                <HackerRoom />
            </div>
            <div className="relative z-10 text-center px-5">
                <h1 className="text-6xl md:text-8xl font-bold text-black mb-4 tracking-tight">
                    Solutions That Matter.
                </h1>
            </div>
        </section>
    )
}

export default Hero