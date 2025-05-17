import React from 'react';

const Work: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "BlendTools",
      description: "A curated collection of tools designed to enhance and streamline workflows in Blender, the open-source 3D creation suite.",
      longDescription: "BlendTools is a comprehensive toolkit that addresses common pain points in 3D modeling and animation workflows. It includes custom node setups, Python scripts, and UI enhancements that significantly reduce the time spent on repetitive tasks.",
      technologies: ["Python", "Blender API", "UI/UX Design", "3D Modeling"],
      features: [
        "Script Repository with one-click installation",
        "Custom node groups for procedural texturing",
        "Workflow automation tools",
        "Performance optimization utilities"
      ],
      timeline: "2024 - Present"
    },
    {
      id: 2,
      title: "CrewHub",
      description: "A collaborative platform for AI agent orchestration and workflow management that empowers teams.",
      longDescription: "CrewHub enables teams to assemble, configure, and manage specialized AI agents for complex workflows. The platform provides a visual interface for designing agent interactions, monitoring performance, and optimizing collaborative AI systems.",
      technologies: ["TypeScript", "React", "Node.js", "MongoDB", "WebSockets"],
      features: [
        "Visual workflow builder for AI agent orchestration",
        "Real-time collaboration and monitoring",
        "Custom agent configuration and training",
        "Performance analytics and optimization tools"
      ],
      timeline: "Sep 2022 - Dec 2023"
    },
    {
      id: 3,
      title: "Markcode-t1",
      description: "Next-gen coding companion designed to supercharge development workflow with a sleek interface and powerful features.",
      longDescription: "Markcode-t1 is an intelligent coding environment that combines the best features of modern IDEs with AI-powered assistance. It provides context-aware suggestions, automated refactoring, and integrated documentation to streamline the development process.",
      technologies: ["Electron", "TypeScript", "Monaco Editor", "WebAssembly", "Machine Learning"],
      features: [
        "AI-powered code completion and refactoring",
        "Integrated terminal and debugging tools",
        "Custom extension ecosystem",
        "Cross-platform support with native performance"
      ],
      timeline: "Jul 2022 - Nov 2023"
    },
    {
      id: 4,
      title: "Wardrobify",
      description: "AI-powered personal stylist web application that leverages artificial intelligence to provide personalized fashion recommendations.",
      longDescription: "Wardrobify uses computer vision and machine learning to analyze users' existing wardrobes and style preferences, then generates personalized outfit recommendations and shopping suggestions. The platform includes virtual try-on features and seasonal trend analysis.",
      technologies: ["Python", "TensorFlow", "React", "AWS", "Computer Vision"],
      features: [
        "Wardrobe digitization and management",
        "AI-powered outfit recommendations",
        "Virtual try-on technology",
        "Personalized shopping suggestions"
      ],
      timeline: "Sept 2018 - Present"
    }
  ];

  return (
    <div className="min-h-screen px-4 py-8 md:px-8 lg:px-16 max-w-4xl mx-auto">
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Work</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Detailed overview of my projects and professional experience in AI/ML engineering and product development.
        </p>
      </header>

      <div className="space-y-12">
        {projects.map(project => (
          <div key={project.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.timeline}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{project.longDescription}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Key Features</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
