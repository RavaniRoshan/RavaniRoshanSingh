import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Places from './components/Places';
import Music from './components/Music';
import Stats from './components/Stats';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check for user preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Router>
      <div className="min-h-screen px-4 py-8 md:px-8 lg:px-16 max-w-4xl mx-auto">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={
            <main className="space-y-12 mt-8">
              <About />
              <Work />
              <Places />
              <Music />
              <Stats />
            </main>
          } />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/ai-product-development" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
