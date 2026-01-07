'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Check, Menu, X, Zap, Shield, Rocket, Star, ChevronDown } from 'lucide-react';

// Animation hook for scroll-triggered animations
const useScrollAnimation = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollY;
};

export default function LandingPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const scrollY = useScrollAnimation();

    return (
        <div className="min-h-screen bg-white text-black font-sans antialiased">
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;500;600;700;800&display=swap');
        
        * {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Space Mono', monospace;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Syne', sans-serif;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        
        .opacity-0 { opacity: 0; }
        
        .gradient-mesh {
          background: 
            radial-gradient(at 27% 37%, rgba(0, 0, 0, 0.03) 0px, transparent 50%),
            radial-gradient(at 97% 21%, rgba(0, 0, 0, 0.02) 0px, transparent 50%),
            radial-gradient(at 52% 99%, rgba(0, 0, 0, 0.04) 0px, transparent 50%),
            radial-gradient(at 10% 29%, rgba(0, 0, 0, 0.02) 0px, transparent 50%);
        }
        
        .noise {
          position: relative;
        }
        
        .noise::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.8;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        
        .btn-primary:hover::before {
          transform: translateX(0);
        }
        
        .btn-primary:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .btn-secondary {
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background: black;
          color: white;
          transform: scale(1.02);
        }
        
        .metric-number {
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.05em;
        }
      `}</style>

            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                style={{
                    background: scrollY > 50
                        ? 'rgba(255, 255, 255, 0.9)'
                        : 'transparent',
                    backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
                    borderBottom: scrollY > 50
                        ? '1px solid rgba(0, 0, 0, 0.1)'
                        : '1px solid transparent'
                }}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center space-x-2 opacity-0 animate-fade-in">
                            <div className="w-10 h-10 bg-black flex items-center justify-center">
                                <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">VERTEX</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-sm font-medium hover:text-gray-600 transition-colors">Features</a>
                            <a href="#testimonials" className="text-sm font-medium hover:text-gray-600 transition-colors">Proof</a>
                            <a href="#pricing" className="text-sm font-medium hover:text-gray-600 transition-colors">Pricing</a>
                            <button className="btn-secondary px-6 py-2.5 text-sm font-medium border-2 border-black hover:bg-black hover:text-white transition-all">
                                Sign In
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <div className="px-6 py-6 space-y-4">
                            <a href="#features" className="block text-sm font-medium hover:text-gray-600 transition-colors">Features</a>
                            <a href="#testimonials" className="block text-sm font-medium hover:text-gray-600 transition-colors">Proof</a>
                            <a href="#pricing" className="block text-sm font-medium hover:text-gray-600 transition-colors">Pricing</a>
                            <button className="w-full px-6 py-2.5 text-sm font-medium border-2 border-black hover:bg-black hover:text-white transition-all">
                                Sign In
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center gradient-mesh noise overflow-hidden pt-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
                    <div className="text-center max-w-5xl mx-auto">
                        <div className="inline-block mb-6 opacity-0 animate-fade-in">
                            <span className="inline-flex items-center px-4 py-2 bg-black text-white text-xs font-bold tracking-wider uppercase">
                                <Star className="w-4 h-4 mr-2" />
                                Now in Public Beta
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 opacity-0 animate-fade-in-up delay-100">
                            Build at the
                            <br />
                            <span className="italic">speed of thought</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up delay-200">
                            The infrastructure platform that scales from prototype to enterprise.
                            Deploy globally in seconds, manage effortlessly, grow infinitely.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in-up delay-300">
                            <button className="btn-primary w-full sm:w-auto px-10 py-4 bg-black text-white text-base font-bold tracking-wide flex items-center justify-center group">
                                Start Building Free
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="btn-secondary w-full sm:w-auto px-10 py-4 text-base font-bold tracking-wide border-2 border-black">
                                View Documentation
                            </button>
                        </div>

                        <div className="flex items-center justify-center gap-12 text-sm opacity-0 animate-fade-in delay-400">
                            <div className="flex items-center gap-2">
                                <Check className="w-5 h-5" strokeWidth={3} />
                                <span className="font-medium">No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-5 h-5" strokeWidth={3} />
                                <span className="font-medium">Deploy in 30 seconds</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 opacity-0 animate-fade-in delay-500">
                        <div className="max-w-5xl mx-auto bg-black p-8 shadow-2xl">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                                {`$ vertex deploy

✓ Building application...
✓ Optimizing assets...
✓ Deploying to global edge network...
✓ Application live at vertex-app-xyz.vertex.io

Deployment complete in 8.2s
Performance Score: 100/100`}
                            </pre>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                </div>
            </section>

            {/* Metrics Section */}
            <section className="py-20 border-y border-gray-200 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold mb-2 metric-number">99.99%</div>
                            <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Uptime SLA</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold mb-2 metric-number">&lt;50ms</div>
                            <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Global Latency</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold mb-2 metric-number">10M+</div>
                            <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Deployments</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold mb-2 metric-number">150+</div>
                            <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Edge Locations</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-32 gradient-mesh">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                            Everything you need.
                            <br />
                            <span className="italic text-gray-400">Nothing you don't.</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Built for developers who ship. Optimized for teams that scale.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass-card p-10 hover-lift">
                            <div className="w-14 h-14 bg-black flex items-center justify-center mb-6">
                                <Zap className="w-7 h-7 text-white" strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Deploy to our global edge network in seconds. Automatic optimization,
                                intelligent caching, and CDN distribution out of the box.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                                    <span className="text-sm">Zero-config deployments</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                                    <span className="text-sm">Global edge optimization</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                                    <span className="text-sm">Automatic SSL/TLS</span>
                                </li>
                            </ul>
                        </div>

                        <div className="glass-card p-10 hover-lift">
                            <div className="w-14 h-14 bg-black flex items-center justify-center mb-6">
                                <Shield className="w-7 h-7 text-white" strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Enterprise Security</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                SOC 2 Type II certified infrastructure with end-to-end encryption,
                                DDoS protection, and compliance-ready architecture.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                                    <span className="text-sm">SOC 2 Type II certified</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                                    <span className="text-sm">DDoS protection included</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                                    <span className="text-sm">End-to-end encryption</span>
                                </li>
                            </ul>
                        </div>

                        <div className="glass-card p-10 hover-lift">
                            <div className="w-14 h-14 bg-black flex items-center justify-center mb-6">
                                <Rocket className="w-7 h-7 text-white" strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Infinite Scale</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                From first user to first million. Automatic scaling, load balancing,
                                and performance optimization at every tier.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                                    <span className="text-sm">Auto-scaling infrastructure</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                                    <span className="text-sm">Intelligent load balancing</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                                    <span className="text-sm">Real-time monitoring</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
            <section id="testimonials" className="py-32 bg-black text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                            Trusted by innovators
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            From startups to unicorns, developers choose Vertex to ship faster.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-white" />
                                ))}
                            </div>
                            <p className="text-lg mb-6 leading-relaxed">
                                "Vertex reduced our deployment time from hours to seconds. The developer
                                experience is phenomenal, and the performance gains are measurable."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&fit=crop&crop=faces"
                                        alt="Sarah Chen"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-bold">Sarah Chen</div>
                                    <div className="text-sm text-gray-400">CTO, TechFlow</div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-white" />
                                ))}
                            </div>
                            <p className="text-lg mb-6 leading-relaxed">
                                "We scaled from 100 to 10 million users without changing a single line
                                of infrastructure code. Vertex just works."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces"
                                        alt="Marcus Johnson"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-bold">Marcus Johnson</div>
                                    <div className="text-sm text-gray-400">Founder, StreamAI</div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-white" />
                                ))}
                            </div>
                            <p className="text-lg mb-6 leading-relaxed">
                                "The best infrastructure investment we've made. Support is incredible,
                                documentation is thorough, and the platform is rock solid."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&h=96&fit=crop&crop=faces"
                                        alt="Elena Rodriguez"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-bold">Elena Rodriguez</div>
                                    <div className="text-sm text-gray-400">VP Engineering, DataSync</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-gray-400 uppercase tracking-wider mb-8">Trusted by leading companies</p>
                        <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
                            <Image
                                src="https://cdn.simpleicons.org/github/white"
                                alt="GitHub"
                                width={32}
                                height={32}
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            />
                            <Image
                                src="https://cdn.simpleicons.org/stripe/white"
                                alt="Stripe"
                                width={32}
                                height={32}
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            />
                            <Image
                                src="https://cdn.simpleicons.org/shopify/white"
                                alt="Shopify"
                                width={32}
                                height={32}
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            />
                            <Image
                                src="https://cdn.simpleicons.org/google/white"
                                alt="Google"
                                width={32}
                                height={32}
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            />
                            <Image
                                src="https://cdn.simpleicons.org/Instagram/white"
                                alt="Instagram"
                                width={32}
                                height={32}
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            />
                            <Image
                                src="https://cdn.simpleicons.org/x/white"
                                alt="X"
                                width={32}
                                height={32}
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            />
                            <Image
                                src="https://cdn.simpleicons.org/facebook/white"
                                alt="Slack"
                                width={32}
                                height={32}
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            />
                            <Image
                                src="https://cdn.simpleicons.org/notion/white"
                                alt="Notion"
                                width={32}
                                height={32}
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            />
                            <Image
                                src="https://cdn.simpleicons.org/vercel/white"
                                alt="Vercel"
                                width={32}
                                height={32}
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-32 gradient-mesh noise">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
                        Ready to ship faster?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join thousands of developers building the future on Vertex.
                        Start free, scale when you're ready.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <button className="btn-primary w-full sm:w-auto px-12 py-5 bg-black text-white text-lg font-bold tracking-wide flex items-center justify-center group">
                            Start Building Free
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="btn-secondary w-full sm:w-auto px-12 py-5 text-lg font-bold tracking-wide border-2 border-black">
                            Schedule Demo
                        </button>
                    </div>
                    <p className="text-sm text-gray-500">
                        Free tier includes 100GB bandwidth, unlimited projects, and community support.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-200 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                    <div className="grid md:grid-cols-5 gap-12 mb-16">
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="w-10 h-10 bg-black flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
                                </div>
                                <span className="text-2xl font-bold tracking-tight">VERTEX</span>
                            </div>
                            <p className="text-gray-600 leading-relaxed max-w-sm">
                                The infrastructure platform that scales from prototype to enterprise.
                                Built for developers who ship.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Product</h3>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Features</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Pricing</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Documentation</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">API Reference</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Company</h3>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">About</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Blog</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Legal</h3>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Terms</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Security</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Compliance</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-500">
                            © 2025 Vertex, Inc. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-gray-500 hover:text-black transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-black transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-black transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}