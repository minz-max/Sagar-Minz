import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, Linkedin, Mail, ArrowUpRight, Filter } from "lucide-react";
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
    slug: "felas-coffee",
    title: "FELAS Branding",
    brand: "FELAS",
    description: "A bold, underground-style coffee brand for creatives and rebels. Brewed for the bold.",
    image: "felas_logo_transparent.png",
    category: "Branding",
    details: {
      client: "FELAS Coffee",
      year: "2024",
      role: " Brand Designer",
      longDescription: "FELAS is more than just a coffee shop; it's a lifestyle brand for the night thinkers and the rebels. The visual identity system is built on a high-contrast palette of black, coffee brown, and neon green, reflecting an edgy, industrial aesthetic. From matte black cups to cinematic social media content, every touchpoint is designed to 'fuel the chaos' of the creative grind.",
      images: [
        "felas.png",
        "felass.png",
        "felasss.png",
        "felassss.png"

      ],
      videos: [
        "https://assets.mixkit.co/videos/preview/mixkit-coffee-maker-pouring-coffee-into-a-cup-3057-large.mp4"
      ]
    }
  },
  {
    id: "02",
    slug: "aura-jewels",
    title: "Aura Jewels Branding",
    brand: "Aura Jewels",
    description: "Complete visual identity for an online jewelry boutique, optimized for a premium Instagram presence.",
    image: "aura.png",
    category: "Branding",
    details: {
      client: "Aura Jewels Boutique",
      year: "2025",
      role: " Designer",
      longDescription: "Aura Jewels required a brand that felt both timeless and modern. We developed a soft, sophisticated color palette and a typography system that emphasizes elegance. The project included a full Instagram strategy, focusing on high-end product photography and a cohesive grid aesthetic that drives sales through visual storytelling.",
      images: [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1535633302723-997f85434336?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=1200"
      ]
    }
  },
  {
    id: "03",
    slug: "lumina-logo",
    title: "Lumina Logo Design",
    brand: "Lumina",
    description: "A minimalist, tech-forward logo design for a sustainable energy startup.",
    image: "lu.jpg",
    category: "Logo Design",
    details: {
      client: "Lumina Energy",
      year: "2025",
      role: "Identity Designer",
      longDescription: "The Lumina logo was designed to represent clarity and innovation. Using geometric shapes and a vibrant gradient, we created a symbol that is easily recognizable and scalable across all platforms, from mobile apps to large-scale physical installations.",
      images: [
        "lum.jpg"
        
      ]
    }
  },
  {
    id: "04",
    slug: "urban-pulse-social",
    title: "Instagram Post Design",
    brand: "Urban Pulse",
    description: "Creative social media assets designed to boost engagement and brand awareness for a lifestyle streetwear brand.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200",
    category: "Social Media",
    details: {
      client: "Urban Pulse Wear",
      year: "2024",
      role: "Social Media Designer",
      longDescription: "For Urban Pulse, we created a series of high-impact Instagram posts that combine bold typography with gritty, urban photography. The goal was to create a 'scroll-stopping' effect that resonates with a younger, trend-conscious audience.",
      images: [
        "urb.png",
        "urbb.png"
      ]
    }
  }
];

