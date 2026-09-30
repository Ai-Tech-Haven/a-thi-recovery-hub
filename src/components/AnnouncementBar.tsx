import { useState } from "react";
import { X, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "athi-announcement-dismissed-v2";

const AnnouncementBar = () => {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      return false;
    }
  });

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore
    }
  };

  if (dismissed) return null;

  return (
    <div
      className="relative z-50 flex items-center justify-center gap-3 px-4 py-2.5 text-sm font-medium text-black"
      style={{
        background: "linear-gradient(90deg, #f5c518 0%, #e6a800 40%, #1a1a1a 100%)",
      }}
      role="banner"
      aria-label="Announcement"
    >
      <Zap className="h-4 w-4 shrink-0 text-black" aria-hidden="true" />
      <span className="text-center leading-snug">
        <span className="font-bold">NEW!</span> AI-Tech Haven Smart Living is Here. Discover intelligent home and office automation.
      </span>
      <Link
        to="/smart-living"
        className="announcement-pulse ml-2 shrink-0 rounded-md bg-black px-3 py-1 text-xs font-bold text-yellow-400 transition-all hover:bg-yellow-400 hover:text-black"
        aria-label="Explore Smart Living"
      >
        Explore Smart Living →
      </Link>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-black/70 transition-colors hover:text-black"
        aria-label="Dismiss announcement"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
