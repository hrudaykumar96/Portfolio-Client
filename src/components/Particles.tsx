"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useMemo } from "react";
import { useTheme } from "@/context/ThemeContext";
import type { Engine, MoveDirection, OutMode } from "tsparticles-engine";

const ParticlesComponent = ({ id }: { id?: string }) => {
  const { theme } = useTheme();

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const particlesLoaded = async (): Promise<void> => {};

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          push: { quantity: 4 },
          grab: { distance: 150 },
        },
      },
      particles: {
        color: { value: theme === "dark" ? "#FFFFFF" : "#000000" },
        links: {
          color: theme === "dark" ? "#FFFFFF" : "#000000",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none" as MoveDirection,
          enable: true,
          outModes: { default: "bounce" as OutMode },
          random: true,
          speed: 3,
          straight: false,
        },
        number: { value: 150, density: { enable: true, area: 800 } },
        opacity: { value: 1 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [theme]
  );

  return (
    <Particles
      id={id || "tsparticles"}
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticlesComponent;
