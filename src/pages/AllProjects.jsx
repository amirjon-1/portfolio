import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { myProjects } from "../constants";
import useScrollAnimation from "../hooks/useScrollAnimation";

const ACCENT = "#c2622f";

const AllProjectCard = ({ project }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="scroll-child bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between transition-shadow duration-200 hover:shadow-md">
            <div>
                {/* Logo + title row */}
                <div className="flex items-center gap-3 mb-4">
                    {project.logo && (
                        <div
                            className="w-10 h-10 rounded-lg flex-shrink-0 overflow-hidden flex items-center justify-center"
                            style={project.logoStyle}
                        >
                            <img
                                src={project.logo}
                                alt={project.title}
                                className="w-7 h-7 object-contain"
                            />
                        </div>
                    )}
                    <h3 className="text-base font-bold text-black leading-snug">{project.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-2">{project.desc}</p>

                {/* Subdesc toggle */}
                {project.subdesc && (
                    <div className="mb-4">
                        {expanded && (
                            <p className="text-gray-500 text-xs leading-relaxed mt-2 mb-1">{project.subdesc}</p>
                        )}
                        <button
                            onClick={() => setExpanded((v) => !v)}
                            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            {expanded ? "Show less ↑" : "More detail ↓"}
                        </button>
                    </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3 mb-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag.id}
                            className="text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1 uppercase tracking-wide font-medium"
                        >
                            {tag.name}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-auto pt-4 border-t border-gray-100">
                <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium px-3 py-1 rounded border transition-colors"
                    style={{ borderColor: ACCENT, color: ACCENT }}
                >
                    Visit →
                </a>
            </div>
        </div>
    );
};

const AllProjects = () => {
    const headingRef = useScrollAnimation();
    const gridRef = useScrollAnimation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-white min-h-screen">
            <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
                    <a href="/" className="font-semibold text-lg text-black hover:opacity-70 transition-opacity">
                        Amirjon Ulmasov
                    </a>
                    <Link
                        to="/"
                        className="text-sm text-gray-500 hover:text-black transition-colors"
                    >
                        ← Back
                    </Link>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16">
                <div ref={headingRef} className="scroll-hidden mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">All Projects</h1>
                    <p className="text-sm text-gray-500 mt-3">Every project I've built or shipped</p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {myProjects.map((project) => (
                        <AllProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>

            <footer className="c-space py-8 border-t border-gray-200 mt-16">
                <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">© 2024 Amirjon Ulmasov</p>
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/amirjon-1"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors"
                        >
                            <img src="/assets/github.svg" alt="github" className="w-5 h-5 brightness-0 invert" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/amirjon-ulmasov-1b163b267/"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                            <img src="/assets/link.png" alt="linkedin" className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default AllProjects;
