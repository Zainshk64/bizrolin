const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10">
                <div className="about-hero-content reveal-up">
                    <span className="inline-block py-2 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold tracking-wide mb-8 backdrop-blur-md">
                        About Panorama
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-8">
                        Building a <span className="text-gradient">Better Tomorrow</span>
                    </h1>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                        For over 50 years, we've been pioneering innovation across industries.
                        From humble beginnings to a global conglomerate, our journey is defined
                        by excellence, integrity, and an unwavering commitment to creating value.
                    </p>
                </div>

                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden reveal-scale shadow-2xl shadow-blue-900/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-darkest via-transparent to-transparent z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1766391374856-eccaa085b661?q=80&w=687&auto=format&fit=crop"
                        alt="Modern corporate architecture"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;