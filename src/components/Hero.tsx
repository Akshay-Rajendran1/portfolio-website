import React, { useId } from 'react';
import { ArrowRight, GitBranch } from 'lucide-react';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const headingId = useId();

  return (
    <section id="home" className={`section ${styles.section}`}>
      {/* Background Decor */}
      <div className={styles.decorTopRight} />
      <div className={styles.decorBottomLeft} />

      <div className={`container animate-fade-in ${styles.gridContainer}`}>
        <div className={styles.contentWrapper}>
          <div className={styles.badge}>
            👋 Welcome to my portfolio
          </div>
          <h1 id={headingId} className={styles.heading}>
            Hi, I'm <span className="text-accent">Akshay</span>.<br />
            Software Engineer specializing in Full Stack and AI/ML.
          </h1>
          <p className={styles.description}>
            I'm a passionate software developer focused on creating clean, efficient, and user-friendly applications. I am currently highly interested in <strong>Full Stack Development</strong> and <strong>AI / Machine Learning</strong>.
          </p>
          <div className={styles.buttonGroup}>
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="https://github.com/Akshay-Rajendran1" target="_blank" rel="noreferrer" className="btn btn-outline">
              <GitBranch size={18} /> GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
