import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans">
      <nav className="mb-12">
        <Link to="/" className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
          <ArrowLeft size={14} /> Back to Portfolio
        </Link>
      </nav>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-display mb-12 tracking-tighter">Terms of <br /><span className="font-script lowercase text-secondary">Service</span></h1>
        
        <div className="space-y-12 text-sm leading-relaxed opacity-80 uppercase tracking-wide">
          <section>
            <h2 className="text-xl mb-4 text-white opacity-100">1. Acceptance of Terms</h2>
            <p>By accessing and using this portfolio website, you agree to be bound by these Terms of Service. If you do not agree, please refrain from using the site.</p>
          </section>

          <section>
            <h2 className="text-xl mb-4 text-white opacity-100">2. Intellectual Property</h2>
            <p>All designs, images, and content displayed on this website are the intellectual property of Sagar Minz unless otherwise stated. Unauthorized use, reproduction, or distribution of any materials is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="text-xl mb-4 text-white opacity-100">3. Project Inquiries</h2>
            <p>Submitting an inquiry through the contact form does not constitute a binding contract. Project acceptance is subject to availability and formal agreement on scope and pricing.</p>
          </section>

          <section>
            <h2 className="text-xl mb-4 text-white opacity-100">4. External Links</h2>
            <p>This site may contain links to third-party websites (e.g., LinkedIn, Instagram). I am not responsible for the content or practices of these external sites.</p>
          </section>

          <section>
            <h2 className="text-xl mb-4 text-white opacity-100">5. Limitation of Liability</h2>
            <p>Sagar Minz shall not be liable for any direct or indirect damages arising from the use of this website or the information provided herein.</p>
          </section>

          <section>
            <h2 className="text-xl mb-4 text-white opacity-100">6. Modifications</h2>
            <p>I reserve the right to update these terms at any time without prior notice. Continued use of the site constitutes acceptance of the revised terms.</p>
          </section>
        </div>

        <footer className="mt-24 pt-12 border-t border-white/10 text-[10px] opacity-40">
          LAST UPDATED: APRIL 2026
        </footer>
      </motion.div>
    </div>
  );
}
