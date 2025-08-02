export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  link: string;
  skills: string[];
  category: string;
  color: string;
  gradient: string;
  bgGradient: string;
}

export const allCertificates: Certificate[] = [
    {
      id: 1,
      title: "Front End Development Libraries",
      issuer: "freeCodeCamp",
      date: "Feb 2025",
      credentialId: "fccfa059490-3d19-4491-a271-f6d4b517d582-fedl",
      link: "https://freecodecamp.org/certification/fccfa059490-3d19-4491-a271-f6d4b517d582/front-end-development-libraries",
      skills: ["React.js"],
      category: "Frontend Development",
      color: "blue",
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      id: 2,
      title: "Electronic Arts - Software Engineering Job Simulation",
      issuer: "Forage",
      date: "Dec 2024",
      credentialId: "cnakTF3k2otWxaKWr",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_5PuCun9rwkcGsmBLf_1733986161123_completion_certificate.pdf",
      skills: ["Software Engineering"],
      category: "Software Engineering",
      color: "purple",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    },
    {
      id: 3,
      title: "Machine Learning with Python",
      issuer: "Cognitive Class",
      date: "Dec 2024",
      credentialId: "63023473e8a94725b2061003516ad226",
      link: "https://courses.cognitiveclass.ai/certificates/63023473e8a94725b2061003516ad226",
      skills: ["Machine Learning"],
      category: "Machine Learning",
      color: "green",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      id: 4,
      title: "Machine Learning with Python",
      issuer: "freeCodeCamp",
      date: "Dec 2024",
      credentialId: "fccfa059490-3d19-4491-a271-f6d4b517d582-mlwp",
      link: "https://freecodecamp.org/certification/fccfa059490-3d19-4491-a271-f6d4b517d582/machine-learning-with-python-v7",
      skills: ["Neuro-Linguistic Programming (NLP)"],
      category: "Machine Learning",
      color: "orange",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20"
    },
    {
      id: 5,
      title: "Prompt Engineering for Vision Models",
      issuer: "DeepLearning.AI",
      date: "Dec 2024",
      credentialId: "",
      link: "https://learn.deeplearning.ai/accomplishments/75befc5c-d9f3-42f0-b1fd-70a1384c0fac?usp=sharing",
      skills: ["Prompt Engineering"],
      category: "AI/ML",
      color: "indigo",
      gradient: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20"
    },
    {
      id: 6,
      title: "Statistics 101",
      issuer: "Cognitive Class",
      date: "Dec 2024",
      credentialId: "188eef7ca02f446284d17486baddd303",
      link: "https://courses.cognitiveclass.ai/certificates/188eef7ca02f446284d17486baddd303",
      skills: ["Statistics"],
      category: "Data Science",
      color: "teal",
      gradient: "from-teal-500 to-cyan-600",
      bgGradient: "from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20"
    },
    {
      id: 7,
      title: "Walmart USA - Advanced Software Engineering Job Simulation",
      issuer: "Forage",
      date: "Dec 2024",
      credentialId: "Hmbg4wircK6uNmPk2",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_5PuCun9rwkcGsmBLf_1733989829566_completion_certificate.pdf",
      skills: ["Software Engineering"],
      category: "Software Engineering",
      color: "yellow",
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
    },
    {
      id: 8,
      title: "Computer Vision",
      issuer: "Kaggle",
      date: "Nov 2024",
      credentialId: "",
      link: "https://www.linkedin.com/in/roshan-ravani-3a79882a3/details/certifications/1.731159323007e+12/single-media-viewer?type=IMAGE&profileId=ACoAAElLHC8BoKlidQKxMIO-ZuUiCq0sBbaCxss",
      skills: ["Computer Vision"],
      category: "AI/ML",
      color: "pink",
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20"
    },
    {
      id: 9,
      title: "Foundational C# with Microsoft",
      issuer: "freeCodeCamp",
      date: "Nov 2024",
      credentialId: "fccfa059490-3d19-4491-a271-f6d4b517d582-fcswm",
      link: "https://freecodecamp.org/certification/fccfa059490-3d19-4491-a271-f6d4b517d582/foundational-c-sharp-with-microsoft",
      skills: ["C#"],
      category: "Programming",
      color: "emerald",
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20"
    },
    {
      id: 10,
      title: "Goldman Sachs - Software Engineering Job Simulation",
      issuer: "Forage",
      date: "Nov 2024",
      credentialId: "h6gJo9d3pLZRCQEBf",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/NPdeQ43o8P9HJmJzg_MBA4MnZTNFEoJZGnk_5PuCun9rwkcGsmBLf_1731675288028_completion_certificate.pdf",
      skills: ["Software Engineering"],
      category: "Software Engineering",
      color: "violet",
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20"
    },
    {
      id: 11,
      title: "Introduction to Generative AI",
      issuer: "Google",
      date: "Nov 2024",
      credentialId: "12849044",
      link: "https://www.cloudskillsboost.google/public_profiles/66247599-bda3-4997-a75c-5146258d420d/badges/12849044?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      skills: ["Generative AI"],
      category: "AI/ML",
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
    },
    {
      id: 12,
      title: "Intro to Game AI and Reinforcement Learning",
      issuer: "Kaggle",
      date: "Nov 2024",
      credentialId: "",
      link: "https://www.linkedin.com/in/roshan-ravani-3a79882a3/details/certifications/1.731498208524e+12/single-media-viewer?type=IMAGE&profileId=ACoAAElLHC8BoKlidQKxMIO-ZuUiCq0sBbaCxss",
      skills: ["Game AI", "Reinforcement Learning"],
      category: "AI/ML",
      color: "red",
      gradient: "from-red-500 to-pink-600",
      bgGradient: "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20"
    },
    {
      id: 13,
      title: "Webflow 101",
      issuer: "Webflow",
      date: "Nov 2024",
      credentialId: "",
      link: "https://www.linkedin.com/in/roshan-ravani-3a79882a3/details/certifications/1.730964986537e+12/single-media-viewer?type=DOCUMENT&profileId=ACoAAElLHC8BoKlidQKxMIO-ZuUiCq0sBbaCxss",
      skills: ["Web Design", "Responsive Web Design"],
      category: "Web Development",
      color: "cyan",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20"
    },
    {
      id: 14,
      title: "LangChain for LLM Application Development",
      issuer: "DeepLearning.AI",
      date: "2024",
      credentialId: "",
      link: "https://learn.deeplearning.ai/accomplishments/06d9afa2-4db9-4085-a8e9-b81c1b7dc343?usp=sharing",
      skills: ["LangChain", "LLM"],
      category: "AI/ML",
      color: "lime",
      gradient: "from-lime-500 to-green-600",
      bgGradient: "from-lime-50 to-green-50 dark:from-lime-900/20 dark:to-green-900/20"
    },
    {
      id: 15,
      title: "ACP: Agent Communication Protocol",
      issuer: "DeepLearning.AI",
      date: "2024",
      credentialId: "",
      link: "https://learn.deeplearning.ai/accomplishments/4e46f175-9b1d-4605-bd4b-17003928e532?usp=sharing",
      skills: ["Artificial Intelligence (AI)"],
      category: "AI/ML",
      color: "amber",
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20"
    },
    {
      id: 16,
      title: "AI Agents in LangGraph",
      issuer: "DeepLearning.AI",
      date: "2024",
      credentialId: "",
      link: "https://learn.deeplearning.ai/accomplishments/ebe94656-8e70-4b8e-afd0-384d7046c9c6?usp=sharing",
      skills: ["Agents"],
      category: "AI/ML",
      color: "rose",
      gradient: "from-rose-500 to-pink-600",
      bgGradient: "from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20"
    },
    {
      id: 17,
      title: "Building AI Browser Agents",
      issuer: "DeepLearning.AI",
      date: "2024",
      credentialId: "",
      link: "https://learn.deeplearning.ai/accomplishments/4ad74d27-d86f-4a31-a9f8-71692b72e2e7?usp=sharing",
      skills: ["AI Agents"],
      category: "AI/ML",
      color: "sky",
      gradient: "from-sky-500 to-blue-600",
      bgGradient: "from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20"
    },
    {
      id: 18,
      title: "Finetuning Large Language Models",
      issuer: "DeepLearning.AI",
      date: "2024",
      credentialId: "",
      link: "https://learn.deeplearning.ai/accomplishments/06e5affd-51ae-4932-bcb4-767f94bc926c?usp=sharing",
      skills: ["Fine Tuning", "Large Language Models (LLM)"],
      category: "AI/ML",
      color: "slate",
      gradient: "from-slate-500 to-gray-600",
      bgGradient: "from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20"
    },
    {
      id: 19,
      title: "How Business Thinkers Can Start Building AI Plugins With Semantic Kernel",
      issuer: "DeepLearning.AI",
      date: "2024",
      credentialId: "",
      link: "https://learn.deeplearning.ai/accomplishments/3ab44294-7086-43ed-8fb8-363e871b2c9c?usp=sharing",
      skills: ["AI Plugins"],
      category: "AI/ML",
      color: "stone",
      gradient: "from-stone-500 to-gray-600",
      bgGradient: "from-stone-50 to-gray-50 dark:from-stone-900/20 dark:to-gray-900/20"
    },
    {
      id: 20,
      title: "LLMs as Operating Systems: Agent Memory",
      issuer: "DeepLearning.AI",
      date: "2024",
      credentialId: "",
      link: "https://learn.deeplearning.ai/accomplishments/8799ff39-6bdc-4028-b393-f7ef00584b20?usp=sharing",
      skills: ["Large Language Models (LLM)", "Retrieval-Augmented Generation (RAG)"],
      category: "AI/ML",
      color: "neutral",
      gradient: "from-neutral-500 to-gray-600",
      bgGradient: "from-neutral-50 to-gray-50 dark:from-neutral-900/20 dark:to-neutral-900/20"
    },
    {
      id: 21,
      title: "Building toward Computer Use with Anthropic",
      issuer: "DeepLearning.AI",
      date: "Mar 2025",
      credentialId: "6b5022b3-80b5-401c-9a7d-c407188b103a",
      link: "https://learn.deeplearning.ai/accomplishments/6b5022b3-80b5-401c-9a7d-c407188b103a?usp=sharing",
      skills: ["AI", "Anthropic", "LLM"],
      category: "AI/ML",
      color: "cyan",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20"
    }
];
