import React, { useState, useEffect, useRef } from 'react';
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or reach out via email directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`transition-all duration-700 min-h-screen flex items-center justify-center py-20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="w-full max-w-2xl px-4">
        <div className="relative">
          {/* Header */}
          <div className={`mb-8 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              let's connect
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Have a project in mind or just want to chat? Drop me a message.
            </p>
          </div>

          {/* Form Container */}
          <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-6 right-6 w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
            <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-1/2 right-12 w-1 h-1 bg-pink-500 rounded-full animate-bounce delay-500"></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {/* Name Field */}
              <div className="group">
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 transition-colors duration-200 group-focus-within:text-blue-500"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 transition-colors duration-200 group-focus-within:text-blue-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div className="group">
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 transition-colors duration-200 group-focus-within:text-blue-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                  placeholder="Tell me about your project or just say hi..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full relative px-6 py-3 rounded-full font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </span>
              </button>
            </form>
          </div>

          {/* Alternative Contact Methods */}
          <div className={`mt-8 text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Or reach out directly at
            </p>
            <a 
              href="mailto:ravaniroshansingh@gmail.com"
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-400/40 to-purple-500/40 text-white/90 hover:from-blue-400/60 hover:to-purple-500/60 transition-all duration-300 hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m2 7 10 7 10-7"/>
              </svg>
              ravaniroshansingh@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
