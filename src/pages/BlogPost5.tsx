import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost5: React.FC = () => {
  return (
    <div className="min-h-screen px-4 py-8 md:px-8 lg:px-16 max-w-4xl mx-auto">
      <Link to="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6">
        ← Back to Blog
      </Link>
      
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent">
          Machine Learning Fundamentals: A Developer's Guide
        </h1>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
          <span>July 8, 2025</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-r from-yellow-100 to-red-100 dark:from-yellow-900 dark:to-red-900 rounded-lg mb-6 flex items-center justify-center">
        </div>
      </header>

      <article className="prose dark:prose-invert max-w-none">
        {/* Content will be added later */}
      </article>
    </div>
  );
};

export default BlogPost5;
