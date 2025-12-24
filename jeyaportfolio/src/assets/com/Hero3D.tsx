"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

/* 🫧 BUBBLES */
function Bubbles() {
  const g = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!g.current) return;
    g.current.children.forEach((b) => {
      b.position.y += 0.002;
      if (b.position.y > 1.8) b.position.y = -0.3;
    });
  });

  return (
    <group ref={g}>
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 1.2,
            Math.random(),
            -0.6,
          ]}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial
            transparent
            opacity={0.25}
            roughness={0.3}
            color="#ffffff"
          />
        </mesh>
      ))}
    </group>
  );
}

/* ✨ SPARKLES */
function Sparkles() {
  const g = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!g.current) return;
    const t = clock.elapsedTime;
    g.current.children.forEach((s, i) => {
      s.position.y = Math.sin(t + i) * 0.15;
    });
  });

  return (
    <group ref={g}>
      {[...Array(6)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 1.2,
            Math.random(),
            -0.2,
          ]}
        >
          <circleGeometry args={[0.03, 6]} />
          <meshBasicMaterial
            color={new THREE.Color().setHSL(Math.random(), 0.6, 0.8)}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

function CuteRobot() {
  const robot = useRef<THREE.Group>(null);
  const body = useRef<THREE.Mesh>(null);
  const head = useRef<THREE.Group>(null);

  const leftEye = useRef<THREE.Mesh>(null);
  const rightEye = useRef<THREE.Mesh>(null);
  const mouth = useRef<THREE.Mesh>(null);

  const leftHand = useRef<THREE.Group>(null);
  const rightHand = useRef<THREE.Group>(null);

  const [hovered, setHovered] = useState(false);
  const [hug, setHug] = useState(false);

  useFrame(({ clock, mouse }) => {
    const t = clock.elapsedTime;

    /* 🌊 BODY FLOAT + SQUASH */
    if (robot.current && body.current) {
      const float = Math.sin(t * 0.8) * 0.08;
      robot.current.position.y = float;

      const squash = hug ? 0.92 : 1 + Math.sin(t * 1.2) * 0.02;
      body.current.scale.set(1, squash, 1);
    }

    /* 🧠 HEAD FOLLOW */
    if (head.current) {
      head.current.rotation.x = -mouse.y * 0.25;
      head.current.rotation.y = mouse.x * 0.35;
    }

    /* 👀 EYES */
    if (leftEye.current && rightEye.current) {
      const eyeX = THREE.MathUtils.clamp(mouse.x * 0.04, -0.04, 0.04);
      const eyeY = THREE.MathUtils.clamp(-mouse.y * 0.04, -0.04, 0.04);
      leftEye.current.position.set(-0.17 + eyeX, 0.1 + eyeY, 0.65);
      rightEye.current.position.set(0.17 + eyeX, 0.1 + eyeY, 0.65);
    }

    /* 😊 MOUTH */
    if (mouth.current) {
      mouth.current.scale.y = hug ? 1.6 : 1;
    }

    /* 👋 TWO-HAND WAVE */
    if (leftHand.current && rightHand.current && !hug) {
      const wave = hovered ? Math.sin(t * 4) * 0.4 : 0;
      leftHand.current.rotation.z = wave;
      rightHand.current.rotation.z = -wave;
    }

    /* 🧸 HUG */
    if (hug && leftHand.current && rightHand.current) {
      leftHand.current.position.x = THREE.MathUtils.lerp(
        leftHand.current.position.x,
        -0.2,
        0.1
      );
      rightHand.current.position.x = THREE.MathUtils.lerp(
        rightHand.current.position.x,
        0.2,
        0.1
      );
    } else if (!hug && leftHand.current && rightHand.current) {
      leftHand.current.position.x = THREE.MathUtils.lerp(
        leftHand.current.position.x,
        -0.45,
        0.1
      );
      rightHand.current.position.x = THREE.MathUtils.lerp(
        rightHand.current.position.x,
        0.45,
        0.1
      );
    }
  });

  return (
    <group
      ref={robot}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => {
        setHug(true);
        setTimeout(() => setHug(false), 1200);
      }}
    >
      {/* 🧸 BODY */}
      <mesh ref={body} position={[0, 0.1, 0]}>
        <sphereGeometry args={[0.48, 32, 32]} />
        <meshStandardMaterial
          color="#fff1f7"
          roughness={0.95}
          metalness={0}
        />
      </mesh>

      {/* 👋 HANDS */}
      <group ref={leftHand} position={[-0.45, 0.15, 0]}>
        <mesh>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#fff1f7" roughness={0.95} />
        </mesh>
      </group>

      <group ref={rightHand} position={[0.45, 0.15, 0]}>
        <mesh>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#fff1f7" roughness={0.95} />
        </mesh>
      </group>

      {/* HEAD */}
      <group ref={head} position={[0, 0.95, 0]} scale={0.9}>
        <mesh>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshStandardMaterial
            color="#fffafc"
            roughness={0.9}
            metalness={0}
          />
        </mesh>

        {/* EYES */}
        <mesh ref={leftEye}>
          <boxGeometry args={[0.12, 0.12, 0.04]} />
          <meshStandardMaterial emissive="#6ecbff" emissiveIntensity={1.4} />
        </mesh>
        <mesh ref={rightEye}>
          <boxGeometry args={[0.12, 0.12, 0.04]} />
          <meshStandardMaterial emissive="#6ecbff" emissiveIntensity={1.4} />
        </mesh>

        {/* MOUTH */}
        <mesh ref={mouth} position={[0, -0.15, 0.72]}>
          <boxGeometry args={[0.26, 0.08, 0.05]} />
          <meshStandardMaterial
            color="#ff7aa2"
            emissive="#ff9ec2"
            emissiveIntensity={1.2}
          />
        </mesh>
      </group>

      <Sparkles />
      <Bubbles />
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0.5, 4], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 3]} intensity={1.1} />
      <CuteRobot />
      <EffectComposer>
        <Bloom intensity={1.1} luminanceThreshold={0.35} />
      </EffectComposer>
    </Canvas>
  );
}
