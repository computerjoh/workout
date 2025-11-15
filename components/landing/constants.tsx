import { BarChart3, Clock, Dumbbell, HeartHandshake, PlayCircle } from "lucide-react";
import type { FeatureLineProps } from "./FeatureLine";

export const heroStats = [
  { value: "6h", label: "avg. admin time saved weekly" },
  { value: "38%", label: "faster client onboarding" },
  { value: "4.9★", label: "trainer-rated client experience" },
] as const;

export const dashboardHighlights: FeatureLineProps[] = [
  { icon: <BarChart3 className="h-4 w-4" />, label: "Auto-organized workflow", detail: "Daily list prioritizes clients needing action." },
  { icon: <Clock className="h-4 w-4" />, label: "Track missed & completed workouts", detail: "Spot trends before churn happens." },
  { icon: <Dumbbell className="h-4 w-4" />, label: "Clients needing programming", detail: "Plan progressions weeks ahead of schedule." },
  { icon: <HeartHandshake className="h-4 w-4" />, label: "Daily priorities surfaced", detail: "Instant notifications for check-ins and PRs." },
  { icon: <PlayCircle className="h-4 w-4" />, label: "Fast & efficient communication", detail: "Reply with voice, video, or quick templates." },
];

export const builderHighlights: FeatureLineProps[] = [
  { icon: <Dumbbell className="h-4 w-4" />, label: "Timeline-based drag & drop", detail: "Build multi-phase programs without fighting spreadsheets." },
  { icon: <BarChart3 className="h-4 w-4" />, label: "Supersets & circuits support", detail: "Stack complex progressions with automatic pacing." },
  { icon: <PlayCircle className="h-4 w-4" />, label: "Built-in video previews", detail: "Embed cues so athletes know exactly how to move." },
  { icon: <HeartHandshake className="h-4 w-4" />, label: "Coaching notes", detail: "Tag intent, tempo, and reminders your clients won’t miss." },
  { icon: <Clock className="h-4 w-4" />, label: "Duplicate days in 1 tap", detail: "Train smarter templates save ~2.5 hours each week." },
];
