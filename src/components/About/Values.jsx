import { Target, Lightbulb, Star, Globe, Users, Handshake } from 'lucide-react';

const valuesData = [
    { icon: Target, title: 'Integrity', desc: "We do what's right, even when no one is watching. Honesty and transparency are the foundation." },
    { icon: Lightbulb, title: 'Innovation', desc: "We constantly push boundaries and challenge the status quo to find better solutions." },
    { icon: Star, title: 'Excellence', desc: "We strive for the highest standards in everything we do, never settling for less." },
    { icon: Globe, title: 'Sustainability', desc: "We're committed to creating value that lasts, protecting our planet for future generations." },
    { icon: Users, title: 'People First', desc: "Our people are our greatest asset. We invest in their growth and create an environment to thrive." },
    { icon: Handshake, title: 'Collaboration', desc: "We believe in the power of working together, both within our organization and with partners." },
];

const Values = () => {
    return (
        <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 reveal-up">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Our <span className="text-gradient">Values</span>
                    </h2>
                    <p className="text-slate-400 text-lg">The principles that guide every decision we make</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 values-grid">
                    {valuesData.map((item, index) => (
                        <div key={index} className="value-card glass-panel rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-500 group">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 shadow-lg shadow-blue-900/20">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;