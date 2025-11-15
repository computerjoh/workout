"use client";

import Image from "next/image";
import { PlayCircle } from "lucide-react";
import React from "react";

export default function SeeItInAction() {
    return (
        <section id="watch-demo" className="border-y bg-muted/40 py-20">
            <div className="mx-auto max-w-6xl px-4 text-center">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                    See The Lab in action
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
                    Watch our walkthrough to see how The Lab helps you simplify your coaching so you can deliver more for your clients in less time.
                </p>

                <div className="mx-auto mt-10 max-w-4xl">
                    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-background/80 p-5 text-left shadow-2xl shadow-black/40">
                        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                            <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                            <span className="inline-flex h-2 w-2 rounded-full bg-primary/60" />
                            <span className="inline-flex h-2 w-2 rounded-full bg-primary/40" />
                            <span>Product Walkthrough</span>
                        </div>

                        <div className="relative mt-4 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/80">
                            <iframe
                                className="absolute inset-0 h-full w-full rounded-2xl"
                                src="https://www.youtube.com/embed/ORomU-MdJKY?rel=0&modestbranding=1"
                                allowFullScreen
                                title="The Lab Walkthrough"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-500 group-hover:opacity-0">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/80 text-primary shadow-xl">
                                    <PlayCircle className="h-7 w-7" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
