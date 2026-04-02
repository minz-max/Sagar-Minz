import React from "react";
import { motion } from "motion/react";
import { Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface Project {
  id: string;
  slug: string;
  title: string;
  brand: string;
  description: string;
  image: string;
  category: string;
  details: {
    client: string;
    year: string;
    role: string;
    longDescription: string;
    images: string[];
    videos?: string[];
  };
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "brand-projection",
    title: "Brand Projection",
    brand: "Creative Design",
    description: "A comprehensive brand projection project exploring visual identity, digital presence, and creative storytelling across multiple platforms.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=1200",
    category: "Branding",
    details: {
      client: "Creative Design Studio",
      year: "2024",
      role: "Lead Designer",
      longDescription: "This project was a deep dive into the intersection of physical and digital branding. We developed a visual language that translates seamlessly from print media to immersive digital experiences. The core challenge was maintaining a consistent brand voice while adapting to the unique constraints of different mediums.",
      images: [
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200"
      ],
      videos: [
        "https://assets.mixkit.co/videos/preview/mixkit-abstract-geometric-shapes-moving-in-a-loop-42866-large.mp4"
      ]
    }
  },
  {
    id: "02",
    slug: "branding-identity",
    title: "Branding & Identity",
    brand: "Tamburins",
    description: "Developed branding materials for the 'BOTTARI' collection, ensuring consistency in visual identity across all digital and print platforms.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800",
    category: "Branding",
    details: {
      client: "Tamburins",
      year: "2025",
      role: "Visual Designer",
      longDescription: "For the 'BOTTARI' collection, we focused on the concept of 'contained strength'. The visual identity used minimalist typography paired with high-contrast photography to evoke a sense of quiet power and elegance.",
      images: [
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1200"
      ]
    }
  },
  {
    id: "03",
    slug: "video-content",
    title: "Video Content Creation",
    brand: "Gentle Monster",
    description: "Created engaging video content for the collaborative eyewear collection launch, driving engagement across global social media channels.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    category: "Video Content",
    details: {
      client: "Gentle Monster",
      year: "2025",
      role: "Content Creator",
      longDescription: "The Gentle Monster collaboration required a fast-paced, high-energy video campaign. We used experimental editing techniques and a vibrant color palette to capture the attention of a global Gen-Z audience.",
      images: [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200"
      ]
    }
  },
  {
    id: "04",
    slug: "digital-assets",
    title: "Digital Design Assets",
    brand: "Calvin Klein",
    description: "Produced a suite of digital design assets for the Spring 2024 global campaign, maintaining a high standard of visual consistency.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    category: "Digital Design",
    details: {
      client: "Calvin Klein",
      year: "2024",
      role: "Digital Designer",
      longDescription: "Working with Calvin Klein's global team, I produced a comprehensive set of digital assets for their Spring 2024 campaign. This included everything from social media banners to interactive web elements, all adhering to the brand's iconic minimalist aesthetic.",
      images: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1200"
      ]
    }
  }
];

