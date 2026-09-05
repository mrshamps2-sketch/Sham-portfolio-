import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, EyeOff, Sparkles } from 'lucide-react';

export const CyberCanvas3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [is3DActive, setIs3DActive] = useState<boolean>(true);
  const [fpsMode, setFpsMode] = useState<'normal' | 'eco'>('normal');

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !is3DActive) return;

    // Check device capability
    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 45 : 85;
    const maxConnectDistance = isMobile ? 120 : 160;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.z = 700;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    // Neural Network Nodes & Coordinates
    const particlePositions = new Float32Array(nodeCount * 3);
    const particleVelocities: { x: number; y: number; z: number }[] = [];
    const colors = new Float32Array(nodeCount * 3);

    const yellowColor = new THREE.Color('#facc15');
    const redColor = new THREE.Color('#ef4444');
    const amberColor = new THREE.Color('#fbbf24');

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 1100;
      const y = (Math.random() - 0.5) * 850;
      const z = (Math.random() - 0.5) * 600;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.45,
        y: (Math.random() - 0.5) * 0.45,
        z: (Math.random() - 0.5) * 0.3
      });

      // Distribute neon yellow, amber, and cyber red
      const pick = Math.random();
      const c = pick > 0.65 ? redColor : pick > 0.3 ? yellowColor : amberColor;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Glow texture for particles
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(250, 204, 21, 0.8)');
      gradient.addColorStop(0.7, 'rgba(239, 68, 68, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 12 : 16,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Neural Synapse Connection Lines
    const maxLines = (nodeCount * (nodeCount - 1)) / 2;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage)
    );
    linesGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage)
    );

    const lineBasicMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.75,
      depthWrite: false
    });

    const lineSegments = new THREE.LineSegments(linesGeometry, lineBasicMat);
    scene.add(lineSegments);

    // IoT Sensor Orbital Rings Group
    const iotRingGroup = new THREE.Group();

    // Ring 1 (Gold/Yellow)
    const ring1Geo = new THREE.TorusGeometry(260, 0.9, 12, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xfacc15,
      transparent: true,
      opacity: 0.25,
      wireframe: true
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    iotRingGroup.add(ring1);

    // Ring 2 (Cyber Red)
    const ring2Geo = new THREE.TorusGeometry(340, 1.2, 12, 80);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 0.2,
      wireframe: true
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = Math.PI / 6;
    iotRingGroup.add(ring2);

    // Ring 3 (Outer Sensor Telemetry Orbit)
    const ring3Geo = new THREE.TorusGeometry(430, 0.7, 8, 60);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0xffe277,
      transparent: true,
      opacity: 0.12,
      wireframe: true
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.z = Math.PI / 2.5;
    iotRingGroup.add(ring3);

    iotRingGroup.position.set(160, 40, -150);
    scene.add(iotRingGroup);

    // Mouse Tracking Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera lerp with mouse
      targetX += (mouseX * 0.4 - targetX) * 0.04;
      targetY += (-mouseY * 0.4 - targetY) * 0.04;
      camera.position.x = targetX * 0.4;
      camera.position.y = targetY * 0.4;
      camera.lookAt(scene.position);

      // Rotate IoT Rings
      ring1.rotation.z += delta * 0.18;
      ring2.rotation.y -= delta * 0.14;
      ring3.rotation.x += delta * 0.1;
      iotRingGroup.rotation.y = Math.sin(elapsedTime * 0.2) * 0.15;

      // Update particle positions
      const positions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < nodeCount; i++) {
        const i3 = i * 3;
        positions[i3] += particleVelocities[i].x;
        positions[i3 + 1] += particleVelocities[i].y;
        positions[i3 + 2] += particleVelocities[i].z;

        // Boundary bounce
        if (Math.abs(positions[i3]) > 580) particleVelocities[i].x *= -1;
        if (Math.abs(positions[i3 + 1]) > 450) particleVelocities[i].y *= -1;
        if (Math.abs(positions[i3 + 2]) > 350) particleVelocities[i].z *= -1;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Update neural synaptic connection lines
      let vertexPosIndex = 0;
      let colorPosIndex = 0;
      let lineCount = 0;

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxConnectDistance) {
            const alpha = 1.0 - dist / maxConnectDistance;

            // Line vertices
            linePositions[vertexPosIndex++] = positions[i * 3];
            linePositions[vertexPosIndex++] = positions[i * 3 + 1];
            linePositions[vertexPosIndex++] = positions[i * 3 + 2];

            linePositions[vertexPosIndex++] = positions[j * 3];
            linePositions[vertexPosIndex++] = positions[j * 3 + 1];
            linePositions[vertexPosIndex++] = positions[j * 3 + 2];

            // Color blending (Yellow to Red gradients based on distance and nodes)
            const isRedConnection = (i + j) % 3 === 0;
            const r = isRedConnection ? 0.94 : 0.98;
            const g = isRedConnection ? 0.28 : 0.8;
            const b = isRedConnection ? 0.28 : 0.08;

            lineColors[colorPosIndex++] = r * alpha;
            lineColors[colorPosIndex++] = g * alpha;
            lineColors[colorPosIndex++] = b * alpha;

            lineColors[colorPosIndex++] = r * alpha;
            lineColors[colorPosIndex++] = g * alpha;
            lineColors[colorPosIndex++] = b * alpha;

            lineCount++;
          }
        }
      }

      linesGeometry.setDrawRange(0, lineCount * 2);
      linesGeometry.attributes.position.needsUpdate = true;
      linesGeometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      linesGeometry.dispose();
      lineBasicMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      renderer.dispose();
    };
  }, [is3DActive, fpsMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" id="cyber-3d-scene-container">
      {/* Three.js canvas container */}
      <div ref={containerRef} className="absolute inset-0" />

      {/* Cyber Grid & Ambient Glow Layers */}
      <div className="absolute inset-0 grid-overlay opacity-40 mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 circuit-pattern opacity-35 pointer-events-none" />

      {/* Dual Radial Glows (Neon Gold top-left, Cyber Red bottom-right) */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] bg-amber-500/8 rounded-full blur-[160px] pointer-events-none" />

      {/* 3D Performance Controller in bottom corner */}
      <div className="absolute bottom-4 right-4 pointer-events-auto flex items-center gap-2 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-xs text-neutral-400 z-30">
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-yellow-400">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          3D ENGINE: {is3DActive ? 'ONLINE' : 'PAUSED'}
        </span>
        <button
          onClick={() => setIs3DActive(!is3DActive)}
          className="hover:text-white transition-colors p-1 rounded hover:bg-white/10"
          title={is3DActive ? 'Pause 3D scene' : 'Resume 3D scene'}
          aria-label={is3DActive ? 'Pause 3D scene' : 'Resume 3D scene'}
        >
          {is3DActive ? <Eye size={13} /> : <EyeOff size={13} />}
        </button>
      </div>
    </div>
  );
};
