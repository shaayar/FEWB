export default function AICoreGraph() {
  const nodes = [
    { name: "CRM", x: "20%", y: "18%" },
    { name: "ERP", x: "78%", y: "18%" },
    { name: "Sales", x: "14%", y: "48%" },
    { name: "Finance", x: "84%", y: "48%" },
    { name: "Support", x: "26%", y: "82%" },
    { name: "Analytics", x: "74%", y: "82%" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-30">

      {/* Center AI */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">

        {/* Glow */}
        <div className="absolute h-32 w-32 rounded-full bg-[#FFC801]/30 blur-3xl animate-pulse" />

        {/* Core */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-[#172B36] shadow-2xl">

          <div className="absolute h-full w-full rounded-full border border-[#FFC801]/30 animate-ping" />

          <span className="font-mono text-sm font-bold tracking-widest text-white">
            AI
          </span>

        </div>

        <p className="mt-4 text-xs uppercase tracking-[0.35em] text-slate-500">
          VERUM CORE
        </p>

      </div>

      {/* Nodes */}
      {nodes.map((node) => (
        <div
          key={node.name}
          style={{
            left: node.x,
            top: node.y,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex items-center gap-3 rounded-full border border-white/60 bg-white/80 px-4 py-2 shadow-lg backdrop-blur">

            <div className="h-2 w-2 rounded-full bg-[#FFC801]" />

            <span className="text-sm font-medium text-[#172B36]">
              {node.name}
            </span>

          </div>
        </div>
      ))}

    </div>
  );
}