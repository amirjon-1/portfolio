import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import {Canvas} from "@react-three/fiber"

import HackerRoom from '../components/HackerRoom'
import { Suspense, useContext } from "react"
import CanvasLoader from "../components/CanvasLoader"
// import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants"
import Target from "../components/Target"
import Button from "../components/Button"

import React, { useState, useEffect } from "react";



const Hero = () => {

    const isSmall = useMediaQuery({maxWidth:400});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth:768, maxWidth:1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    const phrases = ["Transforming Ideas", "Building the Future", "Innovating with Code", "Solving Problems", "Empowering Ideas"];
    const [currentPhrase, setCurrentPhrase] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
        }, 1800);

        return () => clearInterval(interval); 
    }, [phrases.length]);


    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            {/* <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 text-black">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans"> Hi, I am Amir <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-black text-center transition-all duration-500 ease-in-out">
                {phrases[currentPhrase]}
            </p>
            </div> */}

            <div className="w-full h-full absolute pt-150">
            {/* <Leva /> */}
{/* 
                <Canvas className="w-full h-full">
                    <Suspense fallback={CanvasLoader}>

                    <PerspectiveCamera makeDefault position={[0,0,30]} />

                    <HackerRoom 
                     position= {sizes.deskPosition} 
                     rotation= {[0, 3.6, 0]} 
                      scale= {sizes.deskScale}
                    // position= {[x.positionX, x.positionY, x.positionZ]} 
                    // rotation= {[x.rotationX, x.rotationY, x.rotationZ]} 
                    //  scale= {[x.scale, x.scale, x.scale]}
                     />
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10,10]} intensity={0.5} />
                    <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}/>
                    </Suspense>
                 
                </Canvas> */}

<HackerRoom />

            </div>

        </section>
    )
}

export default Hero