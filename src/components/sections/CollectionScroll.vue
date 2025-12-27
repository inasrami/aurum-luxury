<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let trackWidth = document.getElementById("h-track").scrollWidth;
  let windowWidth = window.innerWidth;

  gsap.to("#h-track", {
    x: () => -(trackWidth - windowWidth + 200),
    ease: "none",
    scrollTrigger: {
      trigger: "#h-scroll", pin: true, scrub: 1, end: "+=2000"
    }
  });
});
</script>

<template>
  <section id="h-scroll" class="h-screen w-full bg-void relative overflow-hidden flex items-center">
    <div class="absolute left-10 bottom-10 z-0">
       <h2 class="font-serif text-[20vw] leading-none text-white/5 whitespace-nowrap">COLLECTION</h2>
    </div>

    <div class="flex flex-nowrap gap-12 px-20 md:px-40 h-[60vh]" id="h-track">
      
      <div class="relative w-[80vw] md:w-[35vw] h-full flex-shrink-0 group overflow-hidden" data-cursor="hover">
        <img 
          src="/src/components/Images/01.webp" 
          class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out" 
          alt="Suite 1"
        >
        <div class="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
            <span class="font-sans text-xs tracking-widest text-gold mb-2 block">01</span>
            <h3 class="font-serif text-4xl text-white">The Onyx Suite</h3>
        </div>
      </div>

      <div class="relative w-[80vw] md:w-[35vw] h-full flex-shrink-0 group overflow-hidden" data-cursor="hover">
         <img 
          src="/src/components/Images/02.webp" 
          class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out" 
          alt="Suite 2"
        >
         <div class="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
            <span class="font-sans text-xs tracking-widest text-gold mb-2 block">02</span>
            <h3 class="font-serif text-4xl text-white">The Ivory Loft</h3>
        </div>
      </div>

       <div class="relative w-[80vw] md:w-[35vw] h-full flex-shrink-0 group overflow-hidden" data-cursor="hover">
         <img 
          src="/src/components/Images/03.webp" 
          class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out" 
          alt="Suite 3"
        >
         <div class="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
            <span class="font-sans text-xs tracking-widest text-gold mb-2 block">03</span>
            <h3 class="font-serif text-4xl text-white">Presidential Void</h3>
        </div>
      </div>
    </div>
  </section>
</template>