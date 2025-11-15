import React from "react";

export interface FeatureLineProps {
    icon: React.ReactNode;
    label: string;
}

export const FeatureLine = ({ icon, label }: FeatureLineProps) => {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-md bg-primary/10 p-1.5">
                {icon}
            </div>
            <p className="text-sm text-muted-foreground">{label}</p>
        </div>
    );
};
