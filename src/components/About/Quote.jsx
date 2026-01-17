const Quote = () => {
    return (
        <section className="py-32 px-6">
            <div className="max-w-6xl mx-auto reveal-up">
                <div className="glass-panel rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden group">
                    {/* Ambient Glow */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative w-full md:w-1/3 h-[400px] rounded-xl overflow-hidden shrink-0">
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop"
                            className='w-full h-full object-cover hover:scale-110 transition-transform duration-700'
                            alt='Chairman'
                        />
                    </div>

                    <div className="flex-1 relative z-10">
                        <span className="text-8xl font-display text-blue-500/20 absolute -top-10 -left-6 select-none">"</span>
                        <blockquote className="text-2xl md:text-3xl font-display text-white leading-relaxed mb-8 relative">
                            Our vision has always been to create lasting value - not just for shareholders, but for every community we touch. Excellence is not a destination; it's a journey we commit to every single day.
                        </blockquote>
                        <div>
                            <h3 className="text-xl font-bold text-white">Mohammed Al-Rashid</h3>
                            <p className="text-blue-400">Founder & Chairman</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quote;