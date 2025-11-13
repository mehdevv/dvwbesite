import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { motion } from 'motion/react';

function Model() {
  const { scene } = useGLTF('/models/blue logo 3d model - Copy.glb');
  
  return (
    <primitive 
      object={scene} 
      scale={2.2} 
      position={[0, 0, 0]}
    />
  );
}

// Preload the model
useGLTF.preload('/models/blue logo 3d model - Copy.glb');

export function Logo3D() {
  return (
    <div className="w-full h-full" style={{ width: '100%', height: '100%', minHeight: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          <Model />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={2}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

