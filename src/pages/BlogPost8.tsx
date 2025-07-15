import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost8: React.FC = () => {
  return (
    <div className="min-h-screen px-4 py-8 md:px-8 lg:px-16 max-w-4xl mx-auto">
      <Link to="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6">
        ← Back to Blog
      </Link>
      
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Modern Cloud Architecture: Patterns and Best Practices
        </h1>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
          <span>July 29, 2025</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 rounded-lg mb-6 flex items-center justify-center">
        </div>
      </header>

      <article className="prose dark:prose-invert max-w-none">
        {/* Content will be added later */}
      </article>
    </div>
  );
};

export default BlogPost8;