export const gallery = [
  { id: "g1", url: "samba.png", alt: "Design 1", span: "col-span-8 row-span-2" },
  { id: "g2", url: "supra.png", alt: "Design 2", span: "col-span-4 row-span-1" },
  { id: "g3", url: "sutta.png", alt: "Design 3", span: "col-span-4 row-span-1" },
  { id: "g4", url: "cat.png", alt: "Design 4", span: "col-span-12 row-span-2" },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = projects.map(p => p.category);
    return ["All", ...Array.from(new Set(cats))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

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
            src="/profile.png"
            alt="Hero"
            referrerPolicy="no-referrer"
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
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          <div className="col-span-12 md:col-span-8 md:pl-12 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl mb-8 flex items-center gap-4">
              The Story
              <span className="font-script text-secondary text-3xl md:text-5xl lowercase">Behind the lens</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-accent/80">
                  My journey into the world of design began with a simple observation: the most powerful stories aren't always told with words. They are felt through the curve of a typeface, the weight of a shadow, and the rhythm of a layout. 
                </p>
                <p className="text-base leading-relaxed text-accent/60">
                  With a background rooted in the intersection of digital innovation and traditional aesthetics, I've spent years honing the ability to translate complex brand visions into tangible visual experiences. Whether it's a high-energy social campaign or a minimalist brand identity, my approach remains the same: find the core truth and make it impossible to ignore.
                </p>
                <div className="pt-4 space-y-4">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="uppercase text-[10px] tracking-widest text-accent/40">Philosophy</span>
                    <span className="text-sm italic">"Intentionality over Decoration"</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="uppercase text-[10px] tracking-widest text-accent/40">Focus</span>
                    <span className="text-sm">Visual Storytelling</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-8">
                <div className="bg-muted/50 p-8 border border-white/5 relative overflow-hidden group">
                  <div className="relative z-10">
                    <h3 className="text-xs tracking-[0.3em] mb-6 text-secondary uppercase">Design Philosophy</h3>
                    <p className="text-sm leading-relaxed text-accent/70 italic">
                      "I believe that design is a bridge between a problem and its solution. It should be invisible when it works perfectly, yet unforgettable when it speaks."
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 -mr-12 -mt-12 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors duration-500" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs tracking-[0.3em] text-secondary uppercase">Career Aspirations</h3>
                  <p className="text-sm leading-relaxed text-accent/60">
                    I am driven by the desire to lead creative directions that redefine how brands interact with their audiences in the digital age. My goal is to create a legacy of work that isn't just seen, but remembered—bridging the gap between commercial utility and artistic expression.
                  </p>
                  <div className="flex gap-4 pt-2">
                    <span className="px-3 py-1 bg-white/5 text-[10px] uppercase tracking-tighter border border-white/10">Strategy</span>
                    <span className="px-3 py-1 bg-white/5 text-[10px] uppercase tracking-tighter border border-white/10">Innovation</span>
                    <span className="px-3 py-1 bg-white/5 text-[10px] uppercase tracking-tighter border border-white/10">Art Direction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-12 bg-muted/30">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-8xl mb-4">Projects</h2>
            <p className="text-xs uppercase tracking-widest text-accent/40">Selected Design Works 2024</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-[10px] uppercase tracking-widest border transition-all duration-300 ${
                  selectedCategory === cat 
                    ? "bg-secondary border-secondary text-white" 
                    : "border-white/10 hover:border-white/30 text-accent/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="group relative bg-black p-8 md:p-12 overflow-hidden cursor-pointer border border-transparent hover:border-white/10 transition-colors duration-500"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <h3 className="text-4xl md:text-6xl mb-2 group-hover:text-secondary transition-colors duration-500">
                        Project {project.id}
                      </h3>
                      <p className="font-script text-2xl text-accent/60 group-hover:text-accent transition-colors duration-500">{project.brand}</p>
                    </div>
                    <span className="text-xs border border-white/20 px-3 py-1 rounded-full uppercase tracking-tighter group-hover:border-secondary group-hover:text-secondary transition-all duration-500">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="magazine-grid">
                    <div className="col-span-12 md:col-span-7">
                      <p className="text-sm leading-relaxed text-accent/60 mb-8 group-hover:text-accent/90 transition-colors duration-500">
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
                      <div className="aspect-[4/5] overflow-hidden border border-white/5 group-hover:border-secondary/30 transition-colors duration-500">
                        <motion.img 
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.8, ease: "circOut" }}
                          src={project.image} 
                          alt={project.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
                referrerPolicy="no-referrer"
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
