"use client";

import { BarChart3, Clock, Dumbbell, HeartHandshake, PlayCircle } from "lucide-react";
import { FeatureLine } from "../FeatureLine";
import { FloatingScreenshot } from "../FloatingScreenshot";

export default function Dashboard() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-24">
            <div className="grid items-center gap-12 md:grid-cols-2">

                <div className="order-2 md:order-1">
                    <FloatingScreenshot
                        src="/screenshots/dashboard.png"
                        alt="Trainer Dashboard"
                        className="max-w-2xl md:max-w-3xl"
                    />
                </div>

                <div className="order-1 md:order-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Smart Coaching Dashboard
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                        Know exactly who needs your attention today.
                    </h2>

                    <p className="mt-4 text-sm text-muted-foreground md:text-base"> Instantly see unread messages, missed workouts, completed sessions, and clients who need programming. Spend less time guessing — and more time coaching. </p>

                    <div className="mt-6 space-y-4">
                        <FeatureLine icon={<BarChart3 className="h-4 w-4" />} label="Auto-organized workflow" />
                        <FeatureLine icon={<Clock className="h-4 w-4" />} label="Track missed & completed workouts" />
                        <FeatureLine icon={<Dumbbell className="h-4 w-4" />} label="Clients needing programming" />
                        <FeatureLine icon={<HeartHandshake className="h-4 w-4" />} label="Daily priorities surfaced" />
                        <FeatureLine icon={<PlayCircle className="h-4 w-4" />} label="Fast & efficient communication" />
                    </div>
                </div>

            </div>
        </section>
    );
}
