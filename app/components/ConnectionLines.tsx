export default function ConnectionLines() {
  return (
    <svg
      className="absolute inset-0 z-20 h-full w-full"
      viewBox="0 0 1000 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="flow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#114C5A" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#FFC801" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#114C5A" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {[
        ["220", "150"],
        ["780", "150"],
        ["150", "400"],
        ["850", "400"],
        ["250", "650"],
        ["750", "650"],
      ].map(([x, y], i) => (
        <line
          key={i}
          x1={x}
          y1={y}
          x2="500"
          y2="400"
          stroke="url(#flow)"
          strokeWidth="2"
          strokeLinecap="round"
          className="connection-line"
        />
      ))}
    </svg>
  );
}