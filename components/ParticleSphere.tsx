"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 4200;

function Sphere() {
  const pointsRef = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const accent = new THREE.Color("#7C3AED");
    const glow = new THREE.Color("#A78BFA");
    const white = new THREE.Color("#E9E4FF");

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Fibonacci sphere distribution for an even shell
      const t = i / PARTICLE_COUNT;
      const phi = Math.acos(1 - 2 * t);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 1.9 + (Math.random() - 0.5) * 0.08;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const mix = Math.random();
      const c =
        mix > 0.92
          ? white
          : mix > 0.5
            ? glow.clone().lerp(accent, Math.random())
            : accent.clone().lerp(glow, Math.random() * 0.4);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  useFrame(({ pointer }, delta) => {
    const points = pointsRef.current;
    if (!points) return;

    // Ease mouse influence for a soft parallax reaction
    mouse.current.x += (pointer.x - mouse.current.x) * 0.05;
    mouse.current.y += (pointer.y - mouse.current.y) * 0.05;

    points.rotation.y += delta * 0.08;
    points.rotation.x = mouse.current.y * 0.25;
    points.rotation.z = mouse.current.x * 0.15;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ParticleSphere() {
  return (
    <div className="relative h-full w-full">
      {/* Soft glow behind the sphere */}
      <div className="absolute inset-0 m-auto h-3/4 w-3/4 rounded-full bg-accent/20 blur-[110px]" />
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Sphere />
      </Canvas>
    </div>
  );
}
