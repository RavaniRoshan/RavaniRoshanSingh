import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
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
import { useState, useEffect } from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from './components/ui/sidebar';
import { Home, Newspaper } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/">
                    <Home className="mr-2" />
                    Home
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/blog">
                    <Newspaper className="mr-2" />
                    Blog
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <div className="min-h-screen px-4 py-8 sm:px-6 md:px-8 lg:px-16 max-w-4xl mx-auto">
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
            <Route path="/blog/demystifying-ai-agents" element={<BlogPost1 />} />
            <Route path="/blog/full-stack-development" element={<BlogPost2 />} />
            <Route path="/blog/ai-personalization" element={<BlogPost3 />} />
            <Route path="/blog/optimizing-performance" element={<BlogPost4 />} />
            <Route path="/blog/machine-learning-fundamentals" element={<BlogPost5 />} />
            <Route path="/blog/ethical-ai-development" element={<BlogPost6 />} />
            <Route path="/blog/data-structures-algorithms" element={<BlogPost7 />} />
            <Route path="/blog/cloud-architecture" element={<BlogPost8 />} />
          </Routes>
        </div>
        <Analytics />
      </SidebarProvider>
    </Router>
  );
}

export default App;

