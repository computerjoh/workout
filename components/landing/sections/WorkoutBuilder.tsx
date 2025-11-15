import { BarChart3, Clock, Dumbbell, HeartHandshake, PlayCircle } from "lucide-react";
import { FeatureLine } from "../FeatureLine";
import { FloatingScreenshot } from "../FloatingScreenshot";

const builderHighlights = [
    { icon: <Dumbbell className="h-4 w-4" />, label: "Timeline-based drag & drop", detail: "Build multi-phase programs without fighting spreadsheets." },
    { icon: <BarChart3 className="h-4 w-4" />, label: "Supersets & circuits support", detail: "Stack complex progressions with automatic pacing." },
    { icon: <PlayCircle className="h-4 w-4" />, label: "Built-in video previews", detail: "Embed cues so athletes know exactly how to move." },
    { icon: <HeartHandshake className="h-4 w-4" />, label: "Coaching notes", detail: "Tag intent, tempo, and reminders your clients won’t miss." },
    { icon: <Clock className="h-4 w-4" />, label: "Duplicate days in 1 tap", detail: "Train smarter templates save ~2.5 hours each week." },
];

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
