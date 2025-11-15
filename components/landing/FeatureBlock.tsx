import React from "react";

export interface FeatureBlockProps {
    eyebrow: string;
    title: string;
    description: string;
}

export const FeatureBlock = ({ eyebrow, title, description }: FeatureBlockProps) => {
    return (
        <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {eyebrow}
            </p>
            <h3 className="mt-2 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
    );
};
