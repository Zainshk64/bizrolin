// src/components/ChairmanQuote.jsx

import { useEffect } from "react";
import { initScrollAnimations } from "../lib/scrollAnime";

const ChairmanQuote = () => {
  useEffect(() => {
    // Initialize reveal animations
    initScrollAnimations();
  }, []);
  return (
    <section className="py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 ">
      <div className="max-w-6xl mx-auto reveal-up">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-20 items-center">
          {/* Image - Now visible on all screens */}
          <div className="relative flex-shrink-0 w-full sm:w-80 lg:w-[350px]">
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] sm:aspect-auto sm:h-[400px] lg:h-[450px]">
              <img
                src="./founder-image.jpeg"
                className="absolute inset-0 w-full h-full object-cover object-top"
                alt="Chairman"
              />
              {/* Overlay gradient for better text contrast on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
            </div>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-teal-light/10 rounded-3xl blur-2xl -z-10" />

            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-20 h-20 border border-primary-500/20 rounded-full hidden lg:block" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border border-teal-light/20 rounded-full hidden lg:block" />
          </div>

          {/* Quote Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-primary-500/10 leading-none mb-0 select-none">
              "
            </div>
            <blockquote className="font-serif text-xl sm:text-2xl md:text-2xl lg:text-3xl text-white leading-relaxed mb-6 lg:mb-8 -mt-8 sm:-mt-10 lg:-mt-12 px-2 sm:px-0">
              We built this company to connect exceptional Pakistani talent with
              global companies that value skill over location. Through a trusted
              and focused recruitment approach, we help businesses build strong
              teams and professionals access meaningful global
              opportunities.{" "}
            </blockquote>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-teal-light rounded-full hidden sm:block" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-">
                  Zohaib Ejaz
                </h3>
                <p className="text-slate-400 text-sm">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanQuote;
