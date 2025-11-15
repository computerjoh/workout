import { heroStats } from "@/components/landing/constants";
import { Button } from "@/components/ui/button";
import { FloatingScreenshot } from "@/components/landing/FloatingScreenshot";
import { Clock, HeartHandshake, PlayCircle } from "lucide-react";

export default function Hero() {
    return (
        <section id="product" className="mx-auto max-w-6xl px-4 py-12 md:py-20">
            <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
                <div className="max-w-xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                        Built for modern trainers
                    </span>

                    <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                        Deliver world-class workouts.
                        <span className="block text-primary">Build better connections.</span>
                    </h1>

                    <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
                        Stop juggling spreadsheets and generic apps. The Lab keeps programming, communication, and accountability in one beautiful workflow so you can stay present with every athlete.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Button variant="hero" size="xl">
                            Start Free Trial (14 Days)
                        </Button>

                        <Button
                            variant="ghost"
                            asChild
                            className="inline-flex h-11 items-center gap-2 rounded-xl px-3 text-sm text-muted-foreground hover:text-foreground"
                        >
                            <a href="#watch-demo">
                                <PlayCircle className="h-4 w-4" aria-hidden="true" />
                                Watch product walkthrough
                            </a>
                        </Button>
                    </div>

                    <p className="mt-3 text-xs text-muted-foreground">
                        14 days free, then starts at <span className="font-semibold">$19.99/month</span>. No setup fees. Cancel anytime.
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

                    <div className="mt-10 grid gap-6 rounded-2xl border border-white/10 bg-background/80 p-6 shadow-inner shadow-white/5 sm:grid-cols-3">
                        {heroStats.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                                <p className="text-xs text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <FloatingScreenshot src="/screenshots/dashboard.png" alt="Preview of The Lab dashboard" className="max-w-3xl" />
            </div>
        </section>
    );
}
