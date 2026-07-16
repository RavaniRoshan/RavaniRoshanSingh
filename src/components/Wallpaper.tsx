import BackgroundPixelStars from "@/components/ui/background-pixel-stars";

export default function Wallpaper() {
  return (
    <div className="wallpaper" aria-hidden="true">
      <BackgroundPixelStars className="wallpaper__canvas" />
      <div className="wallpaper__scrim" />
    </div>
  );
}
