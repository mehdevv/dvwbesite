import { Suspense, useEffect, useRef, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Detect device performance
const getDevicePerformance = () => {
  if (typeof window === 'undefined') return 'high';
  
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const isLowEnd = navigator.hardwareConcurrency <= 4 || 
                   (navigator.deviceMemory && navigator.deviceMemory <= 4);
  
  if (isMobile && isLowEnd) return 'low';
  if (isMobile) return 'medium';
  return 'high';
};

// Adaptive DPR based on device
const getAdaptiveDPR = () => {
  const performance = getDevicePerformance();
  if (performance === 'low') return [0.75, 1];
  if (performance === 'medium') return [1, 1.5];
  return [1, 2];
};

// Adaptive antialiasing
const getAntialiasing = () => {
  return getDevicePerformance() !== 'low';
};

function Model({ isVisible }: { isVisible: boolean }) {
  const { scene } = useGLTF('/models/blue logo 3d model - Copy.glb');
  
  // Clone the scene to avoid sharing geometry between instances
  const clonedScene = useMemo(() => {
    return scene.clone();
  }, [scene]);
  
  // Optimize geometry
  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Enable frustum culling
        child.frustumCulled = true;
        // Optimize shadows
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
  }, [clonedScene]);
  
  return (
    <primitive 
      object={clonedScene} 
      scale={2.375} 
      position={[0, 0, 0]}
      visible={isVisible}
    />
  );
}

// Auto-rotate controls that pause when not visible
function AutoRotateControls({ isVisible }: { isVisible: boolean }) {
  const performance = getDevicePerformance();
  const autoRotateSpeed = performance === 'low' ? 1 : 2;
  
  return (
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      autoRotate={isVisible}
      autoRotateSpeed={autoRotateSpeed}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 1.5}
      // Reduce damping for better performance
      dampingFactor={0.05}
      enableDamping={true}
    />
  );
}

export function Logo3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  
  // Intersection Observer for lazy loading and visibility detection
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isIntersecting = entry.isIntersecting && entry.intersectionRatio > 0.1;
          setIsVisible(isIntersecting);
          
          // Once it's been visible, keep it loaded
          if (isIntersecting) {
            setHasIntersected(true);
          }
        });
      },
      {
        threshold: [0, 0.1, 0.5, 1],
        rootMargin: '50px', // Start loading slightly before it's visible
      }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  const adaptiveDPR = useMemo(() => getAdaptiveDPR(), []);
  const antialiasing = useMemo(() => getAntialiasing(), []);
  const performance = useMemo(() => getDevicePerformance(), []);
  
  // Only render Canvas when it has been visible at least once
  if (!hasIntersected) {
    return (
      <div 
        ref={containerRef}
        className="w-full h-full" 
        style={{ width: '100%', height: '100%', minHeight: '100%' }}
      />
    );
  }
  
  return (
    <div 
      ref={containerRef}
      className="w-full h-full" 
      style={{ width: '100%', height: '100%', minHeight: '100%' }}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ 
          antialias: antialiasing, 
          alpha: true,
          powerPreference: performance === 'low' ? 'low-power' : 'high-performance',
          stencil: false,
          depth: true,
        }}
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
        dpr={adaptiveDPR}
        frameloop={isVisible ? 'always' : 'demand'}
        performance={{ min: 0.5 }}
        onCreated={({ gl }) => {
          // Additional WebGL optimizations
          gl.setPixelRatio(Math.min(window.devicePixelRatio, adaptiveDPR[1]));
          gl.shadowMap.enabled = false;
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          <Model isVisible={isVisible} />
          <AutoRotateControls isVisible={isVisible} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Lazy preload - only preload when component is about to be used
if (typeof window !== 'undefined') {
  // Use requestIdleCallback for non-blocking preload
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      useGLTF.preload('/models/blue logo 3d model - Copy.glb');
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      useGLTF.preload('/models/blue logo 3d model - Copy.glb');
    }, 2000);
  }
}

