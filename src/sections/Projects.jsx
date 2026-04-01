import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";

const ACCENT = "#c2622f";

const featuredProjects = [
    {
        year: "2026",
        title: "JusticeMap - Legal Rights Assistant",
        desc: "An AI-powered legal RAG platform that gives urban residents free, verified legal guidance backed by real municipal law — generating a formal demand letter ready to send in under 60 seconds. Awarded 1st place at MEGA Hackathon 2026.",
        tags: ["Python", "FastAPI", "RAG", "Multi-Agent"],
        detailsHref: "https://justicemapmegahackathon.vercel.app/",
        logo: "/assets/logojustice.png",
        logoStyle: { backgroundColor: "#ffffff", border: "0.2px solid #1e3a5f" },
    },
    {
        year: "2025",
        title: "Schoolbus - Campus Ride-Sharing",
        desc: "Schoolbus is a cross-platform ride-sharing app built for college campuses, connecting students for safe, affordable, and convenient rides within and around campus.",
        tags: ["React Native", "Hono", "PostgreSQL", "AWS"],
        detailsHref: "https://schoolbus.cc",
        logo: "/assets/icon.png",
        logoStyle: { backgroundColor: "#FFFFFF", border: "0.2px solid rgba(208,213,221,1)" },
    },
    {
        year: "2024",
        title: "BrewBar Coffee",
        desc: "Order directly from BrewBar Café with the BrewBar Coffee App. Enjoy personalized drinks, real-time tracking, and secure payments for convenient pickup.",
        tags: ["React Native", "Node.js", "Firebase"],
        detailsHref: "https://apps.apple.com/us/app/brewbar-coffee/id6535690026",
        logo: "/assets/brew.jpg",
        logoStyle: { backgroundColor: "#313d34", border: "0.2px solid #36201D" },
    },
];

const ProjectCard = ({ year, title, desc, tags, detailsHref, logo, logoStyle }) => (
    <div className="scroll-child bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between transition-shadow duration-200 hover:shadow-md">
        <div>
            <div className="flex items-center gap-3 mb-4">
                {logo && (
                    <div
                        className="w-10 h-10 rounded-lg flex-shrink-0 overflow-hidden flex items-center justify-center"
                        style={logoStyle}
                    >
                        <img src={logo} alt={title} className="w-7 h-7 object-contain" />
                    </div>
                )}
                <p className="text-xs text-gray-400">{year}</p>
            </div>
            <h3 className="text-base font-bold text-black mb-3 leading-snug">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1 uppercase tracking-wide font-medium"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <div className="mt-auto pt-4 border-t border-gray-100">
            <a
                href={detailsHref}
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

const Projects = () => {
    const headingRef = useScrollAnimation();
    const gridRef = useScrollAnimation();

    return (
        <section className="c-space my-32" id="work">
            <div className="max-w-6xl mx-auto px-6 sm:px-10">
                <div ref={headingRef} className="scroll-hidden mb-2">
                    <h2 className="text-4xl md:text-5xl font-bold text-black">
                        Featured Projects
                    </h2>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {featuredProjects.map((p) => (
                        <ProjectCard key={p.title} {...p} />
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <Link
                        to="/projects"
                        className="text-sm font-medium transition-colors hover:opacity-70"
                        style={{ color: ACCENT }}
                    >
                        View all projects →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
