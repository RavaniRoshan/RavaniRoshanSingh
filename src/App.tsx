import { NavigationProvider } from "@/lib/navigation";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import ProjectScreen from "@/components/ProjectScreen";
import Dock from "@/components/Dock";
import Wallpaper from "@/components/Wallpaper";
import Cursor from "@/components/Cursor";
import PageTransition from "@/components/PageTransition";

export default function App() {
  return (
    <NavigationProvider>
      <Wallpaper />
      <Cursor />
      <PageTransition />
      <div className="page-shell">
        <TopBar />
        <Hero />
        <ProjectScreen />
        <Dock />
      </div>
    </NavigationProvider>
  );
}
