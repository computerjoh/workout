import { FeatureBlock } from "../FeatureBlock";
import { Sparkles, Timer, UsersRound } from "lucide-react";

export default function Features() {
    return (
        <section id="features" className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid gap-8 text-left md:grid-cols-3">
                <FeatureBlock
                    eyebrow="World-class delivery"
                    title="World-Class Workout Delivery"
                    description="Build polished workouts in minutes."
                    icon={<Sparkles className="h-5 w-5" />}
                />
                <FeatureBlock
                    eyebrow="Time back to coach"
                    title="Save Time & Energy"
                    description="Smart notifications show who needs attention."
                    icon={<Timer className="h-5 w-5" />}
                />
                <FeatureBlock
                    eyebrow="Real relationships"
                    title="Build Trust & Connection"
                    description="Clear notes, charts, and check-ins help clients feel supported."
                    icon={<UsersRound className="h-5 w-5" />}
                />
            </div>
        </section>
    );
}
