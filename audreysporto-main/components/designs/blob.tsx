import React from "react";

type BlobVariant =
  | "darkPink"
  | "mediumPink"
  | "lightPink"
  | "darkGreen"
  | "mediumGreen"
  | "lightGreen"
  | "beige";



const blobColors: Record<BlobVariant, { from: string; to: string }> = {
  darkPink: { from: "#c66f80", to: "#f4c7d0" },
  mediumPink: { from: "#f4c7d0", to: "#fcebf1" },
  lightPink: { from: "#fcebf1", to: "#f4c7d0" },
  darkGreen: { from: "#4a6644", to: "#9faa74" },
  mediumGreen: { from: "#9faa74", to: "#d7dab3" },
  lightGreen: { from: "#d7dab3", to: "#ece3d2" },
  beige: { from: "#ece3d2", to: "#fcebf1" }
};

type AnimatedBlobProps = {
  size?: number;
  variant?: BlobVariant;
  className?: string;
  duration?: number;
  delay?: number;
  opacity?: number;
};

export default function AnimatedBlob({
  size = 180,
  variant = "darkPink",
  className = "",
  duration = 12,
  delay = 0,
  opacity = 0.8
}: AnimatedBlobProps) {
  const { from, to } = blobColors[variant];

  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-md mix-blend-multiply ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        background: `radial-gradient(circle at 30% 30%, ${from}, ${to})`,
        animation: `
          blobFloat ${duration}s ease-in-out ${delay}s infinite,
          blobFade ${duration * 0.8}s ease-in-out ${delay}s infinite
        `
      }}
    >
      <style>{`
        @keyframes blobFloat {
          0%   { transform: translate(0, 0) scale(1); }
          25%  { transform: translate(15px, -20px) scale(1.05); }
          50%  { transform: translate(-12px, 12px) scale(0.97); }
          75%  { transform: translate(20px, 10px) scale(1.03); }
          100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes blobFade {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        @keyframes blobChaotic {
          0%   { transform: translate(0, 0) scale(1); }

          20%  { transform: translate(40px, -40px) scale(1.05); }

          40%  { transform: translate(80px, 0px) scale(0.98); }

          60%  { transform: translate(-30px, 50px) scale(1.07); }

          80%  { transform: translate(-60px, -30px) scale(0.95); }

          100% { transform: translate(0, 0) scale(1); }
        }

      `}</style>
    </div>
  );
}
