import { useNav } from "@/lib/navigation";

export default function BackButton({
  variant = "inline",
}: {
  variant?: "fixed" | "inline";
}) {
  const { navigate } = useNav();
  return (
    <button
      className={`project-screen__back project-screen__back--${variant}`}
      type="button"
      aria-label="Back to home"
      onClick={() => navigate("home")}
    >
      <svg className="project-screen__back-icon" viewBox="0 0 20 20" aria-hidden="true">
        <path
          d="M11.875 4.375 6.25 10l5.625 5.625"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <span className="project-screen__back-label">Back</span>
    </button>
  );
}
