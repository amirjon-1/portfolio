import Globe from "react-globe.gl";
import { useState } from "react";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    
    const handleCopy = () => {
        navigator.clipboard.writeText('amirjon5321@gmail.com');
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }

    return (
        <section className="c-space my-32" id="about">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    {/* Left side - About section in a box */}
                    <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col">
                        <div className="text-center lg:text-left flex-1 flex flex-col">
                            <img 
                                src="/assets/profile.png" 
                                alt="Amir" 
                                className="w-40 h-40 rounded-full object-cover mx-auto lg:mx-0 mb-6"
                            />
                            <h2 className="text-3xl font-semibold text-black mb-6">Hi, I'm Amir</h2>
                            <p className="text-gray-600 text-lg leading-relaxed flex-1">
                                I'm a Williams College student studying Statistics and Computer Science with experience in software engineering, mobile development, and machine learning. I've built full-stack products, redesigned nonprofit websites, and developed mobile apps for real clients. I enjoy solving technical problems, learning new tools, and creating projects that have real impact. I'm open to opportunities in machine learning, software engineering or development.
                            </p>
                        </div>
                    </div>

                    {/* Right side - Globe with Location & Availability */}
                    <div className="flex flex-col h-full">
                        <div className="flex justify-center mb-8 flex-1 flex items-center">
                            <div className="w-full max-w-sm">
                                <Globe 
                                    height={380} 
                                    width={380} 
                                    backgroundColor="rgba(0,0,0,0)" 
                                    backgroundImageOpacity={0.5} 
                                    showAtmosphere 
                                    showGraticules 
                                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg" 
                                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-black mb-3">Location & Availability</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                I work remotely across all timezones. Based in NYC, available for in-person, remote, or hybrid work.
                            </p>
                            <div>
                                <p className="text-sm text-gray-500 mb-2">Contact</p>
                                <button 
                                    onClick={handleCopy}
                                    className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity cursor-pointer"
                                >
                                    <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className="w-4 h-4" />
                                    <span className="font-medium">amirjon5321@gmail.com</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;