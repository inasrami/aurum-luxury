<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroVideoUrl from '@/components/Images/herovideo.webm'; 


gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(".hero-anim", {
    y: 0, stagger: 0.1, duration: 1.2, ease: "power3.out", delay: 2.5
  });
  gsap.to(".nav-enter", { opacity: 1, duration: 1, delay: 3 });


  gsap.to("#hero-bg", {
    yPercent: 20, ease: "none",
    scrollTrigger: {
      trigger: "#hero", start: "top top", end: "bottom top", scrub: true
    }
  });
});
</script>

<template>
  <section class="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center" id="hero">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-void/30 z-10"></div>
      
      <video 
        :src="heroVideoUrl" 
        class="w-full h-full object-cover opacity-80" 
        id="hero-bg"
        autoplay 
        muted 
        loop 
        playsinline
      ></video>
      
    </div>

    <div class="relative z-20 text-center mix-blend-overlay flex flex-col items-center">
      <div class="clip-text-container">
        <span class="font-sans text-xs md:text-sm tracking-[0.6em] text-gold mb-4 hero-anim clip-text">EST. 2025 • KYOTO</span>
      </div>
      <div class="clip-text-container">
        <h1 class="font-serif text-giant leading-[0.85] text-mist hero-anim clip-text">ETHEREAL</h1>
      </div>
      <div class="clip-text-container">
        <h1 class="font-serif text-5xl md:text-7xl italic text-mist hero-anim clip-text mt-4">Sanctuary</h1>
      </div>
    </div>
  </section>
</template>