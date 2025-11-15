import { builderHighlights } from "@/components/landing/constants";
import { FeatureLine } from "../FeatureLine";
import { FloatingScreenshot } from "../FloatingScreenshot";

export default function WorkoutBuilder() {
    return (
        <section className="relative mx-auto max-w-6xl px-4 py-24">
            <div className="pointer-events-none absolute inset-y-10 left-1/2 -z-10 w-2/3 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
            <div className="grid items-center gap-12 md:grid-cols-2">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Powerful Programming
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                        Build professional workouts in minutes.
                    </h2>
                    <p className="mt-4 text-sm text-muted-foreground md:text-base">
                        Drag-and-drop exercises into a clean, timeline-style builder. Add sets, reps, rest times, form videos, and coaching notes all in one place. Supersets and circuits? Just stack and go.
                    </p>

                    <div className="mt-6 space-y-4">
                        {builderHighlights.map((item) => (
                            <FeatureLine key={item.label} icon={item.icon} label={item.label} detail={item.detail} />
                        ))}
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
