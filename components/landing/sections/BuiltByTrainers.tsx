"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, BarChart3 } from "lucide-react";
import { FeatureCard } from "../FeatureCard";

const storyBeats = [
    { title: "Coaches first", description: "Our founders still coach 25+ in-person sessions every week." },
    { title: "Templates that match reality", description: "The Lab mirrors the exact way trainers structure progressions, not how engineers think they should." },
    { title: "Client relationships", description: "Messaging, video cues, and notes are built around trust-building moments." },
];

export default function BuiltByTrainers() {
    return (
        <section id="trainers" className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[1.1fr_minmax(0,0.9fr)] md:items-center">
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Built by trainers, for trainers
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                    We focus on what you do best: coaching.
                </h2>

                <p className="mt-4 text-sm text-muted-foreground md:text-base">
                    While others try to be everything to everyone, The Lab is built around the reality of personal training: consistent, high-quality sessions and clear communication.
                </p>

                <div className="mt-8 space-y-6 border-l border-white/10 pl-6">
                    {storyBeats.map((beat) => (
                        <div key={beat.title}>
                            <p className="text-sm font-semibold text-primary">{beat.title}</p>
                            <p className="text-sm text-muted-foreground">{beat.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Card className="border-white/10 bg-background/80 shadow-xl">
                <CardContent className="space-y-6 p-6">
                    <FeatureCard
                        icon={<BarChart3 className="h-4 w-4 text-primary" />}
                        title="Smart Dashboard"
                        description="Instant visibility into who's on track, who missed a workout, and who needs a check-in."
                    />
                    <FeatureCard
                        icon={<Dumbbell className="h-4 w-4 text-primary" />}
                        title="Workout Builder"
                        description="Drag-and-drop timelines with templates for fast, professional programming."
                    />
                </CardContent>
            </Card>
        </section>
    );
}
