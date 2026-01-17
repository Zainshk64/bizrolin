import gsap from "gsap";
import { Toaster } from "./components/ui/toaster.jsx";
import { Toaster as Sonner } from "./components/ui/sonner.jsx";
import { TooltipProvider } from "./components/ui/tooltip.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { LoaderProvider, useLoader } from "./context/LoaderCont";
import { ReactLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initScrollAnimations } from "./lib/scrollAnime";
import { useEffect, useRef } from "react";

import Loader from "./components/MasterLoader";
import Cursor from "./components/Cursor";

import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function RouteWatcher({ lenisRef }) {
    const navigate = useNavigate();
    const { triggerTransition } = useLoader();

    useEffect(() => {
        let ctx = gsap.context(() => {
            initScrollAnimations();
        });

        // Refresh ScrollTrigger after a short delay to account for mobile images loading
        window.addEventListener('load', () => ScrollTrigger.refresh());

        return () => {
            ctx.revert(); // Clean up everything when component unmounts
            window.removeEventListener('load', () => ScrollTrigger.refresh());
        };
    }, []);

    useEffect(() => {
        //deploy
        // Intercept internal link clicks and start loader BEFORE navigation
        function onClick(e) {
            // only left clicks without modifier keys
            if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
            const anchor = e.target.closest && e.target.closest('a');
            if (!anchor) return;
            const href = anchor.getAttribute('href');
            const target = anchor.getAttribute('target');
            // ignore external links, anchors, downloads, or explicit targets
            if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#') || target === '_blank' || anchor.hasAttribute('download')) return;

            // prevent default navigation, trigger loader, then navigate
            e.preventDefault();
            triggerTransition(() => {
                navigate(href, { replace: false });
                lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
            });
        }

        document.addEventListener('click', onClick, true);
        return () => document.removeEventListener('click', onClick, true);
    }, [navigate, triggerTransition, lenisRef]);

    return null;
}

const App = () => {
    const lenisRef = useRef();
    useEffect(() => {
        const lenis = lenisRef.current?.lenis;
        if (!lenis) return;

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(time => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(lenis.raf);
        };
    }, []);


    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Sonner />
                <Router>
                    <LoaderProvider>
                        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }} ref={lenisRef}>
                            <RouteWatcher lenisRef={lenisRef} />
                            <Cursor />
                            <Loader />
                            <Routes>
                                <Route path="/" element={<><Home /></>} />
                                <Route path="/about" element={<><About /> </>} />
                                <Route path="/brands" element={<><Brands /> </>} />
                                <Route path="/contact" element={<><Contact /> </>} />
                                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                                <Route path="*" element={<><NotFound /> </>} />
                            </Routes>
                        </ReactLenis>
                    </LoaderProvider>
                </Router>
            </TooltipProvider>
        </QueryClientProvider>
    );
};

export default App;
