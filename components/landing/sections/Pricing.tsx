"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tiers = [
    { tier: "1-5 clients", price: "$19.99", highlight: false },
    { tier: "6-15 clients", price: "$39.99", highlight: false },
    { tier: "16-30 clients", price: "$69.99", highlight: true },
    { tier: "31-50 clients", price: "$99.99", highlight: false },
    { tier: "51-100 clients", price: "$149.99", highlight: false },
];

export default function Pricing() {
    return (
        <section className="border-y bg-muted/40 py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                        Simple, transparent pricing
                    </h2>

                    <p className="mt-3 text-sm text-muted-foreground md:text-base">
                        Start with 14 days free. No contracts.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                    {tiers.map((p) => (
                        <Card
                            key={p.tier}
                            className={
                                p.highlight ? "relative border-primary/70 shadow-lg shadow-primary/30" : ""
                            }
                        >
                            {p.highlight && (
                                <div className="absolute inset-x-0 -top-3 flex justify-center">
                                    <span className="rounded-full bg-primary px-3 py-0.5 text-[10px] font-semibold text-background shadow-sm">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <CardHeader className="pb-2 pt-5 text-center">
                                <CardTitle className="text-sm font-semibold">{p.tier}</CardTitle>
                            </CardHeader>

                            <CardContent className="pb-5 text-center">
                                <p className="text-2xl font-bold">{p.price}</p>
                                <p className="text-xs text-muted-foreground">per month</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
