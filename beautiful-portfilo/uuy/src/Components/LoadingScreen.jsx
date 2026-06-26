import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | done
  const fullText = "<Kaushal.Portfolio />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      setProgress(Math.min((index / fullText.length) * 100, 100));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setPhase("done");
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#050810] flex flex-col items-center justify-center overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,179,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-blue-500/30 rounded-tl-lg" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-blue-500/30 rounded-tr-lg" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-blue-500/30 rounded-bl-lg" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-blue-500/30 rounded-br-lg" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-10">

        {/* Animated ring */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-blue-500/20" />
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{
              borderTopColor: "#3b82f6",
              borderRightColor: "#06b6d4",
              animation: "spin 1.2s linear infinite",
            }}
          />
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
        </div>

        {/* Typing text */}
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-mono font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {text}
            </span>
            <span
              className="ml-0.5 text-cyan-400"
              style={{ animation: "blink 0.8s step-end infinite" }}
            >
              |
            </span>
          </div>
          <p className="text-gray-600 text-xs tracking-widest uppercase mt-3 font-medium">
            Initializing portfolio...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 flex flex-col gap-2">
          <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-100"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
                boxShadow: "0 0 12px rgba(59,130,246,0.7)",
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-[10px] font-mono">Loading</span>
            <span className="text-blue-500 text-[10px] font-mono">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};