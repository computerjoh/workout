import Image from "next/image";
import { cn } from "@/lib/utils";
import type { FC } from "react";

interface FloatingScreenshotProps {
    src: string;
    alt: string;
    className?: string;
}

export const FloatingScreenshot: FC<FloatingScreenshotProps> = ({
    src,
    alt,
    className,
}) => {
    return (
        <div
            className={cn(
                "relative mx-auto w-full max-w-xl rounded-2xl border bg-background shadow-2xl shadow-black/40 ring-1 ring-white/10 transition-transform hover:-translate-y-1 hover:shadow-black/50 dark:shadow-black/60",
                className
            )}
        >
            <Image
                src={src}
                alt={alt}
                width={1600}
                height={900}
                className="rounded-2xl object-cover"
            />
        </div>
    );
};
