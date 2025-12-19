import { useState } from "react";
import { myProjects } from "../constants"

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const projectCount = myProjects.length;

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projectCount);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projectCount) % projectCount);
    };

    const currentProject = myProjects[currentIndex];
    const nextProjectIndex = (currentIndex + 1) % projectCount;
    const nextProjectData = myProjects[nextProjectIndex];

    const prevProjectIndex = (currentIndex - 1 + projectCount) % projectCount;
    const prevProjectData = myProjects[prevProjectIndex];

    const ProjectCard = ({ project, isActive, isPreview, onClick }) => {
        const [showTooltip, setShowTooltip] = useState(false);
        const baseClasses = "bg-white border rounded-lg p-6 flex flex-col cursor-pointer min-h-[400px] transition-all duration-500 ease-in-out relative group";
        const activeClasses = isActive 
            ? "border-black shadow-lg scale-100 z-10" 
            : "border-gray-200 opacity-60 scale-90 hover:opacity-80";
        
        return (
            <div className="relative">
                <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                        if (onClick) {
                            e.preventDefault();
                            onClick();
                        }
                    }}
                    className={`${baseClasses} ${activeClasses} ${isPreview ? 'pointer-events-auto' : ''}`}
                >
                    <div className="flex items-start gap-4 mb-4">
                        <div 
                            className="p-2 rounded-lg flex-shrink-0" 
                            style={project.logoStyle}
                        >
                            <img 
                                src={project.logo} 
                                alt={project.title} 
                                className={isActive ? "w-12 h-12" : "w-10 h-10"} 
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className={`font-semibold text-black mb-3 ${isActive ? 'text-2xl' : 'text-xl'}`}>
                                {project.title}
                            </h3>
                            <p className={`text-gray-600 leading-relaxed ${isActive ? 'text-base' : 'text-sm'}`}>
                                {project.desc}
                            </p>
                            {project.subdesc && (
                                <div 
                                    className="mt-2 relative inline-block"
                                    onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}
                                >
                                    <div className="flex items-center gap-1 text-xs text-gray-500 cursor-help hover:text-gray-700 transition-colors">
                                        <span>Hover for more info</span>
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    {/* Tooltip */}
                                    <div className={`absolute ${isActive ? 'z-50' : 'z-40'} max-w-xs w-72 bg-black text-white rounded-lg p-3 shadow-2xl pointer-events-none transition-all duration-200 ${
                                        showTooltip ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-1 invisible'
                                    } bottom-full mb-2 left-0`}>
                                        <div className="text-xs leading-relaxed max-h-48 overflow-y-auto">
                                            {project.subdesc}
                                        </div>
                                        {/* Arrow pointing down */}
                                        <div className="absolute left-4 -bottom-1.5 w-3 h-3 bg-black transform rotate-45"></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                        <div className="flex items-center gap-2">
                            {project.tags.slice(0, isActive ? project.tags.length : 2).map((tag, tagIndex) => (
                                <div 
                                    key={tagIndex} 
                                    className={`rounded bg-gray-100 flex items-center justify-center ${isActive ? 'w-8 h-8' : 'w-7 h-7'}`}
                                >
                                    <img 
                                        src={tag.path} 
                                        alt={tag.name} 
                                        className={isActive ? "w-5 h-5" : "w-4 h-4"} 
                                    />
                                </div>
                            ))}
                        </div>
                        {isActive && (
                            <div className="flex items-center gap-1 text-black opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-sm font-medium">Visit</span>
                                <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
                            </div>
                        )}
                    </div>
                </a>
            </div>
        );
    };

    return (
        <section className="c-space my-32" id="work">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <h2 className="text-4xl font-semibold text-black mb-16">Projects</h2>

                <div className="relative max-w-6xl mx-auto">
                    {/* Mobile: Show only active project */}
                    <div className="block md:hidden">
                        <div className="w-full">
                            <ProjectCard 
                                project={currentProject}
                                isActive={true}
                                isPreview={false}
                            />
                        </div>
                    </div>

                    {/* Desktop: Show 3 cards */}
                    <div className="hidden md:grid grid-cols-3 gap-6 items-center">
                        {/* Previous project - left */}
                        <div className="flex justify-end transform transition-transform duration-500 ease-in-out">
                            <div className="w-full max-w-xs">
                                <ProjectCard 
                                    project={prevProjectData}
                                    isActive={false}
                                    isPreview={true}
                                    onClick={prevProject}
                                />
                            </div>
                        </div>

                        {/* Current project - center */}
                        <div className="flex justify-center transform transition-transform duration-500 ease-in-out group">
                            <div className="w-full max-w-md">
                                <ProjectCard 
                                    project={currentProject}
                                    isActive={true}
                                    isPreview={false}
                                />
                            </div>
                        </div>

                        {/* Next project - right */}
                        <div className="flex justify-start transform transition-transform duration-500 ease-in-out">
                            <div className="w-full max-w-xs">
                                <ProjectCard 
                                    project={nextProjectData}
                                    isActive={false}
                                    isPreview={true}
                                    onClick={nextProject}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Navigation indicator */}
                    <div className="flex justify-center items-center gap-6 mt-8">
                        <button 
                            className="w-10 h-10 rounded-full bg-black hover:bg-gray-800 transition-colors flex items-center justify-center" 
                            onClick={prevProject}
                            aria-label="Previous project"
                        >
                            <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4 brightness-0 invert" />
                        </button>
                        <span className="text-sm text-gray-500 min-w-[60px] text-center">
                            {currentIndex + 1} / {projectCount}
                        </span>
                        <button 
                            className="w-10 h-10 rounded-full bg-black hover:bg-gray-800 transition-colors flex items-center justify-center" 
                            onClick={nextProject}
                            aria-label="Next project"
                        >
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4 brightness-0 invert" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects