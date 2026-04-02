import { Canvas } from "@react-three/fiber"
import { workExperiences } from '../constants/index.js';
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import CanvasLoader from "../components/CanvasLoader.jsx"
import Developer from "../components/Developer.jsx";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Experience = () => {
    const [animationName, setAnimationName] = useState('idle');
    const headingRef = useScrollAnimation();
    const listRef = useScrollAnimation();

    return (
        <section className="c-space my-20">
            <div className="w-full text-white-600 max-w-7xl mx-auto px-6 sm:px-10">
                <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
                    <h3 ref={headingRef} className="scroll-hidden head-text">Professional Experience</h3>
                    <a
                        href="/assets/AmirjonUlmasovResume.pdf"
                        download
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/20 bg-white text-black text-sm font-medium shadow-sm hover:shadow-md hover:bg-black hover:text-white transition-all duration-300 group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download CV
                    </a>
                </div>
                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={1} />
                            <spotLight position={[10,10,10]} angle={0.15} penubra={1} />
                            <directionalLight position={[10,10,10]} intensity={1}/>
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}/>
                            <Suspense fallback={<CanvasLoader />}>
                                <Developer rotation-y={0.2} position-y={-3} scale={3} animationName={animationName}/>
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="work-content">
                        <div ref={listRef} className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map(({ id, name, pos, icon, duration, title, animation }) => (
                                <div
                                    key={id}
                                    className="scroll-child work-content_container group"
                                    onClick={() => setAnimationName(animation.toLowerCase())}
                                    onPointerOver={() => setAnimationName(animation.toLowerCase())}
                                    onPointerOut={() => setAnimationName('idle')}
                                >
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img src={icon} alt="logo" className="w-full h-full"/>
                                        </div>
                                        <div className="work-content_bar"/>
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-black">{name}</p>
                                        <p className="text-sm mb-5 text-black">{pos} -- {duration}</p>
                                        <ul className="list-disc list-outside pl-4 space-y-1">
                                            {title.split(/(?<=\.)\s+(?=[A-Z])/).map(s => s.trim()).filter(Boolean).map((sentence, i) => (
                                                <li key={i} className="group-hover:text-black transition ease-in-out duration-500 text-black text-sm">{sentence}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
