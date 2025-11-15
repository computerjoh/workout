"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="sticky top-0 z-20 w-full border-b border-white/20 bg-background/80 shadow-sm backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="The Lab logo"
                        width={48}
                        height={48}
                        className="rounded-xl"
                        priority
                    />

                    <div className="flex flex-col leading-tight">
                        <span className="text-sm font-semibold tracking-tight">
                            The Lab
                        </span>
                        <span className="text-xs text-muted-foreground">
                            Built for personal trainers
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="ghost" className="hidden rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground sm:inline-flex">
                        Sign In
                    </Button>
                    <Button className="rounded-xl bg-gradient-to-r from-primary to-primary/70 text-xs font-semibold text-background shadow-lg shadow-primary/30">
                        Start Free Trial
                    </Button>
                </div>
            </div>
        </header>
    );
}
