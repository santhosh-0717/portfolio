import Link from "next/link"
import {
    ArrowRight,
    Download,
    Github,
    Instagram,
    Linkedin,
    Mail,
    Youtube
} from "lucide-react"

import {Button} from "@/components/ui/button"
import {ProjectCard} from "@/components/project-card"
import {SkillBadge} from "@/components/skill-badge"
import {ContactForm} from "@/components/contact-form"
import {ThemeToggle} from "@/components/theme-toggle"
import {HeroAnimation} from "@/components/hero-animation"
import TypeWriter from "@/components/typewriter";
import Certificates from "@/components/certificates";
import Workshops from "@/components/workshops";
import NameAnimation from "@/components/name-animation";
import {DownloadResumeButton} from "@/components/resume-download";
import TextShimmerColor from "@/components/heading-text";
import {TechLogosAnimation} from "@/components/tech-logos-animation";
import {TechMarquee} from "@/components/tech-marquee";


export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="fixed top-0 w-full border-b border-border/40 bg-background/80 backdrop-blur-md z-50">
                <div className="container flex h-16 items-center justify-between">
                    <Link href="/" className="text-xl font-bold tracking-tighter">
                        <span className="text-primary">Santhosh</span>Guttula
                    </Link>
                    <div className="flex items-center gap-1 md:gap-4">
                        <nav className="hidden md:flex gap-6">
                            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                                About
                            </Link>
                            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
                                Skills
                            </Link>
                            {/* <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                                Projects
                            </Link> */}
                            <Link href="#certificates"
                                  className="text-sm font-medium hover:text-primary transition-colors">
                                Certificates
                            </Link>
                            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                                Contact
                            </Link>
                        </nav>
                        <ThemeToggle/>
                        <DownloadResumeButton/>
                    </div>
                </div>
            </header>

            <main className="container pt-24 pb-16">
                {/* Hero Section */}
                <section className="py-20 md:py-30 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 space-y-6">
                        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                             Full Stack Developer
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight w-full">
                            {/*Building the <span className="text-primary">future</span> with code*/}
                            {/*<span className={"text-primary"} >Santhosh  </span>Guttula*/}
                            <NameAnimation/>

                        </h1>
                        <p className="text-xl">
                            {/*I'm Santhosh, a computer science student passionate about AI, web development, and solving complex problems.*/}
                            <span className="text-3xl font-bold text-primary">I'm</span> <TypeWriter/>
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg">
                                <Link href="#contact">
                                    Contact Me <ArrowRight className="ml-2 h-4 w-4"/>
                                </Link>
                            </Button>
                            {/* <Button variant="outline" size="lg" asChild>
                                <Link href="#projects">View Projects</Link>
                            </Button>*/}

                        </div>
                        <div className="flex gap-4 pt-4">
                            <Link
                                href="https://github.com/santhosh-0717/"
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Github className="h-5 w-5"/>
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/SanthoshGuttula"
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Linkedin className="h-5 w-5"/>
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link
                                    href="https://www.instagram.com/urs_santhosh_17?"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Instagram className="h-5 w-5"/>
                                    <span className="sr-only">insta</span>
                                </Link>
                            
                            
                        </div>
                    </div>
                    <div className="flex-1 w-full max-w-md mx-auto md:mx-0">
                        <TechLogosAnimation/>

                    </div>

                </section>

                {/* Tech Marquee Section */}
                <TechMarquee/>

                {/* About Section */}
                <section id="about" className="py-16 scroll-mt-20">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-6"> About Me </h2>
                            <div className="space-y-4 text-lg">
                                <p className="text-justify">
                                    I’m a final-year Computer Science student at Aditya degree  College, specializing
                                    in cloud computing and web development.
                                </p>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold mb-4">
                                    Education</h3>
                                <div className="space-y-4">
                                    <div className="border-l-2 border-primary pl-4 py-2">
                                        <div className="text-sm text-muted-foreground">2023 - Present</div>
                                        <div className="font-medium">Bsc(cloud computing)</div>
                                        <div>Aditya degree College, Amalapuram</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <div className="relative w-64 h-64 md:w-80 md:h-80">
                                <div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 blur-3xl opacity-20"></div>
                                <div
                                    className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20">
                                    <img

                                        src="https://avatars.githubusercontent.com/u/211788246?v=4"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-16 scroll-mt-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">Technical
                        Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-card rounded-xl p-6 border border-border/50">
                            <h3 className="text-xl font-semibold mb-4">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                <SkillBadge name="Python"/>
                                <SkillBadge name="Java"/>
                                <SkillBadge name="SQL"/>
                            </div>
                        </div>
                        <div className="bg-card rounded-xl p-6 border border-border/50">
                            <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
                            <div className="flex flex-wrap gap-2">
                                <SkillBadge name="React"/>
                                <SkillBadge name="Next.js"/>
                                {/*<SkillBadge name="Node.js" />
                                <SkillBadge name="Flask"/>
                                <SkillBadge name="Express"/>
                                <SkillBadge name="Scikit-Learn"/>
                                {/*<SkillBadge name="PyTorch" />*/}
                            </div>
                        </div>
                        <div className="bg-card rounded-xl p-6 border border-border/50">
                            <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                <SkillBadge name="Git"/>
                                <SkillBadge name="Github Actions"/>
                                {/*<SkillBadge name="AWS"/>
                                <SkillBadge name="Firebase"/>
                                <SkillBadge name="MongoDB"/>
                                <SkillBadge name="Azure"/>
                                <SkillBadge name="PostgreSQL" />*/}
                            </div>
                        </div>
                    </div>
                </section>


                {/* Projects Section */}
                {/* <section id="projects" className="py-16 scroll-mt-20"> */}
                    {/* <h2 className="text-3xl font-bold mb-12 text-center">Featured
                        Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ProjectCard
                            title="Gender Prediction System"
                            description="A machine learning model that predicts gender based on name and text input, leveraging NLP and Scikit-Learn."
                            tags={["React", "Flask", "Scikit-Learn", "MongoDB", "Firebase"]}
                            image="projects/genderPredict.png"
                            link="https://github.com/your-gender-prediction-repo"
                            deployed={{
                                live: true,
                                site: "https://predict-ab05c.web.app/"
                            }}

                        />
                        <ProjectCard
                            title="Payroll Management System"
                            description="An automated payroll processing system that streamlines salary calculations, deductions, and report generation."
                            tags={["HTML", "JavaScript", "MySql", "PHP"]}
                            // image="/placeholder.svg?height=300&width=500"
                            image="projects/payroll.png"
                            link="https://github.com/Santhosh9Kumar/pms-v2"
                            deployed={{
                                live: false,
                                site: "https://payroll.line.pm"
                            }}
                        />

                        <ProjectCard
                            title="BVC AI ASSISTANT"
                            description="An AI-powered assistant for BVC, utilizing Retrieval-Augmented Generation (RAG) to provide instant and relevant information. Secure authentication with Clerk and deployed for easy access."
                            tags={["Next.js", "DeepSeek Ai", "RAG", "Clerk", "Vector DB", "Tailwind", "MongoDB"]}
                            image="projects/bvc-ai.png"
                            link="https://github.com/Santhosh9Kumar/bvc-rag-ai"
                            deployed={{
                                live: true,
                                site: "https://bvcai.SanthoshGuttula.me"
                            }}
                        />

              
                    </div>
                    <div className="mt-12 text-center">
                        <Button asChild variant="outline" size="lg">
                            <Link href="https://github.com/Santhosh9Kumar" target="_blank">
                                View All Projects on GitHub <Github className="ml-2 h-4 w-4"/>
                            </Link>
                        </Button>
                    </div> */}
                {/* </section> */}
                <section id="certificates" className="py-16 scroll-mt-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">My
                        Certificates</h2>
                    <Certificates/>
                    {/* <div className="mt-12 text-center">
                        <Button asChild variant="outline" size="lg">
                            <Link href="/certificates" target="_self">
                                View All Certificates
                            </Link>
                        </Button>
                    </div> */}
                </section>
                {/* Contact Section */}
                <section id="contact" className="py-16 scroll-mt-20">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-6"><TextShimmerColor>Get In Touch </TextShimmerColor>
                            </h2>
                            <p className="text-lg mb-8">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part
                                of your vision.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Mail className="h-5 w-5 text-primary"/>
                                    </div>
                                    <span>gsanthosh037@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Linkedin className="h-5 w-5 text-primary"/>
                                    </div>
                                    <span>linkedin.com/in/SanthoshGuttula</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Github className="h-5 w-5 text-primary"/>
                                    </div>
                                    <span>github.com/santhosh-0717</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="bg-card rounded-xl p-6 border border-border/50">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-border/40 bg-background">
                <div className="container py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <Link href="/" className="text-xl font-bold tracking-tighter">
                                <span className="text-primary">Santhosh</span>Guttula
                            </Link>
                            <p className="text-sm text-muted-foreground mt-1">© {new Date().getFullYear()} All rights
                                reserved.</p>
                        </div>
                        <div className="flex gap-6">
                            <Link
                                href="https://github.com/santhosh-0717/"
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Github className="h-5 w-5"/>
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link
                                href="https://linkedin.com/in/SanthoshGuttula"
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Linkedin className="h-5 w-5"/>
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

