import React, { createContext, useContext, useState, useEffect } from 'react';

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const triggerTransition = (onTransitionMidPoint) => {
        setIsLoading(true);

        // Execute callback at the middle of the animation
        setTimeout(() => {
            if (onTransitionMidPoint) {
                onTransitionMidPoint();
            }
        }, 600); // Half of the 1.2s animation

        // Hide loader after the full animation duration
        setTimeout(() => {
            setIsLoading(false);
            setIsInitialLoad(false);
        }, 1200);
    };

    useEffect(() => {
        // Initial site entry timer
        const timer = setTimeout(() => {
            setIsLoading(false);
            setIsInitialLoad(false);
        }, 3000); // Home loader stays a bit longer for the 0-100% effect
        return () => clearTimeout(timer);
    }, []);

    return (
        <LoaderContext.Provider value={{ isLoading, isInitialLoad, triggerTransition }}>
            {children}
        </LoaderContext.Provider>
    );
};

export const useLoader = () => useContext(LoaderContext);