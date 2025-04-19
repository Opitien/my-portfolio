"use client";

import dynamic from "next/dynamic";
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import "./styles/globals.css";





const SplashScreen = dynamic(() => import("./components/SplashScreen"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden min-h-screen">
      <SplashScreen>
        <Navbar />
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
        <FloatingWhatsapp />
        <Footer />
      </SplashScreen>
    </main>
  );
}
