"use client";
import { FC } from "react";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Outcome from "@/components/Outcome";

import imagesAndicons from "@/components/imagesAndicons";

const Home: FC = () => {
    return (
        <main style={{ marginTop: "80px" }}>
            <HeroSection />
            <Features/>
            <Outcome />
            
        </main>
    )
};

export default Home;

  