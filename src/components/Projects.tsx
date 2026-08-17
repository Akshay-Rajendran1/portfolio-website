import { useState, useMemo } from 'react';
import { ExternalLink, GitBranch, Code2 } from 'lucide-react';
import styles from './Projects.module.css';

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

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projectsData;
    return projectsData.filter(project => project.category === filter);
  }, [filter]);

  const categories = ['All', 'Python', 'Jupyter Notebook', 'Systems', 'Full Stack'];

  return (
    <section id="projects" className={`section ${styles.section}`}>
      <div className="container">
        <h2 className="section-title">Featured <span className="text-accent">Projects</span></h2>
        
        {/* Filter Buttons */}
        <div className={styles.filterContainer}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`${filter === cat ? 'btn btn-primary' : 'btn btn-outline'} ${styles.filterBtn}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {filteredProjects.map(project => (
            <div key={project.id} className={`glass ${styles.card}`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <Code2 size={24} />
                </div>
                <div className={styles.links}>
                  <a href={project.github} target="_blank" rel="noreferrer" className={styles.linkIcon}>
                    <GitBranch size={20} />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className={styles.linkIcon}>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>
                {project.description}
              </p>
              
              <div className={styles.meta}>
                <span className={styles.language}>
                  <span 
                    className={styles.dot}
                    style={{ 
                      backgroundColor: project.language === 'Python' ? '#3572A5' : project.language === 'Rust' ? '#dea584' : 'var(--accent-color)' 
                    }}
                  ></span>
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
