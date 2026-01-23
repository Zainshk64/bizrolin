// src/components/Hero.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';
import { Globe2, Star } from 'lucide-react';

const Hero = () => {
    const heroCanvasRef = useRef(null);
    const hero3DCanvasRef = useRef(null);

    useEffect(() => {
        // Hero animations
        const heroTimeline = gsap.timeline();
        heroTimeline
            .to('.hero-badge', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 })
            .to('.hero-title-text', { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, '-=0.4')
            .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
            .to('.hero-buttons', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
            .to('.floating-element', { opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.6')
            .to('.scroll-indicator', { opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.4');

        // Three.js Hero Background
        if (heroCanvasRef.current) {
            const heroScene = new THREE.Scene();
            const heroCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const heroRenderer = new THREE.WebGLRenderer({ canvas: heroCanvasRef.current, alpha: true, antialias: true });
            heroRenderer.setSize(window.innerWidth, window.innerHeight);
            heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // Particles
            const particlesGeometry = new THREE.BufferGeometry();
            const particleCount = 1500;
            const posArray = new Float32Array(particleCount * 3);

            for (let i = 0; i < particleCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 100;
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.08,
                color: 0x3B82F6,
                transparent: true,
                opacity: 0.6,
                sizeAttenuation: true
            });

            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            heroScene.add(particlesMesh);

            // Shapes
            const shapes = [];
            const createShape = (geometry, color, position, scale) => {
                const material = new THREE.MeshBasicMaterial({
                    color: color,
                    wireframe: true,
                    transparent: true,
                    opacity: 0.08
                });
                const mesh = new THREE.Mesh(geometry, material);
                mesh.position.set(...position);
                mesh.scale.set(scale, scale, scale);
                mesh.userData = {
                    rotationSpeed: {
                        x: (Math.random() - 0.5) * 0.001,
                        y: (Math.random() - 0.5) * 0.001,
                        z: (Math.random() - 0.5) * 0.001
                    },
                    floatSpeed: Math.random() * 0.3 + 0.2,
                    floatOffset: Math.random() * Math.PI * 2,
                    originalY: position[1]
                };
                return mesh;
            };

            shapes.push(createShape(new THREE.IcosahedronGeometry(2.5, 0), 0x3B82F6, [18, 6, -15], 1.3));
            shapes.push(createShape(new THREE.OctahedronGeometry(2, 0), 0x14B8A6, [-22, -10, -18], 1.1));
            shapes.push(createShape(new THREE.TorusGeometry(3.5, 0.4, 8, 24), 0x8B5CF6, [28, -6, -25], 0.7));
            shapes.push(createShape(new THREE.TetrahedronGeometry(2, 0), 0x3B82F6, [-28, 12, -28], 1.2));

            shapes.forEach(shape => heroScene.add(shape));

            heroCamera.position.z = 35;

            let targetMouseX = 0;
            let targetMouseY = 0;
            let currentMouseX = 0;
            let currentMouseY = 0;

            const handleMouseMove = (e) => {
                targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
                targetMouseY = (e.clientY / window.innerHeight) * 2 - 1;
            };

            document.addEventListener('mousemove', handleMouseMove);

            let animationFrameId;
            function animate() {
                animationFrameId = requestAnimationFrame(animate);

                currentMouseX += (targetMouseX - currentMouseX) * 0.03;
                currentMouseY += (targetMouseY - currentMouseY) * 0.03;

                particlesMesh.rotation.y += 0.0002;
                particlesMesh.rotation.x += 0.00005;

                shapes.forEach(shape => {
                    shape.rotation.x += shape.userData.rotationSpeed.x;
                    shape.rotation.y += shape.userData.rotationSpeed.y;
                    shape.rotation.z += shape.userData.rotationSpeed.z;
                    shape.position.y = shape.userData.originalY +
                        Math.sin(Date.now() * 0.0005 * shape.userData.floatSpeed + shape.userData.floatOffset) * 3;
                });

                heroCamera.position.x += (currentMouseX * 3 - heroCamera.position.x) * 0.015;
                heroCamera.position.y += (-currentMouseY * 3 - heroCamera.position.y) * 0.015;
                heroCamera.lookAt(heroScene.position);

                heroRenderer.render(heroScene, heroCamera);
            }
            animate();

            const handleResize = () => {
                heroRenderer.setSize(window.innerWidth, window.innerHeight);
                heroCamera.aspect = window.innerWidth / window.innerHeight;
                heroCamera.updateProjectionMatrix();
            };
            window.addEventListener('resize', handleResize);

            return () => {
                cancelAnimationFrame(animationFrameId);
                document.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('resize', handleResize);
                heroRenderer.dispose();
                particlesGeometry.dispose();
                particlesMaterial.dispose();
                shapes.forEach(shape => {
                    shape.geometry.dispose();
                    shape.material.dispose();
                });
                heroTimeline.kill();
            };
        }
    }, []);


    useEffect(() => {
        // 3D Globe
        if (hero3DCanvasRef.current && hero3DCanvasRef.current.offsetParent !== null) {
            const container = hero3DCanvasRef.current.parentElement;
            const scene3D = new THREE.Scene();

            const width = container.clientWidth;
            const height = container.clientHeight;

            // FIX: Use actual aspect ratio instead of 1
            const camera3D = new THREE.PerspectiveCamera(80, width / height, 0.1, 1000);
            const renderer3D = new THREE.WebGLRenderer({
                canvas: hero3DCanvasRef.current,
                alpha: true,
                antialias: true
            });

            renderer3D.setSize(width, height);
            renderer3D.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            // Use square aspect ratio for the globe
            const size = Math.min(container?.offsetWidth || 400, container?.offsetHeight || 400);

            // Set square dimensions
            renderer3D.setSize(size, size);
            renderer3D.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // Globe - adjusted size
            const globeGeometry = new THREE.SphereGeometry(4, 48, 48);
            const globeMaterial = new THREE.MeshBasicMaterial({
                color: 0x3B82F6,
                wireframe: true,
                transparent: true,
                opacity: 0.25
            });
            const globe = new THREE.Mesh(globeGeometry, globeMaterial);
            scene3D.add(globe);

            // Inner Globe
            const innerGlobeGeometry = new THREE.SphereGeometry(3.8, 32, 32);
            const innerGlobeMaterial = new THREE.MeshBasicMaterial({
                color: 0x14B8A6,
                transparent: true,
                opacity: 0.1
            });
            const innerGlobe = new THREE.Mesh(innerGlobeGeometry, innerGlobeMaterial);
            scene3D.add(innerGlobe);

            // Ring 1
            const ringGeometry = new THREE.TorusGeometry(6, 0.05, 16, 100);
            const ringMaterial = new THREE.MeshBasicMaterial({
                color: 0xF59E0B,
                transparent: true,
                opacity: 0.5
            });
            const ring = new THREE.Mesh(ringGeometry, ringMaterial);
            ring.rotation.x = Math.PI / 2.2;
            scene3D.add(ring);

            // Ring 2
            const ring2Geometry = new THREE.TorusGeometry(7, 0.03, 16, 100);
            const ring2Material = new THREE.MeshBasicMaterial({
                color: 0x8B5CF6,
                transparent: true,
                opacity: 0.3
            });
            const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
            ring2.rotation.x = Math.PI / 1.7;
            ring2.rotation.y = Math.PI / 5;
            scene3D.add(ring2);

            // Orbit Points
            const orbitPoints = [];
            for (let i = 0; i < 8; i++) {
                const pointGeometry = new THREE.SphereGeometry(0.12, 16, 16);
                const pointMaterial = new THREE.MeshBasicMaterial({
                    color: i % 2 === 0 ? 0x3B82F6 : 0x14B8A6,
                    transparent: true,
                    opacity: 0.9
                });
                const point = new THREE.Mesh(pointGeometry, pointMaterial);
                point.userData = {
                    angle: (i / 8) * Math.PI * 2,
                    radius: 4.5 + Math.random() * 0.5,
                    speed: 0.004 + Math.random() * 0.002,
                    yOffset: (Math.random() - 0.5) * 1.5
                };
                orbitPoints.push(point);
                scene3D.add(point);
            }

            // Camera position - adjusted for better view
            camera3D.position.z = 12;
            camera3D.position.y = 0;

            let animationFrameId;
            function animate() {
                animationFrameId = requestAnimationFrame(animate);

                globe.rotation.y += 0.003;
                globe.rotation.x += 0.001;
                innerGlobe.rotation.y -= 0.002;
                ring.rotation.z += 0.002;
                ring2.rotation.z -= 0.001;

                orbitPoints.forEach((point) => {
                    point.userData.angle += point.userData.speed;
                    point.position.x = Math.cos(point.userData.angle) * point.userData.radius;
                    point.position.z = Math.sin(point.userData.angle) * point.userData.radius;
                    point.position.y = point.userData.yOffset + Math.sin(point.userData.angle * 2) * 0.5;
                });

                renderer3D.render(scene3D, camera3D);
            }
            animate();

            // Handle resize
            const handleResize = () => {
                const newSize = Math.min(container?.offsetWidth || 400, container?.offsetHeight || 400);
                renderer3D.setSize(newSize, newSize);
            };
            window.addEventListener('resize', handleResize);

            return () => {
                cancelAnimationFrame(animationFrameId);
                window.removeEventListener('resize', handleResize);
                renderer3D.dispose();
                globeGeometry.dispose();
                globeMaterial.dispose();
                innerGlobeGeometry.dispose();
                innerGlobeMaterial.dispose();
                ringGeometry.dispose();
                ringMaterial.dispose();
                ring2Geometry.dispose();
                ring2Material.dispose();
                orbitPoints.forEach(point => {
                    point.geometry.dispose();
                    point.material.dispose();
                });
            };
        }
    }, []);

    return (
        <section className="min-h-screen flex justify-center items-center relative overflow-hidden bg-darkest" id="home">
            {/* Canvas */}
            <canvas ref={heroCanvasRef} className="absolute inset-0 w-full h-full z-[1]" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(ellipse_at_20%_30%,rgba(59,130,246,0.12)_0%,transparent_50%),radial-gradient(ellipse_at_80%_70%,rgba(20,184,166,0.08)_0%,transparent_50%),radial-gradient(ellipse_at_50%_50%,rgba(139,92,246,0.05)_0%,transparent_60%)]" />

            {/* Grid Background */}
            <div className="absolute inset-0 z-[1] hero-grid-bg" />

            {/* Floating Shapes */}
            <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
                <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-primary-500/25 to-primary-600/10 rounded-full blur-[80px] opacity-40 -top-[150px] -right-[150px] animate-float-1" />
                <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-teal-light/20 to-teal/10 rounded-full blur-[80px] opacity-40 -bottom-[100px] -left-[100px] animate-float-2" />
                <div className="absolute w-[300px] h-[300px] bg-gradient-to-br from-purple/15 to-purple-700/10 rounded-full blur-[80px] opacity-40 top-[40%] left-[30%] animate-float-3" />
            </div>

            {/* Content Container */}
            <div className="max-w-[1600px] w-full mx-5 md:mx-30 px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center relative z-10 min-h-screen">

                {/* Left Content */}
                <div className="relative pt-20">
                    {/* Badge */}
                    {/* <div className="hero-badge inline-flex items-center gap-3 px-6 py-2.5 pl-2.5 glass-bg rounded-full text-sm font-medium text-primary-300 mb-9 opacity-0 translate-y-6 shadow-lg shadow-primary-500/15">
                        <span className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-xs text-white shadow-lg shadow-primary-500/40">
                            ★
                        </span>
                        Global Conglomerate Since 1974
                    </div> */}

                    {/* Title */}
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-8 text-white tracking-tight">
                        <span className="block overflow-hidden">
                            <span className="hero-title-text block opacity-0 translate-y-full">Redefining </span>
                        </span>
                        <span className="block overflow-hidden">
                            <span className="hero-title-text block opacity-0 translate-y-full gradient-text">Global Hiring </span>
                        </span>
                        <span className="block overflow-hidden">
                            <span className="hero-title-text block opacity-0 translate-y-full">Without Borders</span>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-subtitle text-lg text-slate-400 mb-12 leading-relaxed max-w-lg opacity-0 translate-y-6">
We help global companies hire top-tier Pakistani talent through trusted, streamlined recruitment solutions. By focusing on quality, alignment, and long-term value, we turn skilled professionals into high-performing global teams.                    </p>

                    {/* Buttons */}
                    <div className="hero-buttons flex flex-wrap justify-center gap-5 mb-16 opacity-0 translate-y-6">
                        <a href="/brands" className="btn-primary group">
                            Explore Our Brands
                            <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/30">
                                →
                            </span>
                        </a>
                        <a href="/about" className="btn-secondary">
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Right Content - 3D Visual */}
                <div className="relative h-screen hidden lg:flex items-center justify-center">
                    <div className="w-full  aspect-square relative flex items-center justify-center">
                        <canvas
                            ref={hero3DCanvasRef}
                            className="w-full h-full"
                        // style={{ maxWidth: '500px', maxHeight: '500px' }}
                        />
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="floating-element top-[18%] right-[8%] flex items-center gap-4 animate-float-card-1">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/40">
                                <Globe2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-white mb-0.5">Global Presence</h4>
                                <p className="text-xs text-slate-400">5+ Countries</p>
                            </div>
                        </div>

                        <div className="floating-element bottom-[28%] left-[3%] animate-float-card-2" style={{ animationDelay: '-2s' }}>
                            <div className="font-serif text-3xl font-semibold text-teal-glow mb-0.5">+32%</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wider">Annual Growth</div>
                        </div>

                        <div className="floating-element top-[50%] -right-[5%] flex items-center gap-4 animate-float-card-3" style={{ animationDelay: '-4s' }}>
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/40">
                                <Star className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-white mb-0.5">Excellence</h4>
                                <p className="text-xs text-slate-400">Since 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator absolute bottom-12 left-16 max-lg:left-1/2 max-lg:-translate-x-1/2 z-10 flex items-center gap-5 opacity-0">
                <div className="w-6 h-10 border-2 border-primary-400 rounded-full relative shadow-lg shadow-primary-500/20">
                    <div className="w-1 h-2 bg-primary-400 rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-scroll-wheel shadow-md shadow-primary-400/50" />
                </div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Scroll to explore</span>
            </div>
        </section>
    );
};

export default Hero;