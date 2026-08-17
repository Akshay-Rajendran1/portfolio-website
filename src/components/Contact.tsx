import React, { useState, useCallback, useRef } from 'react';
import { Mail, Send, GitBranch } from 'lucide-react';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const nameInputRef = useRef<HTMLInputElement>(null);

  // useCallback to memoize the change handler so it isn't recreated on every render
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Focus back on first input using useRef
        if (nameInputRef.current) {
          nameInputRef.current.focus();
        }
      } else {
        console.error("Web3Forms Error:", result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In <span className="text-accent">Touch</span></h2>
        
        <div className={styles.grid}>
          <div className={styles.intro}>
            <p className={styles.introText}>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className={styles.iconGroup}>
              <a href="mailto:contact@akshay-rajendran.com" className={`btn btn-outline ${styles.iconLink}`}>
                <Mail size={24} />
              </a>
              <a href="https://github.com/Akshay-Rajendran1" target="_blank" rel="noreferrer" className={`btn btn-outline ${styles.iconLink}`}>
                <GitBranch size={24} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={`glass ${styles.form}`}>
            <div className={styles.inputGrid}>
              <div>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  ref={nameInputRef}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
            </div>
            
            <div className={styles.textareaContainer}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={styles.textarea}
              />
            </div>
            
            <button 
              type="submit" 
              className={`btn btn-primary ${styles.submitBtn} ${isSubmitting ? styles.submitBtnDisabled : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <Send size={18} />}
            </button>
            
            {submitStatus === 'success' && (
              <p className={styles.successMsg}>
                Message sent successfully!
              </p>
            )}
            
            {submitStatus === 'error' && (
              <p className={styles.errorMsg}>
                Failed to send message. Please try again or use the email button above.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
