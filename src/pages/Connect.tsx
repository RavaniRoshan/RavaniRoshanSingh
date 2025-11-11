import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  purpose: string;
  message: string;
}

const Connect: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    purpose: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          purpose: formData.purpose,
          message: formData.message,
          to_email: 'ravaniroshansingh@gmail.com',
        }
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', purpose: '', message: '' });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const purposes = [
    'Collaboration',
    'Job Opportunity',
    'Project Discussion',
    'Mentorship',
    '🍕 Pizza Party',
    'General Inquiry',
    'Other'
  ];

  return (
    <div className="min-h-screen px-4 py-12 md:px-8 lg:px-16 max-w-6xl mx-auto">
      {/* Header with back link */}
      <Link
        to="/"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-12 transition-all duration-300 hover:translate-x-[-4px] text-sm font-medium"
      >
        ← Back to Home
      </Link>

      <div className="mb-16 md:mb-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight tracking-tight">
          Let's Connect
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8"></div>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed max-w-2xl font-light tracking-wide">
          I'd love to hear from you! Whether you want to discuss a collaboration, explore opportunities, share ideas, or just say hello—reach out and let's create something amazing together.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/80 dark:to-gray-900/50 rounded-2xl p-10 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700/50 backdrop-blur-xl">
            {submitted && (
              <div className="mb-8 p-5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-300 dark:border-green-700/50 rounded-xl flex items-center gap-4 animate-in fade-in duration-300">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-green-900 dark:text-green-300 font-semibold">
                    Thanks for reaching out! 🎉
                  </p>
                  <p className="text-sm text-green-800 dark:text-green-400">
                    I'll get back to you as soon as possible.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="space-y-3">
                <label htmlFor="name" className="block text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 font-medium"
                />
              </div>

              {/* Email */}
              <div className="space-y-3">
                <label htmlFor="email" className="block text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 font-medium"
                />
              </div>

              {/* Purpose */}
              <div className="space-y-3">
                <label htmlFor="purpose" className="block text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                  Purpose of Connection
                </label>
                <div className="relative">
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 font-medium appearance-none cursor-pointer hover:border-blue-400 dark:hover:border-blue-500"
                  >
                    <option value="">Select a purpose...</option>
                    {purposes.map((purpose) => (
                      <option key={purpose} value={purpose}>
                        {purpose}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-white transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label htmlFor="message" className="block text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me more about what you have in mind..."
                  rows={6}
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none font-medium leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-3 text-lg tracking-wide"
              >
                <Mail className="w-6 h-6" />
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Suggestions */}
        <div className="md:col-span-1">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-2xl p-10 border border-blue-200 dark:border-blue-800/50 backdrop-blur-xl sticky top-24">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
              Connect Faster
            </h2>
            
            <p className="text-base text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-medium">
              For a quicker response and to see my latest work, connect with me on:
            </p>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/roshan-ravani-3a79882a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 mb-5 p-5 bg-white dark:bg-gray-800/80 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 group"
            >
              <Linkedin className="w-7 h-7 text-blue-600 transition-transform group-hover:scale-125" />
              <div className="flex-1">
                <p className="font-bold text-gray-900 dark:text-white tracking-wide">LinkedIn</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Professional updates
                </p>
              </div>
              <span className="text-gray-400 dark:text-gray-600 group-hover:translate-x-1 transition-transform text-lg">
                →
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/RavaniRoshan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800/80 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 group"
            >
              <Github className="w-7 h-7 text-gray-800 dark:text-gray-200 transition-transform group-hover:scale-125" />
              <div className="flex-1">
                <p className="font-bold text-gray-900 dark:text-white tracking-wide">GitHub</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  See my projects
                </p>
              </div>
              <span className="text-gray-400 dark:text-gray-600 group-hover:translate-x-1 transition-transform text-lg">
                →
              </span>
            </a>

            {/* Why section */}
            <div className="mt-10 pt-8 border-t border-gray-300 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 tracking-wide">
                Why reach out there?
              </h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-3 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span> Quick responses
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span> See my latest work
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span> Follow my journey
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span> Direct messaging
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative Contact Methods */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 rounded-2xl p-10 md:p-12 border border-gray-200 dark:border-gray-700/50 backdrop-blur-xl">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Other Ways to Reach Out
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed font-medium max-w-3xl">
          While I prefer messages through this form or social platforms, here are other options if you prefer a different approach:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 bg-white dark:bg-gray-800/80 rounded-xl border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 tracking-wide">
              📧 Email Direct
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              For business inquiries, you can email me at{' '}
              <a
                href="mailto:ravaniroshansingh@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold transition-colors"
              >
                ravaniroshansingh@gmail.com
              </a>
            </p>
          </div>
          <div className="p-6 md:p-8 bg-white dark:bg-gray-800/80 rounded-xl border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 tracking-wide">
              ⏱️ Response Time
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              I typically respond within <span className="font-semibold">24-48 hours</span>. For urgent matters, LinkedIn DM is fastest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
