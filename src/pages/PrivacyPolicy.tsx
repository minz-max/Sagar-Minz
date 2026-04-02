import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
        <h1 className="text-5xl md:text-7xl font-display mb-12 tracking-tighter">Privacy <br /><span className="font-script lowercase text-secondary">Policy</span></h1>
        
        <div className="space-y-12 text-sm leading-relaxed opacity-80 uppercase tracking-wide">
          <section>
            <h2 className="text-xl mb-4 text-white opacity-100">1. Information Collection</h2>
            <p>I collect information that you voluntarily provide when using the contact form, such as your name, email address, and project details. This information is used solely to respond to your inquiry.</p>
          </section>

          <section>
            <h2 className="text-xl mb-4 text-white opacity-100">2. Use of Information</h2>
            <p>Your data is used to communicate with you regarding potential design projects. I do not sell, trade, or otherwise transfer your personal information to outside parties.</p>
          </section>

          <section>
            <h2 className="text-xl mb-4 text-white opacity-100">3. Data Security</h2>
            <p>I implement reasonable security measures to maintain the safety of your personal information. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-xl mb-4 text-white opacity-100">4. Cookies</h2>
            <p>This website may use basic cookies to enhance user experience. You can choose to disable cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl mb-4 text-white opacity-100">5. Third-Party Services</h2>
            <p>I may use third-party tools for analytics or hosting. These services have their own privacy policies governing the use of your data.</p>
          </section>

          <section>
            <h2 className="text-xl mb-4 text-white opacity-100">6. Your Rights</h2>
            <p>You have the right to request the deletion of any personal information I have collected about you. To do so, please contact me via email.</p>
          </section>
        </div>

        <footer className="mt-24 pt-12 border-t border-white/10 text-[10px] opacity-40">
          LAST UPDATED: APRIL 2026
        </footer>
      </motion.div>
    </div>
  );
}
