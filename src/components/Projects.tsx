import React, { useState, useMemo } from 'react';
import { ExternalLink, GitBranch, Code2 } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'audioCNN',
    description: 'An audio classifying AI/ML model with quantization.',
    language: 'Jupyter',
    github: 'https://github.com/Akshay-Rajendran1/audioCNN',
    category: 'Jupyter Notebook'
  },
  {
    id: 2,
    title: 'audio_mixer_seperation',
    description: 'Jupyter Notebook for advanced audio mixing and separation.',
    language: 'Jupyter',
    github: 'https://github.com/Akshay-Rajendran1/audio_mixer_seperation',
    category: 'Jupyter Notebook'
  },
  {
    id: 3,
    title: 'twizzler',
    description: 'The Twizzler Operating System (Forked). Exploring advanced systems and OS architecture.',
    language: 'Rust',
    github: 'https://github.com/Akshay-Rajendran1/twizzler',
    category: 'Systems'
  },
  {
    id: 4,
    title: 'Client-server-half-duplex',
    description: 'Final project for computer systems architecture class involving client-server communication models.',
    language: 'Python',
    github: 'https://github.com/Akshay-Rajendran1/Client-server-half-duplex',
    category: 'Python'
  },
  {
    id: 5,
    title: 'picam',
    description: 'Raspberry Pi 5 security camera implementation.',
    language: 'Python',
    github: 'https://github.com/Akshay-Rajendran1/picam',
    category: 'Python'
  },
  {
    id: 6,
    title: 'InterviewPal',
    description: 'AI-powered platform that simulates real technical and behavioral interviews, providing instant feedback and tracking weaknesses.',
    language: 'Full Stack',
    github: 'https://github.com/MandoBug/InterviewPal',
    category: 'Full Stack'
  },
  {
    id: 7,
    title: 'Study-Buddy',
    description: 'AI study tool that processes audio using AssemblyAI and leverages Cohere AI to automatically generate flashcards, fill-in-the-blanks, and MCQs.',
    language: 'Full Stack',
    github: 'https://github.com/ArneshKumar/Study-Buddy',
    category: 'Full Stack'
  }
];

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  // useMemo to only recalculate filtered projects when the filter or data changes
  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projectsData;
    return projectsData.filter(project => project.category === filter);
  }, [filter]);

  const categories = ['All', 'Python', 'Jupyter Notebook', 'Systems', 'Full Stack'];

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Featured <span className="text-accent">Projects</span></h2>
        
        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={filter === cat ? 'btn btn-primary' : 'btn btn-outline'}
              style={{ padding: '0.5rem 1.5rem', borderRadius: '2rem' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {filteredProjects.map(project => (
            <div key={project.id} className="glass" style={{
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
              transition: 'transform 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', color: 'var(--accent-color)' }}>
                  <Code2 size={24} />
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} className="hover:text-accent transition-colors">
                    <GitBranch size={20} />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} className="hover:text-accent transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', minHeight: '60px' }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <span style={{ 
                    width: '10px', height: '10px', borderRadius: '50%', 
                    backgroundColor: project.language === 'Python' ? '#3572A5' : project.language === 'Rust' ? '#dea584' : 'var(--accent-color)' 
                  }}></span>
                  {project.language}
                </span>
                <span>{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
