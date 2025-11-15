"use client";

import { FeatureBlock } from "../FeatureBlock";


export default function Features() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid gap-8 text-left md:grid-cols-3">
                <FeatureBlock
                    eyebrow="World-class delivery"
                    title="World-Class Workout Delivery"
                    description="Build polished workouts in minutes."
                />
                <FeatureBlock
                    eyebrow="Time back to coach"
                    title="Save Time & Energy"
                    description="Smart notifications show who needs attention."
                />
                <FeatureBlock
                    eyebrow="Real relationships"
                    title="Build Trust & Connection"
                    description="Clear notes, charts, and check-ins help clients feel supported."
                />
            </div>
        </section>
    );
}
