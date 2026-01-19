import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoader } from '../context/LoaderCont';

const HomeLoader = () => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 5); // Speed of the counter
        return () => clearInterval(interval);
    }, []);

    const letters = "BIZROLIN".split("");

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: percent === 100 ? 0 : 1 }}
            transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.5
            }}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 100000,
                backgroundColor: '#030712',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                overflow: 'hidden',
                width: '100%',
                height: '100%'
            }}
            exit={{ opacity: 0 }}
        >
            {/* Background Radial Glows */}
            <div style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(ellipse at 30% 20%, rgba(59,130,246,0.08) 0%, transparent 50%)'
                }} />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(ellipse at 70% 80%, rgba(20,184,166,0.05) 0%, transparent 50%)'
                }} />
            </div>

            <div style={{
                position: 'relative',
                zIndex: 10,
                width: '100%',
                height: '100vh',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.40rem'
            }}>
                {/* Logo Animation */}
                <motion.div
                    initial={{ y: "120%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    style={{
                        filter: 'drop-shadow(0 0 40px rgba(59,130,246,0.5))'
                    }}
                >
                    <img src="/logonew.png" alt="Bizrolin Logo" style={{
                        maxWidth: '300px',
                        width: '80vw',
                        height: 'auto'
                    }} />
                </motion.div>

                {/* Progress UI */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.25rem',
                    width: '100%',
                    maxWidth: '288px',
                    margin: '0 auto 4rem'
                }}>
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'rgba(59,130,246,0.1)',
                        borderRadius: '9999px',
                        overflow: 'hidden'
                    }}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percent}%` }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                background: 'linear-gradient(to right, #3B82F6, #14B8A6)',
                                boxShadow: '0 0 20px rgba(59,130,246,0.5)'
                            }}
                        />
                    </div>
                    <div style={{
                        fontSize: '5rem',
                        fontWeight: '100',
                        color: 'white',
                        fontFamily: 'Georgia, serif',
                        filter: 'drop-shadow(0 0 60px rgba(59,130,246,0.3))'
                    }}>
                        {percent}%
                    </div>
                    <div style={{
                        fontSize: '0.375rem',
                        letterSpacing: '6px',
                        textTransform: 'uppercase',
                        color: '#cbd5e1',
                        fontWeight: '500'
                    }}>
                        Loading Experience
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const TransitionLoader = () => {
    // Exact colors from your CSS variables
    const colors = [
        "bg-[#3B82F6]",
        "bg-[#2563EB]",
        "bg-[#1D4ED8]",
        "bg-[#1E40AF]",
        "bg-[#1E3A8A]",
    ];

    return (
        <motion.div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999999,
                top: 0,
                pointerEvents: 'none',
                display: 'flex',
                width: '100%',
                height: '100%'
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >

            {colors.map((color, i) => (
                <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: [0, 1, 1, 0] }}
                    exit={{ scaleY: 0 }}
                    transition={{
                        duration: 1.2,
                        times: [0, 0.4, 0.6, 1],
                        delay: i * 0.08,
                        ease: [0.645, 0.045, 0.355, 1]
                    }}

                    style={{
                        transformOrigin: i % 2 === 0 ? 'top' : 'bottom',
                        flex: 1,
                        backgroundColor: color.replace('bg-[', '').replace(']', ''),
                        height: '100%'
                    }}
                />
            ))}

            {/* Top progress line during transition */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 1] }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#06B6D4',
                    zIndex: 100000,
                    transformOrigin: 'left'
                }}
            />
        </motion.div>
    );
};

const MasterLoader = () => {
    const { isLoading, isInitialLoad } = useLoader();

    return (
        <AnimatePresence mode="wait" style={{ maxWidth: '100vw', height: '100vh' }}>
            {isLoading && (
                isInitialLoad ? (
                    <>

                        <HomeLoader key="initial" />
                    </>
                ) : (
                    <>
                        {/* <p>Transition</p> */}
                        <TransitionLoader key="nav" />
                    </>
                )
            )}
        </AnimatePresence>
    );
};

export default MasterLoader;