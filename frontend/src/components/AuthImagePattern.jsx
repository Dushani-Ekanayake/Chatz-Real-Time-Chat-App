const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="relative hidden overflow-hidden lg:flex lg:items-center lg:justify-center"
      style={{ background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)" }}
    >
      {/* Ambient glow layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-1/3 left-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-sm px-8 text-center">
        {/* Grid of tiles */}
        <div className="mb-10 grid grid-cols-3 gap-3">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl ${i % 2 === 0 ? "animate-pulse" : ""}`}
              style={{
                background:
                  i === 4
                    ? "linear-gradient(135deg, #7c3aed, #4f46e5)"
                    : i % 3 === 0
                    ? "rgba(124,58,237,0.18)"
                    : "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: i === 4 ? "0 0 32px rgba(124,58,237,0.4)" : "none",
              }}
            />
          ))}
        </div>

        <h2
          className="mb-3 text-3xl font-bold tracking-tight text-white"
          style={{ letterSpacing: "-0.02em" }}
        >
          {title}
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
          {subtitle}
        </p>

        {/* Decorative bottom line */}
        <div className="mx-auto mt-8 h-px w-16 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 opacity-60" />
      </div>
    </div>
  );
};

export default AuthImagePattern;