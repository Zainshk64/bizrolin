const statsData = [
    { value: '50+', label: 'Years of Excellence' },
    { value: '45+', label: 'Countries' },
    { value: '15K+', label: 'Employees' },
    { value: '$10B+', label: 'Revenue' },
];

const Stats = () => {
    return (
        <section className="py-24 px-6 border-y border-white/5 bg-darker/30">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                {statsData.map((stat, i) => (
                    <div key={i} className="text-center reveal-up">
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500">{stat.value}</span>
                        </h3>
                        <p className="text-blue-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;