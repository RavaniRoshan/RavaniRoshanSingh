import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import { Toaster } from "@/components/ui/toaster";
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Certificates from './components/Certificates';
import Places from './components/Places';
import Music from './components/Music';
import Stats from './components/Stats';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import BlogPost1 from './pages/BlogPost1';
import BlogPost2 from './pages/BlogPost2';
import BlogPost3 from './pages/BlogPost3';
import BlogPost4 from './pages/BlogPost4';
import BlogPost5 from './pages/BlogPost5';
import BlogPost6 from './pages/BlogPost6';
import BlogPost7 from './pages/BlogPost7';
import BlogPost8 from './pages/BlogPost8';
import BlogPost9 from './pages/BlogPost9';
import BlogPost10 from './pages/BlogPost10';
import CertificatesPage from './pages/CertificatesPage';
import Connect from './pages/Connect';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Set default to light mode and check for user preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Default to light mode instead of system preference
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
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
      <div className="min-h-screen px-4 py-8 md:px-8 lg:px-16 max-w-4xl mx-auto relative z-10">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={
            <main className="space-y-12 mt-8">
              <About />
              <Work />
              <Certificates />
              <Places />
              <Music />
              <Stats />
            </main>
          } />
          <Route path="/blog" element={<Blog />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/blog/ai-product-development" element={<BlogPost />} />
          <Route path="/blog/demystifying-ai-agents" element={<BlogPost1 />} />
          <Route path="/blog/full-stack-development" element={<BlogPost2 />} />
          <Route path="/blog/ai-personalization" element={<BlogPost3 />} />
          <Route path="/blog/optimizing-performance" element={<BlogPost4 />} />
          <Route path="/blog/machine-learning-fundamentals" element={<BlogPost5 />} />
          <Route path="/blog/ethical-ai-development" element={<BlogPost6 />} />
          <Route path="/blog/data-structures-algorithms" element={<BlogPost7 />} />
          <Route path="/blog/cloud-architecture" element={<BlogPost8 />} />
          <Route path="/blog/building-agent-x" element={<BlogPost9 />} />
          <Route path="/blog/nano-banana-pro" element={<BlogPost10 />} />
        </Routes>
      </div>
      <Toaster />
      <Analytics />
    </Router>
  );
}

export default App;

