import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Instagram, Linkedin, Mail } from "lucide-react";
import { projects, Project } from "./Home";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug) as Project | undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project Not Found</h1>
          <Link to="/" className="text-secondary uppercase tracking-widest text-sm">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium hover:text-secondary transition-colors">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <div className="text-2xl font-display tracking-tighter">
          {project.brand.toUpperCase()}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-6xl md:text-9xl font-display leading-none mb-4"
          >
            {project.title.toUpperCase()}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-script text-3xl md:text-5xl text-secondary"
          >
            {project.brand}
          </motion.p>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-24 px-6 md:px-12 border-b border-white/10">
        <div className="magazine-grid">
          <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
            <div className="space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">Client</h3>
                <p className="text-xl">{project.details.client}</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">Year</h3>
                <p className="text-xl">{project.details.year}</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">Role</h3>
                <p className="text-xl">{project.details.role}</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-3xl md:text-5xl mb-8 leading-tight">
              {project.description}
            </h2>
            <p className="text-lg md:text-xl text-accent/70 leading-relaxed">
              {project.details.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Project Media */}
      <section className="py-24 px-6 md:px-12 space-y-12">
        {project.details.images.map((img, index) => (
          <motion.div 
            key={`img-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full aspect-video overflow-hidden border border-white/10"
          >
            <img src={img} alt={`${project.title} detail ${index + 1}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
        
        {project.details.videos && project.details.videos.map((video, index) => (
          <motion.div 
            key={`vid-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full aspect-video overflow-hidden border border-white/10 bg-muted"
          >
            <video 
              src={video} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </section>

      {/* Next Project / Footer */}
      <section className="py-24 px-6 md:px-12 bg-muted/30 text-center">
        <h2 className="text-xs uppercase tracking-[0.5em] text-accent/40 mb-8">Next Project</h2>
        <Link to="/" className="text-5xl md:text-8xl hover:text-secondary transition-colors duration-500">
          EXPLORE MORE
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xs uppercase tracking-widest opacity-40">
          © 2026 SAGAR MINZ PORTFOLIO.
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex gap-8 text-[10px] uppercase tracking-widest opacity-40 mr-6">
            <Link to="/privacy" className="hover:opacity-100">Privacy Policy</Link>
            <Link to="/terms" className="hover:opacity-100">Terms of Service</Link>
          </div>
          <a href="https://www.instagram.com/sagar_minz_/" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
            <Instagram size={18} />
          </a>
          <a href="https://www.linkedin.com/in/sagar-minz-99748a281/" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
            <Linkedin size={18} />
          </a>
          <a href="mailto:sagarminz07@gmail.com" className="opacity-40 hover:opacity-100 transition-opacity">
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}
