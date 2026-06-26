"use client";

import { useRef } from "react";
import Dashboard from "./Dashboard";
import AICoreGraph from "./AICoreGraph";
import ConnectionLines from "./ConnectionLines";
import FloatingCard from "./FloatingCard";

export default function HeroVisual() {
    const ref = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent) => {
        if (!ref.current) return;

        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        ref.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    return (
        <section
            ref={ref}
            onMouseMove={handleMove}
            className="relative h-[760px] lg:col-span-7"
        >
            <Dashboard />
            <ConnectionLines />
            <AICoreGraph />

            <FloatingCard
                title="AI Agents"
                value="12"
                className="left-0 top-24"
            />

            <FloatingCard
                title="Confidence"
                value="99.2%"
                className="right-4 top-40"
            />

            <FloatingCard
                title="Tasks Today"
                value="3.2k"
                className="bottom-10 left-16"
            />
        </section>
    );
}