<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {

    gsap.to(".spa-hero-img", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
            trigger: ".spa-hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });


    gsap.from(".spa-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".spa-content",
            start: "top 80%"
        }
    });
});
</script>

<template>
  <div class="w-full pt-32 pb-20 bg-void text-mist">
      
      <section class="spa-hero relative w-full h-[60vh] md:h-[80vh] overflow-hidden flex items-center justify-center px-8">
          <img src="/src/components/Images/spa.webp" class="spa-hero-img absolute inset-0 w-full h-[120%] object-cover opacity-40 grayscale" alt="Wellness">
          <div class="relative z-10 text-center">
              <span class="block font-sans text-xs tracking-[0.4em] text-gold mb-6">SANCTUARY</span>
              <h1 class="font-serif text-6xl italic md:text-8xl">The Aurum Spa</h1>
          </div>
      </section>

      <section class="container max-w-5xl px-8 py-24 mx-auto spa-content md:py-32">
          <div class="flex flex-col items-start gap-16 md:flex-row md:gap-32">
              <div class="md:w-1/3">
                   <h2 class="mb-8 font-serif text-4xl spa-text">Alchemy for the Body</h2>
                   <div class="w-12 h-[1px] bg-gold spa-text"></div>
              </div>
              <div class="md:w-2/3">
                  <p class="mb-10 font-sans text-lg font-light leading-loose spa-text text-mist/80">
                      Our wellness philosophy is rooted in the ancient practice of transmutation. We do not simply relax the body; we transform the state of mind. Through the use of thermal waters, acoustic isolation, and precious mineral treatments, we restore your golden balance.
                  </p>
                  
                  <div class="flex flex-col gap-8 mt-16">
                      <div class="flex items-end justify-between pb-4 transition-colors border-b cursor-pointer spa-text group border-white/10 hover:border-gold">
                          <div>
                              <h3 class="font-serif text-2xl transition-colors group-hover:text-gold">The Gold Ritual</h3>
                              <span class="block mt-1 font-sans text-xs text-mist/50">Full body exfoliation & 24k oil massage</span>
                          </div>
                          <span class="font-sans text-xs tracking-widest">$350</span>
                      </div>

                      <div class="flex items-end justify-between pb-4 transition-colors border-b cursor-pointer spa-text group border-white/10 hover:border-gold">
                          <div>
                              <h3 class="font-serif text-2xl transition-colors group-hover:text-gold">Void Deprivation</h3>
                              <span class="block mt-1 font-sans text-xs text-mist/50">90min Sensory Deprivation Tank</span>
                          </div>
                          <span class="font-sans text-xs tracking-widest">$180</span>
                      </div>

                       <div class="flex items-end justify-between pb-4 transition-colors border-b cursor-pointer spa-text group border-white/10 hover:border-gold">
                          <div>
                              <h3 class="font-serif text-2xl transition-colors group-hover:text-gold">Thermal Cycle</h3>
                              <span class="block mt-1 font-sans text-xs text-mist/50">Sauna, Cold Plunge, Steam Room Access</span>
                          </div>
                          <span class="font-sans text-xs tracking-widest">$90</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </div>
</template>