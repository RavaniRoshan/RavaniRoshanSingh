export default function PageTransition() {
  return (
    <div className="page-transition" aria-hidden="true">
      <svg
        className="page-transition__svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          <linearGradient
            id="page-transition-gradient"
            x1="0"
            y1="0"
            x2="100"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.2" stopColor="rgb(255, 135, 9)" />
            <stop offset="0.7" stopColor="rgb(247, 189, 248)" />
          </linearGradient>
          <linearGradient
            id="page-transition-gradient-niki"
            x1="8"
            y1="10"
            x2="92"
            y2="90"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.08" stopColor="#ff9a3d" />
            <stop offset="0.92" stopColor="#ff5e3a" />
          </linearGradient>
          <linearGradient
            id="page-transition-gradient-backstop"
            x1="8"
            y1="10"
            x2="92"
            y2="90"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.08" stopColor="#5b9bff" />
            <stop offset="0.92" stopColor="#2b5fd6" />
          </linearGradient>
          <linearGradient
            id="page-transition-gradient-winscript-lang"
            x1="8"
            y1="10"
            x2="92"
            y2="90"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.08" stopColor="#8a6bff" />
            <stop offset="0.92" stopColor="#5b3df0" />
          </linearGradient>
          <linearGradient
            id="page-transition-gradient-winscript-mcp"
            x1="8"
            y1="10"
            x2="92"
            y2="90"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.08" stopColor="#27c7b6" />
            <stop offset="0.92" stopColor="#0e8f86" />
          </linearGradient>
          <linearGradient
            id="page-transition-gradient-openjck"
            x1="8"
            y1="10"
            x2="92"
            y2="90"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.08" stopColor="#3fd07f" />
            <stop offset="0.92" stopColor="#1f9d5b" />
          </linearGradient>
          <linearGradient
            id="page-transition-gradient-openjck-cloud"
            x1="8"
            y1="10"
            x2="92"
            y2="90"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.08" stopColor="#21c7e0" />
            <stop offset="0.92" stopColor="#f7bdf8" />
          </linearGradient>
          <linearGradient
            id="page-transition-gradient-about"
            x1="8"
            y1="10"
            x2="92"
            y2="90"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.08" stopColor="#b07cff" />
            <stop offset="0.92" stopColor="#ff7ac6" />
          </linearGradient>
          <linearGradient
            id="page-transition-gradient-photos"
            x1="8"
            y1="10"
            x2="92"
            y2="90"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.08" stopColor="#ff9500" />
            <stop offset="0.92" stopColor="#ff2d55" />
          </linearGradient>
          <linearGradient
            id="page-transition-gradient-music"
            x1="8"
            y1="10"
            x2="92"
            y2="90"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.08" stopColor="#fa233b" />
            <stop offset="0.92" stopColor="#fb5c74" />
          </linearGradient>
        </defs>
        <path
          className="page-transition__path"
          fill="url(#page-transition-gradient)"
          d="M0,100 L0,100 L100,100 L100,100 Z"
        />
      </svg>
    </div>
  );
}