export const gallery = [
  { id: "g1", url: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=800", alt: "Design 1", span: "col-span-8 row-span-2" },
  { id: "g2", url: "https://images.unsplash.com/photo-1539109132382-381bb3f1c2b3?auto=format&fit=crop&q=80&w=800", alt: "Design 2", span: "col-span-4 row-span-1" },
  { id: "g3", url: "https://images.unsplash.com/photo-1529139513477-323c66b62adc?auto=format&fit=crop&q=80&w=800", alt: "Design 3", span: "col-span-4 row-span-1" },
  { id: "g4", url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800", alt: "Design 4", span: "col-span-12 row-span-2" },
];

export default function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const details = formData.get("details");
    
    const subject = encodeURIComponent(`New Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject Details:\n${details}`);
    
    window.location.href = `mailto:sagarminz07@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display tracking-tighter"
        >
          SAGAR MINZ
        </motion.div>
        <div className="flex gap-8 text-xs uppercase tracking-widest font-medium">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
              whileHover={{ color: "#C1121F" }}
              className="relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1920"
            alt="Hero"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-1000"
          />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-12">
          <div className="magazine-grid w-full items-end">
            <div className="col-span-12 md:col-span-8">
              <motion.h1 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-[15vw] leading-[0.8] mb-4"
              >
                PORTFOLIO
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="font-script text-5xl md:text-8xl text-secondary -mt-8 md:-mt-16 ml-4"
              >
                Sagar Minz
              </motion.div>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right mt-8 md:mt-0">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-sm md:text-base max-w-xs md:ml-auto leading-relaxed text-accent/80"
              >
                I bring a blend of creativity to design visually compelling content across digital and print platforms. 
                I am experienced in developing social media creatives, branding materials, and video content while ensuring consistency in visual identity. 
                I aim to create designs that not only look good but also communicate effectively and drive engagement.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction / About Section */}
      <section id="about" className="py-24 px-6 md:px-12 border-b border-white/10">
        <div className="magazine-grid">
          <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] overflow-hidden border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&q=80&w=800" 
                alt="About" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          <div className="col-span-12 md:col-span-8 md:pl-12 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl mb-8 flex items-center gap-4">
              Introduction
              <span className="font-script text-secondary text-3xl md:text-5xl lowercase">I'm Sagar Minz</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg leading-relaxed text-accent/70 mb-6">
                  I bring a blend of creativity to design visually compelling content across digital and print platforms. 
                  I am experienced in developing social media creatives, branding materials, and video content while ensuring consistency in visual identity.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="uppercase text-xs tracking-widest text-accent/50">Experience</span>
                    <span className="text-sm">Creative Professional</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="uppercase text-xs tracking-widest text-accent/50">Specialty</span>
                    <span className="text-sm">Digital & Print Media</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted p-8 border border-white/5">
                <h3 className="text-xs tracking-[0.3em] mb-6 text-secondary">Core Skills</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span>Graphic Design</span><span>Expert</span></div>
                  <div className="flex justify-between"><span>Branding</span><span>Advanced</span></div>
                  <div className="flex justify-between"><span>Video Editing</span><span>Intermediate</span></div>
                  <div className="flex justify-between"><span>Social Media</span><span>Expert</span></div>
                  <div className="flex justify-between"><span>Visual Identity</span><span>Advanced</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-12 bg-muted/30">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl md:text-8xl">Projects</h2>
          <p className="text-xs uppercase tracking-widest text-accent/40 hidden md:block">Selected Design Works 2024</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative bg-black p-8 md:p-12 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <h3 className="text-4xl md:text-6xl mb-2 group-hover:text-secondary transition-colors duration-500">
                      Project {project.id}
                    </h3>
                    <p className="font-script text-2xl text-accent/60">{project.brand}</p>
                  </div>
                  <span className="text-xs border border-white/20 px-3 py-1 rounded-full uppercase tracking-tighter">
                    {project.category}
                  </span>
                </div>
                
                <div className="magazine-grid">
                  <div className="col-span-12 md:col-span-7">
                    <p className="text-sm leading-relaxed text-accent/60 mb-8">
                      {project.description}
                    </p>
                    <motion.div 
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-2 text-xs uppercase tracking-widest text-secondary font-bold"
                    >
                      <Link to={`/project/${project.slug}`} className="flex items-center gap-2">
                        View Project <ArrowUpRight size={14} />
                      </Link>
                    </motion.div>
                  </div>
                  <div className="col-span-12 md:col-span-5 mt-8 md:mt-0">
                    <div className="aspect-[4/5] overflow-hidden group-hover:scale-105 transition-all duration-700">
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="magazine-grid">
          {gallery.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`${img.span} relative overflow-hidden group border border-white/5`}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-xs uppercase tracking-[0.5em] font-bold">Design Showcase</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-secondary text-white">
        <div className="magazine-grid items-center">
          <div className="col-span-12 md:col-span-6 mb-12 md:mb-0">
            <h2 className="text-6xl md:text-9xl leading-none mb-8">
              Let's <br />
              <span className="font-script lowercase text-black">work</span> <br />
              Together
            </h2>
            <div className="flex gap-6">
              <motion.a 
                whileHover={{ y: -5 }} 
                href="https://www.instagram.com/sagar_minz_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-black rounded-full"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5 }} 
                href="https://www.linkedin.com/in/sagar-minz-99748a281/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-black rounded-full"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5 }} 
                href="mailto:sagarminz07@gmail.com" 
                className="p-3 bg-black rounded-full"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-white/30 pb-2">
                <label className="block text-[10px] uppercase tracking-widest mb-2 opacity-60">Name</label>
                <input name="name" type="text" required className="w-full bg-transparent outline-none text-xl placeholder:text-white/20" placeholder="Your Name" />
              </div>
              <div className="border-b border-white/30 pb-2">
                <label className="block text-[10px] uppercase tracking-widest mb-2 opacity-60">Email</label>
                <input name="email" type="email" required className="w-full bg-transparent outline-none text-xl placeholder:text-white/20" placeholder="your@email.com" />
              </div>
              <div className="border-b border-white/30 pb-2">
                <label className="block text-[10px] uppercase tracking-widest mb-2 opacity-60">Project Details</label>
                <textarea name="details" required className="w-full bg-transparent outline-none text-xl placeholder:text-white/20 h-32 resize-none" placeholder="Tell me about your vision" />
              </div>
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-black text-white uppercase tracking-[0.3em] font-bold text-sm"
              >
                Send Inquiry
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xs uppercase tracking-widest opacity-40">
          © 2026 SAGAR MINZ PORTFOLIO. ALL RIGHTS RESERVED.
        </div>
        <div className="font-script text-3xl text-secondary">
          Sagar Minz
        </div>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest opacity-40">
          <Link to="/privacy" className="hover:opacity-100">Privacy Policy</Link>
          <Link to="/terms" className="hover:opacity-100">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
}
