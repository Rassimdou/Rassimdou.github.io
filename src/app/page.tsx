"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaShieldAlt } from "react-icons/fa";
import { SiTypescript, SiGo, SiPython, SiJavascript, SiExpress, SiNestjs, SiNextdotjs, SiDocker, SiPostgresql, SiLinux } from "react-icons/si";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Smart Caching Proxy",
    description: "High-performance caching proxy featuring LRU eviction, request coalescing, and TTL management to reduce backend load and speed up responses.",
    tech: ["TypeScript", "Caching", "Proxy"],
    github: "https://github.com/Rassimdou/SmartCaching-Proxy-",
    image: "https://opengraph.githubassets.com/1/Rassimdou/SmartCaching-Proxy-"
  },
  {
    name: "File Integrity Monitor",
    description: "A robust security tool (FIM) that monitors and detects unauthorized changes to files and directories to ensure system integrity.",
    tech: ["Go", "Security", "Monitoring"],
    github: "https://github.com/Rassimdou/FIM",
    image: "https://opengraph.githubassets.com/1/Rassimdou/FIM"
  },
  {
    name: "SquareTech Services",
    description: "A modern, professional landing page and service platform built with responsive design and optimized performance.",
    tech: ["Next.js", "React", "TailwindCSS"],
    link: "https://squaretech-services.vercel.app/",
    image: "/squaretech-final.png"
  },
  {
    name: "URL Shortener",
    description: "A fast and efficient URL shortening service built with Go and the Fiber framework, ensuring high throughput and low latency.",
    tech: ["Go", "Fiber", "Backend"],
    github: "https://github.com/Rassimdou/URL-Shortener",
    image: "https://opengraph.githubassets.com/1/Rassimdou/URL-Shortener"
  },
  {
    name: "Chat App",
    description: "A real-time chat application featuring live messaging, intuitive responsive design, and smooth user experience deployed on Vercel.",
    tech: ["JavaScript", "Node.js", "React"],
    github: "https://github.com/Rassimdou/chat-app",
    link: "https://chat-app-three-kappa-37.vercel.app/",
    image: "https://opengraph.githubassets.com/1/Rassimdou/chat-app"
  },
  {
    name: "Laptop Store",
    description: "An e-commerce platform dedicated to laptops, featuring product browsing, cart management, and seamless checkout flow.",
    tech: ["JavaScript", "Fullstack", "E-commerce"],
    github: "https://github.com/Rassimdou/Laptop-Store",
    image: "/laptop-final.png"
  },
  {
    name: "HoneyPot",
    description: "A modular honeypot system designed to deceive attackers and log their activities, supporting multiple protocols like SSH and HTTP.",
    tech: ["Python", "Networking", "Security"],
    github: "https://github.com/Rassimdou/HoneyPot",
    image: "https://socialify.git.ci/Rassimdou/HoneyPot/image?theme=Dark&font=Inter&language=1&owner=1&name=1&pattern=Solid"
  },
  {
    name: "SNSMA 2026",
    description: "A dedicated web platform designed for the SNSMA 2026 event, showcasing clean layouts and fast load times.",
    tech: ["Frontend", "Web", "UI/UX"],
    link: "https://snsma-2026.vercel.app/",
    image: "/snsma-final.png"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-yellow-500/30 overflow-x-hidden">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/10 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 px-6 md:px-8 py-6 flex justify-between items-center bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="flex gap-6 md:gap-8 text-xs md:text-sm font-medium text-neutral-400">
          <a href="#expertise" className="hover:text-white transition-colors flex items-center gap-2">
            <span className="w-4 h-4 hidden md:inline-flex items-center justify-center border border-current rounded-sm text-[8px]">01</span>
            Expertise
          </a>
          <a href="#projects" className="hover:text-white transition-colors flex items-center gap-2">
            <span className="w-4 h-4 hidden md:inline-flex items-center justify-center border border-current rounded-sm text-[8px]">02</span>
            Projects
          </a>
          <a href="#about" className="hover:text-white transition-colors flex items-center gap-2">
            <span className="w-4 h-4 hidden md:inline-flex items-center justify-center border border-current rounded-sm text-[8px]">03</span>
            About
          </a>
          <a href="#contact" className="hover:text-white transition-colors flex items-center gap-2">
            <span className="w-4 h-4 hidden md:inline-flex items-center justify-center border border-current rounded-sm text-[8px]">04</span>
            Contact
          </a>
        </div>
        <a 
          href="https://rassimdou.github.io/blog/"
          target="_blank"
          rel="noreferrer"
          className="text-xs md:text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors border border-yellow-500/30 hover:border-yellow-400 px-4 py-2 rounded-full bg-yellow-500/5 hover:bg-yellow-500/10 flex items-center gap-2"
        >
          <FaShieldAlt size={12} />
          <span className="hidden md:inline">My cyber security stuffs</span>
          <span className="md:hidden">Blog</span>
        </a>
      </motion.nav>

      <main className="relative z-10 max-w-5xl mx-auto pt-40 px-6 pb-20">
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-32"
        >
          <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                Hey! I&apos;m Rassim Douaouria
              </h1>
              <h2 className="text-2xl md:text-3xl text-neutral-400 font-medium flex items-center gap-3">
                <FaShieldAlt className="text-yellow-400" />
                <span>Backend Developer & <span className="text-yellow-400">Cybersecurity Enthusiast</span>.</span>
              </h2>
            </div>
            
            {/* Avatar with Glow */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-yellow-500/20 blur-2xl rounded-full scale-150 animate-pulse"></div>
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(250,204,21,0.2)] relative z-10">
                <Image 
                  src="/profile.png" 
                  alt="Rassim Douaouria"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="max-w-3xl text-neutral-400 text-lg leading-relaxed mb-8 space-y-4">
            <p>
              I specialize in <span className="text-white font-medium">backend engineering</span> and <span className="text-yellow-400 font-medium">web penetration testing</span>. 
              Currently based in Algiers, I am deeply passionate about identifying vulnerabilities, securing networks, and building highly resilient systems that can withstand real-world attacks.
            </p>
            <p>
              Whether I am developing a high-throughput proxy or dissecting complex attack vectors for a honeypot, my focus is always on writing clean code and hardening architectures.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-neutral-400 mb-8">
            <a href="https://www.linkedin.com/in/douaouria-rassim-35a636296/" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors hover:scale-110 transform duration-200">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/Rassimdou" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors hover:scale-110 transform duration-200">
              <FaGithub size={24} />
            </a>
            <a href="mailto:douaouriarassim@gmail.com" className="hover:text-yellow-400 transition-colors hover:scale-110 transform duration-200">
              <FaEnvelope size={24} />
            </a>
          </div>
        </motion.section>

        {/* Expertise Section */}
        <motion.section 
          id="expertise"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-6 mb-12">
            <h3 className="text-2xl font-semibold tracking-tight whitespace-nowrap">01. What I know to do</h3>
            <div className="h-[1px] w-full bg-neutral-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-8 transition-all duration-300 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(250,204,21,0.05)] hover:-translate-y-1">
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="text-yellow-400 text-lg">{"{ }"}</span> Languages
              </h4>
              <ul className="space-y-4 text-neutral-400">
                <li className="flex items-center gap-3 hover:text-white transition-colors"><SiTypescript className="text-[#3178C6]" size={20}/> TypeScript</li>
                <li className="flex items-center gap-3 hover:text-white transition-colors"><SiGo className="text-[#00ADD8]" size={20}/> Golang</li>
                <li className="flex items-center gap-3 hover:text-white transition-colors"><SiPython className="text-[#3776AB]" size={20}/> Python</li>
                <li className="flex items-center gap-3 hover:text-white transition-colors"><SiJavascript className="text-[#F7DF1E]" size={20}/> JavaScript</li>
              </ul>
            </div>

            <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-8 transition-all duration-300 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(250,204,21,0.05)] hover:-translate-y-1">
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="text-yellow-400 text-lg">{"//"}</span> Frameworks
              </h4>
              <ul className="space-y-4 text-neutral-400">
                <li className="flex items-center gap-3 hover:text-white transition-colors"><SiExpress className="text-white" size={20}/> Express.js</li>
                <li className="flex items-center gap-3 hover:text-white transition-colors"><SiNestjs className="text-[#E0234E]" size={20}/> NestJS</li>
                <li className="flex items-center gap-3 hover:text-white transition-colors"><FaShieldAlt className="text-[#00ADD8]" size={20}/> Gin (Go)</li>
                <li className="flex items-center gap-3 hover:text-white transition-colors"><SiNextdotjs className="text-white" size={20}/> Next.js</li>
              </ul>
            </div>

            <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-8 transition-all duration-300 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(250,204,21,0.05)] hover:-translate-y-1">
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="text-yellow-400 text-lg">{">_"}</span> Tools & Sec
              </h4>
              <ul className="space-y-4 text-neutral-400">
                <li className="flex items-center gap-3 hover:text-white transition-colors"><FaGithub className="text-white" size={20}/> Git / GitHub</li>
                <li className="flex items-center gap-3 hover:text-white transition-colors"><SiDocker className="text-[#2496ED]" size={20}/> Docker</li>
                <li className="flex items-center gap-3 hover:text-white transition-colors"><SiPostgresql className="text-[#4169E1]" size={20}/> PostgreSQL</li>
                <li className="flex items-center gap-3 hover:text-white transition-colors"><SiLinux className="text-white" size={20}/> Linux / Bash</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects" 
          className="mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-6 mb-12">
            <h3 className="text-2xl font-semibold tracking-tight whitespace-nowrap">02. Selected Projects</h3>
            <div className="h-[1px] w-full bg-neutral-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative flex flex-col bg-[#0a0a0a] border border-neutral-800 hover:border-yellow-500/50 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(250,204,21,0.1)]"
              >
                {/* Project Image */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-neutral-800 bg-[#050505]">
                  <Image 
                    src={project.image} 
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {project.name}
                    </h4>
                    <div className="flex items-center gap-3 text-neutral-400 shrink-0 ml-4">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="hover:text-white hover:scale-110 transition-all"
                          aria-label="GitHub Repository"
                        >
                          <FaGithub size={22} />
                        </a>
                      )}
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="hover:text-white hover:scale-110 transition-all"
                          aria-label="Live Project"
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-mono text-neutral-400 group-hover:border-yellow-500/30 group-hover:text-yellow-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about" 
          className="mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-6 mb-12">
            <h3 className="text-2xl font-semibold tracking-tight whitespace-nowrap">03. About Me</h3>
            <div className="h-[1px] w-full bg-neutral-800"></div>
          </div>
          
          <div className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8 md:p-10 leading-relaxed text-neutral-400 text-lg space-y-6">
            <p>
              My journey into software engineering started with a deep curiosity about how systems communicate and interact. As I learned to build backends, I naturally gravitated toward taking them apart to understand <strong className="text-white">how they break</strong>. This led me to the fascinating world of cybersecurity.
            </p>
            <p>
              Today, I blend these two disciplines. I build robust APIs, caching layers, and microservices using <strong className="text-yellow-400">Golang, TypeScript, and Python</strong>. At the same time, I actively engage in web penetration testing, creating tools like custom honeypots and automated vulnerability scanners to understand the offensive perspective.
            </p>
            <p>
              When I&apos;m not writing code or analyzing a network packet, I&apos;m usually reading up on the latest vulnerabilities, participating in CTFs, or documenting my findings on my <a href="https://rassimdou.github.io/blog/" target="_blank" rel="noreferrer" className="text-yellow-400 hover:underline">cybersecurity blog</a>.
            </p>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="mt-32 mb-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="inline-block mb-4 text-yellow-400 font-mono text-sm">04. What&apos;s Next?</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg">
            Whether you have a question, a project proposal, or just want to discuss backend architecture and web security, my inbox is always open. Let&apos;s build (or secure) something great together.
          </p>
          <a 
            href="mailto:douaouriarassim@gmail.com" 
            className="inline-flex items-center gap-3 bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transform hover:-translate-y-1"
          >
            <FaEnvelope size={18} /> Say Hello
          </a>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-sm"
        >
          <div className="flex gap-4">
            <a href="https://github.com/Rassimdou" className="hover:text-yellow-400 transition-colors"><FaGithub size={18} /></a>
            <a href="https://www.linkedin.com/in/douaouria-rassim-35a636296/" className="hover:text-yellow-400 transition-colors"><FaLinkedin size={18} /></a>
          </div>
          <p>Built with Next.js & Tailwind. © {new Date().getFullYear()} Rassim Douaouria.</p>
        </motion.footer>
      </main>
    </div>
  );
}
