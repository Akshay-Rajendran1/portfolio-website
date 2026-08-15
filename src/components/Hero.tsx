import React, { useId } from 'react';
import { ArrowRight, GitBranch } from 'lucide-react';

export const Hero: React.FC = () => {
  const headingId = useId();

  return (
    <section id="home" className="section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decor */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'var(--accent-color)',
        filter: 'blur(150px)',
        opacity: 0.2,
        zIndex: -1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: '#8b5cf6', // purple accent
        filter: 'blur(150px)',
        opacity: 0.15,
        zIndex: -1
      }} />

      <div className="container animate-fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
        <div style={{ maxWidth: '800px' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '0.5rem 1rem', 
            borderRadius: '2rem', 
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            fontSize: '0.875rem',
            fontWeight: 500,
            marginBottom: '1.5rem',
            color: 'var(--text-secondary)'
          }}>
            👋 Welcome to my portfolio
          </div>
          <h1 id={headingId} style={{ 
            fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
            lineHeight: 1.1, 
            fontWeight: 800,
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em'
          }}>
            Hi, I'm <span className="text-accent">Akshay</span>.<br />
            I build things for the web.
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-secondary)', 
            marginBottom: '2.5rem',
            maxWidth: '600px',
            lineHeight: 1.6
          }}>
            I'm a passionate software developer focused on creating clean, efficient, and user-friendly applications. I am currently highly interested in <strong>Full Stack Development</strong> and <strong>AI / Machine Learning</strong>.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
