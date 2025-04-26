import React from 'react';
import { Mail, Github, Instagram, MessageSquare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-4 py-8">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Ashton Coelho
        </h1>
        <p className="text-xl text-gray-400 mt-2">Web Developer, AI & ML Enthusiast</p>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
        a learner with a strong passion for Frontend development, artificial intelligence, Python development and Machine
        Learning. I specialize in creating responsive and user-friendly front-end applications while integrating AI/ML models
        to solve real-world challenges. I am constantly exploring new technologies to enhance my skills and contribute
        effectively to the tech industry.
        </p>
      </header>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Incompleta',
              description: ' a virtual museum where unfinished projects, ideas, and artworks are preserved, shared, and explored by creators around the world.',
              link: 'https://incompleta.vercel.app/',
              tags: ['Typescript', 'Tailwind CSS']
            },
            {
              title: 'will cook',
              description: 'later',
              link: 'https://github.com/yourusername/smart-task-manager',
              tags: ['lmao']
            },
            {
              title: 'Penny-Wise',
              description: 'A modern, responsive portfolio showcasing my projects and skills.',
              link: 'https://ashtondotcoelho44.github.io/PENNY-WISE/',
              tags: ['HTML', 'CSS', 'JavaScript']
            }
          ].map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 
                       transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 
                       hover:border-purple-500/50 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400">{project.title}</h3>
              <p className="text-gray-400 text-sm">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-8">Technologies</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              name: 'HTML',
              imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
            },
            {
              name: 'CSS',
              imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
            },
            {
              name: 'JavaScript',
              imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
            },
            {
              name: 'React',
              imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
            },
            {
              name: 'Python',
              imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
            },
            {
              name: 'NumPy',
              imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg'
            },
            {
              name: 'Scikit-learn',
              imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg'
            },
          ].map(({ name, imageUrl }) => (
            <div
              key={name}
              className="flex flex-col items-center group"
            >
              <div className="w-16 h-16 rounded-full bg-gray-800/40 flex items-center justify-center
                            transition-all duration-300 group-hover:bg-gray-700 group-hover:shadow-lg
                            group-hover:shadow-purple-500/20 p-3">
                <img 
                  src={imageUrl} 
                  alt={name}
                  className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <span className="mt-2 text-sm text-gray-400 group-hover:text-purple-400">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Connect With Me</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { icon: Mail, name: 'Gmail', href: 'mailto:ashtoncoelho007@gmail.com' },
            { icon: MessageSquare, name: 'Discord', href: 'https://discord.com/channels/@me' },
            { icon: Github, name: 'GitHub', href: 'https://github.com/Ashtondotcoelho44' },
            { icon: Instagram, name: 'Instagram', href: 'https://www.instagram.com/ashton_coelho/' },
          ].map(({ icon: Icon, name, href }) => (
            <a
              key={name}
              href={href}
              className="group flex flex-col items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center
                            transition-all duration-300 group-hover:bg-purple-500/20 group-hover:scale-110">
                <Icon className="w-6 h-6 text-gray-400 group-hover:text-purple-400" />
              </div>
              <span className="mt-2 text-sm text-gray-400 group-hover:text-purple-400">{name}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
