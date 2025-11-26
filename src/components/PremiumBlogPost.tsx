import React from 'react';
import { Link } from 'react-router-dom';

interface PremiumBlogPostProps {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  children: React.ReactNode;
  emoji?: string;
}

export const PremiumBlogPost: React.FC<PremiumBlogPostProps> = ({
  title,
  date,
  readTime,
  tags,
  children,
  emoji = '📝'
}) => {
  return (
    <div className="min-h-screen px-4 py-8 md:px-8 lg:px-16 max-w-4xl mx-auto">
      <Link to="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 font-medium transition-all duration-300 hover:translate-x-1">
        ← Back to Blog
      </Link>
      
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <span className="flex items-center">{date}</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center">{readTime}</span>
          <span className="hidden sm:inline">•</span>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full h-64 md:h-80 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-xl mb-8 flex items-center justify-center border border-blue-200 dark:border-blue-800">
          <div className="text-7xl md:text-8xl">{emoji}</div>
        </div>
      </header>

      <article className="space-y-6">
        <style>{`
          .premium-blog-post h2 {
            @apply text-3xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-50 leading-tight;
          }
          .premium-blog-post h3 {
            @apply text-2xl font-bold mt-8 mb-3 text-gray-800 dark:text-gray-100;
          }
          .premium-blog-post p {
            @apply text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6;
          }
          .premium-blog-post ul {
            @apply space-y-3 ml-6 mb-6;
          }
          .premium-blog-post li {
            @apply text-lg text-gray-700 dark:text-gray-300 list-disc;
          }
          .premium-blog-post strong {
            @apply font-bold text-gray-900 dark:text-gray-100;
          }
          .premium-blog-post em {
            @apply italic text-gray-800 dark:text-gray-200;
          }
          .premium-blog-post blockquote {
            @apply border-l-4 border-blue-500 pl-6 italic text-gray-700 dark:text-gray-300 my-8 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg;
          }
          .premium-blog-post code {
            @apply bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono text-sm text-red-600 dark:text-red-400;
          }
          .premium-blog-post pre {
            @apply bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto my-6 border border-gray-700;
          }
        `}</style>
        
        <div className="premium-blog-post">
          {children}
        </div>
      </article>

      <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-50">Related Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/blog" className="group border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:-translate-y-1 block bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
            <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Back to Blog</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">Explore all articles and insights from the blog collection.</p>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:translate-x-1 inline-flex transition-transform">View all →</span>
          </Link>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
            <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">Share Your Thoughts</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">Found this interesting? Connect with me to discuss ideas about AI, product development, and technology.</p>
            <Link to="/connect" className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">Get in touch →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumBlogPost;
