"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Clock, HeartHandshake, PlayCircle } from "lucide-react";

export default function Hero() {
    const videoRef = React.useRef<HTMLDivElement | null>(null);

    const scrollToVideo = () => {
        videoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 md:flex-row md:items-center md:py-20">
            <div className="max-w-xl">
                <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                    Deliver world-class workouts.
                    <span className="block text-primary">Build better connections.</span>
                </h1>

                <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
                    Stop juggling spreadsheets and generic apps. The Lab helps you focus
                    on what matters: delivering amazing workouts and building trust through
                    efficient, personal attention.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button className="h-11 rounded-xl px-6 text-sm font-semibold shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-primary/40">
                        Start Free Trial (14 Days)
                    </Button>

                    <Button
                        onClick={scrollToVideo}
                        variant="ghost"
                        className="inline-flex h-11 items-center gap-2 rounded-xl px-3 text-sm text-muted-foreground hover:text-foreground"
                    >
                        <PlayCircle className="h-4 w-4" aria-hidden="true" />
                        Watch product walkthrough
                    </Button>
                </div>

                <p className="mt-3 text-xs text-muted-foreground">
                    14 days free, then starts at{" "}
                    <span className="font-semibold">$19.99/month</span>. No setup fees.
                    Cancel anytime.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Under 10 minutes to onboard your first client.</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <HeartHandshake className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Built by trainers who coach every week.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
