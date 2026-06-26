export default function HeroContent() {
  return (
    <section className="lg:col-span-5">

      <span className="rounded-full border border-[#D9E8E2] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#114C5A]">
        AI Operating System
      </span>

      <h1 className="mt-8 text-[5rem] leading-[0.92] font-bold tracking-tight text-[#172B36]">
        The
        <br />
        Operating
        <br />
        System
        <br />
        for
        <br />
        Autonomous
        <br />
        Business.
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
        Connect every source of truth.
        Let AI understand your business,
        make decisions, and automate execution.
      </p>

      <div className="mt-10 flex gap-4">

        <button className="rounded-full bg-[#FFC801] px-8 py-4 font-semibold">
          Start Building
        </button>

        <button className="rounded-full border border-[#D9E8E2] bg-white px-8 py-4">
          Watch Demo →
        </button>

      </div>

    </section>
  );
}