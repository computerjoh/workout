import { Button } from "@/components/ui/button";

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
                <Button variant="hero" size="xl">
                    Start Free Trial
                </Button>

                <p className="text-xs text-muted-foreground">
                    14 days free • Cancel anytime • No credit card tricks
                </p>
            </div>
        </section>
    );
}
