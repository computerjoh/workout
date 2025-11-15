import React from "react";

export interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-1 rounded-full bg-primary/10 p-2">{icon}</div>
            <div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{description}</p>
            </div>
        </div>
    );
};
