import React from "react";

export interface FeatureBlockProps {
    eyebrow: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
}

export const FeatureBlock = ({ eyebrow, title, description, icon }: FeatureBlockProps) => {
    return (
        <div className="h-full rounded-2xl border border-white/10 bg-background/80 p-6 shadow-sm">
            {icon && <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">{icon}</div>}
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {eyebrow}
            </p>
            <h3 className="mt-2 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
    );
};
