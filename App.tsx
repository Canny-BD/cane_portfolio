
import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Globe, Award, Video, Palette, 
  Newspaper, ChevronRight, Download, Menu, X, CheckCircle2,
  Calendar, Briefcase, GraduationCap, Star, Moon, Sun, ExternalLink
} from 'lucide-react';
import { PROFILE, SKILLS, EXPERIENCES, EDUCATIONS, SOCIAL_LINKS, PROJECTS } from './constants';
import AIChat from './components/AIChat';
import SectionHeading from './components/SectionHeading';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <a href="#" className="block h-8 md:h-10">
              <img 
                src={PROFILE.logoUrl} 
                alt="CAN-E Logo" 
                className={`h-full w-auto transition-all ${darkMode ? 'brightness-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]' : 'drop-shadow-sm'}`}
                onError={(e) => {
                  // Fallback to text if image fails to load
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">CAN-E.</span>';
                }}
              />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {item}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleDarkMode} 
                className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="bg-slate-900 dark:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 dark:hover:bg-blue-700 transition-all shadow-md">
                Hire Me
              </button>
            </div>
          </div>

          <div className="flex md:hidden items-center gap-4">
             <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="p-2 text-slate-900 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl border-t border-slate-100 dark:border-slate-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
            {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-slate-800 dark:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 dark:opacity-20">
          <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-bold rounded-full mb-6 uppercase tracking-wider">
              Available for Projects
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">{PROFILE.alias}</span>. <br />
              <span className="text-slate-500 dark:text-slate-400">I Design, Edit & Report.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-xl">
              15+ years of experience blending visual arts, video cinematography, and digital journalism into one creative powerhouse.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 dark:shadow-none flex items-center gap-2">
                Work With Me <ChevronRight size={20} />
              </a>
              <button className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2">
                <Download size={20} /> Download CV
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 grayscale opacity-60 dark:opacity-40">
                <div className="flex items-center gap-2 font-bold text-slate-500 dark:text-slate-300">
                    <Star className="text-amber-400 fill-amber-400" size={20}/> Level 2 Fiverr
                </div>
                <div className="flex items-center gap-2 font-bold text-slate-500 dark:text-slate-300">
                    <CheckCircle2 className="text-emerald-500" size={20}/> 5-Star Rated
                </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={PROFILE.photoUrl} 
                alt={PROFILE.name}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl z-20 animate-bounce">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-xl text-blue-600 dark:text-blue-400">
                  <Award size={32} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tight text-nowrap">Experience</p>
                  <p className="text-2xl font-black text-slate-900 dark:text-white">15+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Professional Summary" 
            subtitle="Bridging the gap between visual design, video production, and written content as a 'one-stop' asset for creative projects."
            light={darkMode}
          />
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-[3rem] p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                International Expertise in High-Performance Environments
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                {PROFILE.summary}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Location", val: "Narayanganj, BD", icon: <MapPin size={18} /> },
                  { label: "Freelance", val: "Available", icon: <Globe size={18} /> },
                  { label: "Language", val: "English, Bengali", icon: <ChevronRight size={18} /> },
                  { label: "Email", val: PROFILE.email, icon: <Mail size={18} /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <div className="text-blue-600 dark:text-blue-400">{item.icon}</div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">{item.label}</p>
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate max-w-[120px]">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white flex flex-col justify-between aspect-square transform hover:scale-105 transition-all">
                    <Video size={40} strokeWidth={1.5} />
                    <div>
                        <p className="text-4xl font-black mb-1">500+</p>
                        <p className="text-sm font-medium text-blue-100">Videos Edited</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between aspect-square transform hover:scale-105 transition-all">
                    <Palette size={40} strokeWidth={1.5} className="text-indigo-600 dark:text-indigo-400" />
                    <div>
                        <p className="text-4xl font-black text-slate-900 dark:text-white mb-1">1k+</p>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Designs Created</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Core Competencies" subtitle="Versatile skill set spanning across technical and creative domains." light={darkMode} />
          <div className="grid md:grid-cols-3 gap-8">
            {SKILLS.map((group, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:scale-[1.03] transition-all duration-300 group cursor-default">
                <div className="w-16 h-16 bg-blue-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-8 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {idx === 0 ? <Palette size={32} /> : idx === 1 ? <Newspaper size={32} /> : <Briefcase size={32} />}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-6">{group.category}</h3>
                <ul className="space-y-4">
                  {group.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-slate-600 dark:text-slate-300 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section id="projects" className="py-24 bg-slate-100 dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Recent Projects" subtitle="A selection of my latest design, video, and journalism work." light={darkMode} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 group flex flex-col">
                <div className="relative overflow-hidden aspect-video">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-slate-900 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
                       <ExternalLink size={14} /> View Details
                    </button>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-[10px] uppercase font-black text-blue-600 dark:text-blue-400 mb-2 tracking-widest">{project.category}</span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{project.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-900 dark:bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500 rounded-l-full blur-[180px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeading title="Career History" subtitle="A timeline of 15 years in creative excellence." light />
          
          <div className="space-y-8 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-700">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                   <div className="md:hidden flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 z-10">
                            <Calendar size={18} />
                        </div>
                        <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">{exp.period}</span>
                    </div>

                    <div className={`bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-all ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <h4 className="text-xl font-bold text-white mb-2">{exp.role}</h4>
                        <p className="text-blue-400 font-bold mb-4">{exp.company} {exp.location && `(${exp.location})`}</p>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            {exp.description}
                        </p>
                    </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 h-full flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-blue-600 flex items-center justify-center z-10">
                        <Briefcase size={20} className="text-blue-400" />
                    </div>
                    <div className="mt-4 px-3 py-1 bg-slate-800 rounded-full border border-slate-700 text-[10px] font-bold text-slate-400 whitespace-nowrap uppercase tracking-widest">
                        {exp.period}
                    </div>
                </div>

                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Education & Training" subtitle="Academic background and specialized professional courses." light={darkMode} />
          <div className="grid md:grid-cols-3 gap-8">
            {EDUCATIONS.map((edu, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 flex flex-col items-center text-center hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-indigo-50 dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <GraduationCap size={28} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-bold text-sm mb-3">{edu.institution}</p>
                <div className="px-3 py-1 bg-white dark:bg-slate-700 rounded-full text-xs font-black text-slate-400 dark:text-slate-300 mb-4 border border-slate-100 dark:border-slate-600 uppercase tracking-widest">{edu.year}</div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white dark:bg-slate-900 rounded-[4rem] shadow-2xl overflow-hidden grid lg:grid-cols-5">
            <div className="lg:col-span-2 bg-slate-900 dark:bg-slate-800 text-white p-12 md:p-16 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-extrabold mb-8">Let's connect.</h2>
                <p className="text-slate-400 mb-12 text-lg">
                  Whether you have a question or a project proposal, I'm always open to talking.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 dark:bg-slate-700 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Send an Email</p>
                      <p className="font-bold text-lg">{PROFILE.email}</p>
                    </div>
                  </div>
                  {PROFILE.phones.map((phone, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-2xl bg-slate-800 dark:bg-slate-700 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Call Me</p>
                        <p className="font-bold text-lg">{phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                {SOCIAL_LINKS.map((link, i) => (
                  <a key={i} href={link.url} className="w-10 h-10 rounded-lg bg-slate-800 dark:bg-slate-700 flex items-center justify-center hover:bg-blue-600 transition-all">
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 p-12 md:p-16">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                  <textarea rows={5} placeholder="How can I help you?" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none dark:text-white"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold shadow-xl shadow-blue-200 dark:shadow-none transition-all flex items-center justify-center gap-2 text-lg">
                  Send Message <ChevronRight size={24} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 text-center transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center mb-6 h-12">
             <img 
                src={PROFILE.logoUrl} 
                alt="CAN-E Logo" 
                className={`h-full w-auto ${darkMode ? 'brightness-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]' : 'drop-shadow-md'}`}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">CAN-E.</span>';
                }}
              />
          </div>
          <div className="flex justify-center gap-8 mb-8">
             {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold text-slate-400 dark:text-slate-500 hover:text-blue-600 uppercase tracking-widest transition-colors">
                {item}
              </a>
            ))}
          </div>
          <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} {PROFILE.name}. All Rights Reserved. <br className="md:hidden" />
            Built with 💙 using React & Tailwind.
          </p>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;
