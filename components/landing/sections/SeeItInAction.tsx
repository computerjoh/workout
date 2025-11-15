"use client";

import React from "react";

export default function SeeItInAction() {
    return (
        <section className="border-y bg-muted/40 py-16">
            <div className="mx-auto max-w-6xl px-4 text-center">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                    See The Lab in action
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base"> Watch our walkthrough to see how The Lab helps you simplify your coaching so you can deliver more for your clients in less time. </p>

                <div className="mt-10 mx-auto flex max-w-3xl justify-center">
                    <div className="relative w-full overflow-hidden rounded-2xl bg-background shadow-xl border aspect-video">
                        <iframe
                            className="absolute inset-0 h-full w-full rounded-2xl"
                            src="https://www.youtube.com/embed/ORomU-MdJKY?rel=0&modestbranding=1"
                            allowFullScreen
                            title="The Lab Walkthrough"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
