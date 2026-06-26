import Navbar from "./NavBar";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <header className="relative min-h-screen overflow-hidden bg-[#F1F6F4]">
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(#172B36_1px,transparent_1px),linear-gradient(90deg,#172B36_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Glow */}
      <div className="absolute right-0 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-[#FFC801]/20 blur-[140px]" />

      <Navbar />

      <main className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl grid-cols-1 items-center gap-20 px-8 py-20 lg:grid-cols-12">

        <HeroContent />
        <HeroVisual />

      </main>
    </header>
  );
}