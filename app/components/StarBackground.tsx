"use client";
import React, { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref = useRef<THREE.Points>(null);
  const [sphere, setSphere] = useState<THREE.Vector3[]>([]);

  useEffect(() => {
    const points = new Float32Array(5000 * 3); // Creating a buffer for 5000 points each with 3 coordinates (x, y, z)
    setSphere(
      random
        .inSphere(points, { radius: 1.2 })
        .map(
          (val: number, idx: number, arr: Float32Array) =>
            new THREE.Vector3(arr[idx], arr[idx + 1], arr[idx + 2])
        )
    );
  }, []);

  const handleMouseMove = (event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setMousePosition(new THREE.Vector2(x, y));
  };

  const [mousePosition, setMousePosition] = useState(new THREE.Vector2(0, 0));

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (ref.current) {
      sphere.forEach((position: THREE.Vector3, index: number) => {
        if (index % 5 === 0) {
          position.x += (mousePosition.x - position.x) * 0.01;
          position.y += (mousePosition.y - position.y) * 0.01;
        }
      });
      ref.current.rotation.x += 0.001;
      ref.current.rotation.y += 0.001;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[-1] pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
