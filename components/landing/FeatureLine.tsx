import type { ReactNode } from "react";

export interface FeatureLineProps {
    icon: ReactNode;
    label: string;
    detail?: string;
}

export const FeatureLine = ({ icon, label, detail }: FeatureLineProps) => {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-md bg-primary/10 p-1.5 text-primary">
                {icon}
            </div>
            <div>
                <p className="text-sm font-semibold text-foreground">{label}</p>
                {detail && <p className="text-xs text-muted-foreground">{detail}</p>}
            </div>
        </div>
    );
};
