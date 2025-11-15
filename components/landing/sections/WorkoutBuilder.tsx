"use client";

import { BarChart3, Clock, Dumbbell, HeartHandshake, PlayCircle } from "lucide-react";
import { FeatureLine } from "../FeatureLine";
import { FloatingScreenshot } from "../FloatingScreenshot";

export default function WorkoutBuilder() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-24">
            <div className="grid items-center gap-12 md:grid-cols-2">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Powerful Programming
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                        Build professional workouts in minutes.
                    </h2>
                    <p className="mt-4 text-sm text-muted-foreground md:text-base"> Drag-and-drop exercises into a clean, timeline-style builder. Add sets, reps, rest times, form videos, and coaching notes all in one place. Supersets and circuits? Just stack and go. </p>

                    <div className="mt-6 space-y-4">
                        <FeatureLine icon={<Dumbbell className="h-4 w-4" />} label="Timeline-based drag & drop" />
                        <FeatureLine icon={<BarChart3 className="h-4 w-4" />} label="Supersets & circuits support" />
                        <FeatureLine icon={<PlayCircle className="h-4 w-4" />} label="Built-in video previews" />
                        <FeatureLine icon={<HeartHandshake className="h-4 w-4" />} label="Coaching notes" />
                        <FeatureLine icon={<Clock className="h-4 w-4" />} label="Duplicate days easily" />
                    </div>
                </div>

                <FloatingScreenshot
                    src="/screenshots/workout-builder.png"
                    alt="Workout Builder UI"
                    className="max-w-2xl md:max-w-3xl"
                />
            </div>
        </section>
    );
}
