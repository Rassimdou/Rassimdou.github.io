"use client";

import Link from "next/link";
import { FaArrowLeft, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-yellow-500/30 overflow-x-hidden">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/10 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 px-6 md:px-8 py-6 flex items-center bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5"
      >
        <Link 
          href="/" 
          className="text-xs md:text-sm font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <FaArrowLeft size={14} />
          Back to Portfolio
        </Link>
      </motion.nav>

      <main className="relative z-10 max-w-4xl mx-auto pt-40 px-6 pb-20">
        {/* Header Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-20 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/30">
              <FaShieldAlt className="text-yellow-400 text-3xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            My Cyber Security Stuffs
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            A collection of write-ups, vulnerability analyses, CTF solutions, and thoughts on backend security.
          </p>
        </motion.section>

        {/* Content Section (Placeholder for now) */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="space-y-8"
        >
          <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-8 text-center py-20">
             <h3 className="text-2xl font-semibold text-white mb-4">Coming Soon</h3>
             <p className="text-neutral-400">
               I am currently working on documenting my latest penetration testing findings and honeypot architectures. Check back soon for detailed write-ups!
             </p>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
