'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    // Skip if prefers-reduced-motion is enabled
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Create mesh geometry
    const geometry = new THREE.PlaneGeometry(20, 20, 20, 20);
    
    // Create material
    const material = new THREE.MeshBasicMaterial({
      color: 0x7C3AED,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    
    // Create mesh
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    // Position camera
    camera.position.z = 10;
    
    // Make responsive
    const handleResize = (): void => {
      if (!container || !camera || !renderer) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = (): void => {
      animationRef.current = requestAnimationFrame(animate);
      
      // Only animate if document is visible and mesh exists
      if (!document.hidden && mesh) {
        mesh.rotation.x += 0.003;
        mesh.rotation.y += 0.002;
        renderer.render(scene, camera);
      }
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (rendererRef.current && container && rendererRef.current.domElement) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      id="three-bg" 
      className="absolute w-full h-full top-0 left-0 z-0 opacity-60 pointer-events-none" 
    />
  );
}