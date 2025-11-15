import { dashboardHighlights } from "@/components/landing/constants";
import { FeatureLine } from "../FeatureLine";
import { FloatingScreenshot } from "../FloatingScreenshot";

export default function Dashboard() {
    return (
        <section className="relative mx-auto max-w-6xl px-4 py-24">
            <div className="pointer-events-none absolute inset-y-10 right-0 -z-10 w-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
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

                    <p className="mt-4 text-sm text-muted-foreground md:text-base">
                        Instantly see unread messages, missed workouts, completed sessions, and clients who need programming. Spend less time guessing — and more time coaching.
                    </p>

                    <div className="mt-6 space-y-4">
                        {dashboardHighlights.map((item) => (
                            <FeatureLine key={item.label} icon={item.icon} label={item.label} detail={item.detail} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
