import React from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Product Development",
      date: "May 10, 2025",
      excerpt: "Exploring how artificial intelligence is transforming the way we build and design products for the modern world.",
      readTime: "5 min read",
      tags: ["AI", "Product Design", "Technology"]
    },
    {
      id: 2,
      title: "Building Responsive Interfaces with React and Tailwind",
      date: "April 28, 2025",
      excerpt: "A deep dive into creating beautiful, responsive user interfaces using React and Tailwind CSS for modern web applications.",
      readTime: "8 min read",
      tags: ["React", "Tailwind", "Frontend"]
    },
    {
      id: 3,
      title: "My Journey into Machine Learning Engineering",
      date: "April 15, 2025",
      excerpt: "Personal reflections on transitioning from traditional software development to specialized machine learning engineering.",
      readTime: "6 min read",
      tags: ["Career", "Machine Learning", "Personal"]
    },
    {
      id: 4,
      title: "Optimizing Performance in Large-Scale Applications",
      date: "March 30, 2025",
      excerpt: "Techniques and strategies for maintaining performance in complex, data-intensive applications at scale.",
      readTime: "10 min read",
      tags: ["Performance", "Optimization", "Architecture"]
    }
  ];

  return (
    <div className="min-h-screen px-4 py-8 md:px-8 lg:px-16 max-w-4xl mx-auto">
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Thoughts, insights, and explorations in AI, machine learning, and product development.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map(post => (
          <div key={post.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <Link to="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
