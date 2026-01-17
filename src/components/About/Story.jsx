const Story = () => {
    return (
        <section className="py-24 px-6 bg-darker/50">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 reveal-left space-y-6">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Our <span className="text-gradient">Story</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        What started as a small trading company in 1974 has grown into a diversified conglomerate spanning seven industries across 45 countries.
                    </p>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Our founder's vision was simple: create businesses that not only generate profit but also contribute positively to society and the environment. This vision continues to guide us today.
                    </p>
                </div>

                <div className="order-1 lg:order-2 reveal-right relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500"></div>
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                        alt="Corporate history"
                        className="relative w-full rounded-lg shadow-2xl border border-white/10"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white font-display text-4xl font-bold p-6 rounded-lg shadow-xl">
                        1974
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;