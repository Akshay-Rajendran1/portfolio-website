
import { ThemeProvider } from './ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Hero />
          <Projects />
          <Contact />
        </main>
        <footer style={{ 
          textAlign: 'center', 
          padding: '2rem', 
          color: 'var(--text-secondary)',
          borderTop: '1px solid var(--border-color)',
          marginTop: '2rem'
        }}>
          <p>© {new Date().getFullYear()} Akshay Rajendran. Built with React & TypeScript.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
