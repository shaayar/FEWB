interface FloatingCardProps {
  title: string;
  value: string;
  className?: string;
}

export default function FloatingCard({
  title,
  value,
  className,
}: FloatingCardProps) {
  return (
    <div
  className={`absolute float rounded-3xl border border-white/40 bg-white/70 p-5 shadow-[0_20px_50px_rgba(23,43,54,0.12)] backdrop-blur-xl ${className}`}
>
      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-[#172B36]">
        {value}
      </h3>
    </div>
  );
}