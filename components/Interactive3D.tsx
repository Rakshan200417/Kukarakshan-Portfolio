'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
import Image from 'next/image';
import { MousePointer, ArrowUpRight } from 'lucide-react';

export default function Interactive3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  const lat = 6.8402;
  const lon = 80.0034;
  const TARGET_ROT_Y = -((lon + 90) * Math.PI / 180);
  const TARGET_ROT_X = (lat * Math.PI / 180) * 0.4;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 4.4);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const resize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width || canvas.height !== height) {
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keySun = new THREE.DirectionalLight(0xffffff, 2.5);
    keySun.position.set(6, 4, 5);
    scene.add(keySun);

    const fillLight = new THREE.DirectionalLight(0x88bbff, 1.2);
    fillLight.position.set(-6, -2, -3);
    scene.add(fillLight);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);
    globeGroupRef.current = globeGroup;

    const R = 1.6;

    const atmosGeo = new THREE.SphereGeometry(R * 1.05, 48, 48);
    const atmosMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.12,
      side: THREE.BackSide,
    });
    const atmosMesh = new THREE.Mesh(atmosGeo, atmosMat);
    globeGroup.add(atmosMesh);

    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const pinX = -(R * Math.sin(phi) * Math.cos(theta));
    const pinY = R * Math.cos(phi);
    const pinZ = R * Math.sin(phi) * Math.sin(theta);
    const srilankaVector = new THREE.Vector3(pinX, pinY, pinZ);

    const pinStemLength = 0.28;
    const pinTip = srilankaVector.clone().normalize().multiplyScalar(R + pinStemLength);
    const stemGeo = new THREE.CylinderGeometry(0.004, 0.012, pinStemLength, 12);
    const stemMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.9, roughness: 0.1 });
    const pinStem = new THREE.Mesh(stemGeo, stemMat);
    pinStem.position.copy(srilankaVector.clone().lerp(pinTip, 0.5));
    pinStem.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), srilankaVector.clone().normalize());
    globeGroup.add(pinStem);

    const pinHeadGeo = new THREE.SphereGeometry(0.065, 20, 20);
    const pinHeadMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x059669,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8,
    });
    const pinHead = new THREE.Mesh(pinHeadGeo, pinHeadMat);
    pinHead.position.copy(pinTip);
    globeGroup.add(pinHead);

    const radarRingGeo = new THREE.RingGeometry(0.02, 0.065, 32);
    const radarRingMat = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
    });
    const radarRing = new THREE.Mesh(radarRingGeo, radarRingMat);
    radarRing.position.copy(srilankaVector.clone().multiplyScalar(1.003));
    radarRing.lookAt(globeGroup.position);
    globeGroup.add(radarRing);

    const labelCanvas = document.createElement('canvas');
    labelCanvas.width = 384;
    labelCanvas.height = 100;
    const lCtx = labelCanvas.getContext('2d');
    if (lCtx) {
      lCtx.fillStyle = 'rgba(6, 6, 8, 0.92)';
      lCtx.strokeStyle = '#34d399';
      lCtx.lineWidth = 4;
      lCtx.beginPath();
      if (lCtx.roundRect) {
        lCtx.roundRect(8, 8, 368, 84, 18);
      } else {
        lCtx.rect(8, 8, 368, 84);
      }
      lCtx.fill();
      lCtx.stroke();

      lCtx.fillStyle = '#ffffff';
      lCtx.font = '900 36px sans-serif';
      lCtx.textAlign = 'center';
      lCtx.fillText('📍 SRI LANKA', 192, 60);
    }

    const labelTex = new THREE.CanvasTexture(labelCanvas);
    const labelSpriteMat = new THREE.SpriteMaterial({ map: labelTex, transparent: true });
    const labelSprite = new THREE.Sprite(labelSpriteMat);
    labelSprite.position.copy(pinTip.clone().add(new THREE.Vector3(0, 0.22, 0)));
    labelSprite.scale.set(0.72, 0.19, 1);
    globeGroup.add(labelSprite);

    globeGroup.rotation.y = TARGET_ROT_Y;
    globeGroup.rotation.x = TARGET_ROT_X;

    const loader = new GLTFLoader();
    loader.load(
      '/public/earth.glb',
      (gltf) => {
        const model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        box.getSize(size);
        const maxDim = Math.max(size.x, size.y, size.z);
        const scaleFactor = (R * 2) / maxDim;
        model.scale.set(scaleFactor, scaleFactor, scaleFactor);

        const center = new THREE.Vector3();
        box.getCenter(center);
        model.position.sub(center.multiplyScalar(scaleFactor));

        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const m = child as THREE.Mesh;
            if (m.material) {
              (m.material as THREE.MeshStandardMaterial).roughness = 0.55;
              (m.material as THREE.MeshStandardMaterial).metalness = 0.2;
            }
          }
        });
        globeGroup.add(model);
      },
      undefined,
      () => {
        const fbGeo = new THREE.SphereGeometry(R, 64, 64);
        const fbMat = new THREE.MeshStandardMaterial({
          map: new THREE.TextureLoader().load('/public/images/earth_map.jpg'),
          roughness: 0.6,
        });
        globeGroup.add(new THREE.Mesh(fbGeo, fbMat));
      }
    );

    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let rotVelocity = { x: 0, y: 0 };
    let autoRotate = true;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      autoRotate = false;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };
    const onMouseUp = () => { isDragging = false; };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;
      globeGroup.rotation.y += deltaX * 0.006;
      globeGroup.rotation.x += deltaY * 0.006;
      rotVelocity.y = deltaX * 0.0015;
      rotVelocity.x = deltaY * 0.0015;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mousemove', onMouseMove);

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z = Math.max(2.4, Math.min(7.0, camera.position.z + e.deltaY * 0.004));
    };
    canvas.addEventListener('wheel', onWheel, { passive: false });

    let clock = 0;
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      resize();
      clock += 0.035;

      if (autoRotate && !isDragging) {
        globeGroup.rotation.y += 0.0018;
      } else if (!isDragging) {
        globeGroup.rotation.y += rotVelocity.y;
        globeGroup.rotation.x += rotVelocity.x;
        rotVelocity.x *= 0.95;
        rotVelocity.y *= 0.95;
      }

      const scale = 1.0 + (Math.sin(clock * 3) + 1) * 1.5;
      radarRing.scale.set(scale, scale, scale);
      radarRingMat.opacity = Math.max(0, 1 - (scale - 1) / 3.0);
      pinHeadMat.emissiveIntensity = 0.5 + Math.sin(clock * 4) * 0.4;

      renderer.render(scene, camera);
    };
    animate();

    const focusBtn = document.getElementById('btn-focus-srilanka');
    const handleFocus = () => {
      autoRotate = false;
      rotVelocity = { x: 0, y: 0 };
      gsap.to(globeGroup.rotation, {
        x: TARGET_ROT_X,
        y: TARGET_ROT_Y,
        duration: 1.4,
        ease: 'power3.inOut',
      });
      gsap.to(camera.position, {
        z: 4.2,
        duration: 1.2,
        ease: 'power2.out',
      });
    };
    focusBtn?.addEventListener('click', handleFocus);

    const orbitBtn = document.getElementById('btn-toggle-orbit');
    const handleOrbitToggle = () => {
      autoRotate = !autoRotate;
      if (orbitBtn) {
        orbitBtn.innerText = autoRotate ? 'PAUSE ROTATION' : 'AUTO-ROTATE';
      }
    };
    orbitBtn?.addEventListener('click', handleOrbitToggle);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('wheel', onWheel);
      focusBtn?.removeEventListener('click', handleFocus);
      orbitBtn?.removeEventListener('click', handleOrbitToggle);
      renderer.dispose();
    };
  }, [TARGET_ROT_X, TARGET_ROT_Y]);

  return (
    <section id="interactive-3d" className="border border-mono-800 bg-mono-900/80 backdrop-blur p-6 sm:p-8 rounded-sm">
      <div className="mb-6 flex items-center justify-between border-b border-mono-800 pb-3">
        <div>
          <h3 className="font-anton text-2xl tracking-wider text-white uppercase leading-none">INTERACTIVE 3D LAB & LIVE CLIENT SITES</h3>
          <div className="w-10 h-0.5 bg-white mt-2"></div>
        </div>
        <div className="flex items-center gap-2 text-xs font-display text-mono-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>LIVE WEBGL & PRODUCTION DEMOS</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-8 relative aspect-[16/9] w-full bg-mono-950 border border-mono-800 rounded-sm overflow-hidden group">
          <canvas ref={canvasRef} id="interactive-3d-canvas" className="w-full h-full block cursor-grab active:cursor-grabbing"></canvas>

          <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/80 backdrop-blur text-[11px] font-display text-mono-300 border border-mono-700/80 rounded-sm pointer-events-none flex items-center gap-2">
            <MousePointer className="w-3.5 h-3.5 text-white" />
            <span>Drag to rotate Earth • Scroll to zoom</span>
          </div>

          <div className="absolute top-3 right-3 flex items-center gap-2">
            <button
              id="btn-focus-srilanka"
              className="px-2.5 py-1 bg-white hover:bg-neutral-200 text-black text-[11px] font-display font-bold border border-white rounded-sm transition flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span>FOCUS HOME (SRI LANKA)</span>
            </button>
            <button
              id="btn-toggle-orbit"
              className="px-2.5 py-1 bg-mono-900/90 hover:bg-white hover:text-black text-white text-[11px] font-display border border-mono-700 rounded-sm transition"
            >
              PAUSE ROTATION
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4 font-display text-xs">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[10px] uppercase font-bold tracking-wider rounded-sm mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>GLOBAL REMOTE CAPABILITY</span>
            </div>
            <h4 className="font-syne font-bold text-lg text-white uppercase">Homagama, Colombo, Sri Lanka</h4>
            <p className="text-mono-300 leading-relaxed font-body text-xs mt-2">
              Interactive 3D digital Earth globe centered on <strong className="text-white">Homagama, Colombo, Sri Lanka</strong> (6.8402° N, 80.0034° E). Features authentic 3D globe geometry, dynamic pulsing radar beacon, and realistic orbital rotation.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <div className="p-3 bg-mono-850 border border-mono-800 rounded-sm flex items-center justify-between">
              <span className="text-mono-300">Base Location</span>
              <span className="text-white font-bold">Homagama, Colombo, Sri Lanka</span>
            </div>
            <div className="p-3 bg-mono-850 border border-mono-800 rounded-sm flex items-center justify-between">
              <span className="text-mono-300">Work Availability</span>
              <span className="text-emerald-400 font-bold">Remote & Global Relocation</span>
            </div>
            <div className="p-3 bg-mono-850 border border-mono-800 rounded-sm flex items-center justify-between">
              <span className="text-mono-300">Time Zone Offset</span>
              <span className="text-white font-bold">UTC +05:30 (IST)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Live 3D Client Platforms */}
      <div className="mt-8 pt-6 border-t border-mono-800">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-[10px] font-display text-mono-400 uppercase tracking-widest block font-bold">FEATURED LIVE 3D CLIENT PLATFORMS</span>
            <h4 className="font-anton text-lg tracking-wider text-white uppercase mt-0.5">LAUNCHED FRONTENDS IN PRODUCTION</h4>
          </div>
          <span className="text-[11px] font-display text-mono-400 hidden sm:inline">CLICK TO VISIT DEPLOYED APP</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://dd-photography-95.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="tilt-card bg-mono-850 border border-mono-800 hover:border-white transition-all duration-300 group rounded-sm overflow-hidden block shadow-lg"
          >
            <div className="aspect-video w-full bg-black overflow-hidden relative border-b border-mono-800">
              <Image
                src="/public/images/proj-dd-photography.png"
                alt="DD Photography 95 Live Frontend"
                width={800}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/90 backdrop-blur text-[10px] font-display text-emerald-400 border border-emerald-500/40 rounded-sm flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>LIVE PRODUCTION</span>
              </div>
              <div className="absolute top-3 right-3 px-3 py-1 bg-white text-black text-[11px] font-display font-bold rounded-sm flex items-center gap-1 shadow-md group-hover:scale-105 transition-transform">
                <span>OPEN SITE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-display">
                <span className="text-white font-bold tracking-wider">dd-photography-95.vercel.app</span>
                <span className="text-mono-300 bg-black/70 px-2 py-0.5 rounded text-[10px]">React • Tailwind • 3D Gallery</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h5 className="font-syne font-bold text-base text-white uppercase group-hover:text-mono-200 transition">DD Photography 95</h5>
                <span className="text-[11px] font-display text-mono-400 uppercase">Live Web App ↗</span>
              </div>
              <p className="text-xs text-mono-400 font-body leading-relaxed mt-2">
                Cinematic photography portfolio with responsive client galleries, booking flows, high-performance image optimizations, and smooth spatial transitions.
              </p>
            </div>
          </a>

          <a
            href="https://triotreats.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="tilt-card bg-mono-850 border border-mono-800 hover:border-white transition-all duration-300 group rounded-sm overflow-hidden block shadow-lg"
          >
            <div className="aspect-video w-full bg-black overflow-hidden relative border-b border-mono-800">
              <Image
                src="/public/images/proj-trio-treats.jpg"
                alt="Trio Treats Live Frontend"
                width={800}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/90 backdrop-blur text-[10px] font-display text-emerald-400 border border-emerald-500/40 rounded-sm flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>LIVE PRODUCTION</span>
              </div>
              <div className="absolute top-3 right-3 px-3 py-1 bg-white text-black text-[11px] font-display font-bold rounded-sm flex items-center gap-1 shadow-md group-hover:scale-105 transition-transform">
                <span>OPEN SITE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-display">
                <span className="text-white font-bold tracking-wider">triotreats.vercel.app</span>
                <span className="text-mono-300 bg-black/70 px-2 py-0.5 rounded text-[10px]">Next.js • Three.js 3D • Email API</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h5 className="font-syne font-bold text-base text-white uppercase group-hover:text-mono-200 transition">Trio Treats</h5>
                <span className="text-[11px] font-display text-mono-400 uppercase">Live Web App ↗</span>
              </div>
              <p className="text-xs text-mono-400 font-body leading-relaxed mt-2">
                Bakery ordering portal featuring an interactive 3D cake model, dynamic product customization, seamless cart management, and automated order notifications.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
