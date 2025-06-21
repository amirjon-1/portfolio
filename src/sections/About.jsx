import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy= () => {
        navigator.clipboard.writeText ('amirjon5321@gmail.com');
        setHasCopied(true);
        setTimeout( () => {
            setHasCopied=false;
        }, 2000
        )
    }
    return (
      <section className="c-space my-20" id ="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
<img 
            src="/assets/profile.png" 
            alt="grid-1" 
            className="w-56 h-56 rounded-full object-cover mx-auto mt-10 mb-6"
        />                     <div>
                    <p className="grid-headtext">Hi, I am Amir</p>
                    <p className="grid-subtext">I am an undergraduate at Williams College, with a passion for computer engineering.</p>
                </div>
                </div>
               
            </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container items-center">
                        <img src= "assets/stack.png" alt="grid" className="w-full sm:w-[200px] h-fit object-contain mb-20 mt-10"/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in Java, Python, and React, with a focus on full-stack development, and I also have experience with developing machine learning models.</p>
                        </div>
                    </div>
                    </div> 
                    <div className="col-span-1 xl:row-span-4">
                        <div className="grid-container">
                            <div className="rounded-3xl w-full sm-h-[326px] h-fit flex justify-center items-center">
                                <Globe height={326} width={326} backgroundColor="rgba(0,0,0,0)" backgroundImageOpacity= {0.5} showAtmosphere showGraticules globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg" bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"/>
                            </div>
                            <div>
                                <p className="grid-headtext">
                                    I work remotely across all timezones.
                                </p>
                                <p className="grid-subtext">
                                    I am from NYC, available to work in-person, remote or both.
                                </p>
                                <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                            </div>
                        </div>
                   
                    </div>   

                    <div className="xl:col-span-2 xl:row-span-2">
                        <div className="grid-container">
                            <div>
                             <p className="grid-headtext">
                                About me
                                </p>
                                <p className="grid-subtext">
                               I am an undergraduate student at Williams College. I am currently majoring in computer science and statistics.
                                I am a skilled software developer with experience in creating web and app solutions for businesses.
                                 I have a strong background in technology internships, focusing on computer security and software. 
                                 I am known for my strong problem-solving skills, project management, and a commitment to continuous learning.
                                </p>
                            </div>
                        </div>
                     </div> 

                     <div className="xl:col-span-1 xl:row-span-1">
                        <div className="grid-container"> 
                            <div className="space-y-2">
                                <p className="grid-subtext text-center"> Contact me</p>
                                <div className="copy-container" onClick={handleCopy}>
                                    <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                    <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">amirjon5321@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        </div>       
        </div>
      </section>  
    )
}

export default About;