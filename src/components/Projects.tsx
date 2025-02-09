import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  setShowArtPortfolio: (show: boolean) => void;
  setShowCrossMedia: (show: boolean) => void;
  setShowNightWatch: (show: boolean) => void;
}

const projects = [
  {
    title: 'Cross Media Design Projects',
    description: 'Compilation of works including a graphic design poster, concept sketing, moodboards, and contact sheets.',
    tech: ['Photoshop', 'Figma', 'Procreate'],
    image: './assets/pdfs/Concept_Sketching.png',
    isCrossMedia: true
  },
  {
    title: 'Night Watch',
    description: 'An app that lets users keep track of movies and TV shows they want to watch and have already watched by creating customizable lists. These lists allow the users to give their own rating and write their own thoughts about the movie or TV show. Users are also able to participate in the comments sections for non-spoilers, spoilers, and write reviews. There is a section for hot takes where users can share opinions in the form of an online social discussion forum and share their hot takes on the movies and shows they have watched.',
    tech: ['Figma', 'UI/UX Design', 'User Research'],
    image: './assets/images/NightWatch_Thumbnail.png',
    prototype: 'https://www.figma.com/proto/btMEqfwJ046m8LyNPuIZkq/Night-Watch?node-id=8-72&starting-point-node-id=8%3A72&t=niBcx1uLMibRkIuC-1',
    isUiProject: true
  },
  {
    title: 'Art Portfolio',
    description: 'A showcase of digital artwork and illustrations created using various mediums.',
    tech: ['Procreate', 'Pencil', 'Acrylic Paint', "Digital Art"],
    image: './assets/images/Rose.PNG',
    isArtPortfolio: true
  },
  {
    title: 'Ball Obstacle Game',
    description: 'A 3D game created in 3rd person view where the player must avoid obstacles to reach the end of the level. Player control is a ball as the main character.',
    tech: ['Unity', 'C#', 'Visual Studio'],
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
    github: '#',
    live: '#'
  },
  {
    title: 'First Person Shooter Game',
    description: 'A 3D shooter game handling weapons and attacking against patrolling enemy AI.',
    tech: ['Unity', 'C#', 'Visual Studio'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    github: '#',
    live: '#'
  }
];

export function Projects({ setShowArtPortfolio, setShowCrossMedia, setShowNightWatch }: ProjectsProps) {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.isArtPortfolio ? (
                    <button
                      onClick={() => setShowArtPortfolio(true)}
                      className="text-white hover:text-purple-300 transition-colors px-6 py-2 border-2 border-white rounded-full"
                    >
                      View Gallery
                    </button>
                  ) : project.isCrossMedia ? (
                    <button
                      onClick={() => setShowCrossMedia(true)}
                      className="text-white hover:text-purple-300 transition-colors px-6 py-2 border-2 border-white rounded-full"
                    >
                      View Projects
                    </button>
                  ) : project.isUiProject ? (
                    <>
                      <a
                        href={project.prototype}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-300 transition-colors px-6 py-2 border-2 border-white rounded-full"
                      >
                        View Prototype
                      </a>
                      <button
                        onClick={() => setShowNightWatch(true)}
                        className="text-white hover:text-purple-300 transition-colors px-6 py-2 border-2 border-white rounded-full"
                      >
                        View Project
                      </button>
                    </>
                  ) : (
                    <>
                      {project.github && (
                        <a href={project.github} className="text-white hover:text-purple-300 transition-colors">
                          <Github className="w-6 h-6" />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} className="text-white hover:text-purple-300 transition-colors">
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm bg-purple-100 text-purple-600 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}