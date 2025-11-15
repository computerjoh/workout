"use client";

import BuiltByTrainers from "@/components/landing/sections/BuiltByTrainers";
import Dashboard from "@/components/landing/sections/Dashboard";
import Features from "@/components/landing/sections/Features";
import FinalCTA from "@/components/landing/sections/FinalCTA";
import Header from "@/components/landing/sections/Header";
import Hero from "@/components/landing/sections/Hero";
import Pricing from "@/components/landing/sections/Pricing";
import SeeItInAction from "@/components/landing/sections/SeeItInAction";
import WorkoutBuilder from "@/components/landing/sections/WorkoutBuilder";
import React from "react";

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-background text-foreground">

      {/* Glow background */}
      <div className="pointer-events-none absolute inset-x-0 top-[-10rem] z-0 flex justify-center">
        <div className="h-72 w-[36rem] rounded-full bg-primary/20 blur-3xl dark:bg-primary/25" />
      </div>

      <Header />

      <main className="relative z-10 flex-1">
        <Hero />
        <WorkoutBuilder />
        <Dashboard />
        <SeeItInAction />
        <BuiltByTrainers />
        <Features />
        <Pricing />
        <FinalCTA />
      </main>

      {/* Mobile sticky CTA */}
      <div className="pointer-events-none fixed inset-x-0 bottom-3 z-30 px-3 sm:hidden">
        <div className="pointer-events-auto rounded-2xl border bg-background/95 p-2 shadow-lg shadow-primary/30 backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-xs font-semibold">
                Start your 14-day free trial
              </span>
              <span className="text-[11px] text-muted-foreground">
                Under 10 minutes to get your first client onboarded.
              </span>
            </div>
            <button className="h-9 rounded-xl px-4 text-xs font-semibold bg-primary text-background">
              Get started
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} The Lab. All rights reserved.
      </footer>

    </div>
  );
}
