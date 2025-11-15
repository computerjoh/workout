"use client";

import { Button } from "@/components/ui/button";

const ctaStats = [
    { label: "Avg. NPS", value: "+74" },
    { label: "Client completion", value: "92%" },
    { label: "Faster onboarding", value: "<10 min" },
];

export default function FinalCTA() {
    return (
        <section className="mx-auto max-w-4xl px-4 py-20 text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Ready to focus on what you do best?
            </h2>

            <p className="mt-3 text-sm text-muted-foreground md:text-base">
                Join trainers who believe exceptional workout delivery and genuine client connection are the foundation of a thriving coaching business.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3">
                <Button className="h-11 rounded-xl px-6 text-sm font-semibold shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-primary/40">
                    Start Free Trial
                </Button>

                <p className="text-xs text-muted-foreground">
                    14 days free • Cancel anytime • No credit card tricks
                </p>
            </div>
        </section>
    );
}
