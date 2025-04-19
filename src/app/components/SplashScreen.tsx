"use client";

import React, { useEffect, useState } from "react";

interface SplashScreenProps {
  children: React.ReactNode;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <h1 className="text-2xl font-bold text-gray-800 animate-pulse">
          Loading Portfolio...
        </h1>
      </div>
    );
  }

  return <>{children}</>;
};

export default SplashScreen;
