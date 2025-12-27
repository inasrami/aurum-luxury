<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const emit = defineEmits(['open-suite']);


const selectSuite = (title, image) => {
    emit('open-suite', { title, image });
};


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
  <section id="h-scroll" class="relative flex items-center w-full h-screen overflow-hidden bg-void">
    <div class="absolute z-0 left-10 bottom-10">
       <h2 class="font-serif text-[20vw] leading-none text-white/5 whitespace-nowrap">COLLECTION</h2>
    </div>

    <div class="flex flex-nowrap gap-12 px-20 md:px-40 h-[60vh]" id="h-track">
      
      <div @click="selectSuite('The Onyx Suite', '/src/components/Images/01.webp')" class="relative w-[80vw] md:w-[35vw] h-full flex-shrink-0 group overflow-hidden cursor-pointer" data-cursor="hover">
        <img 
          src="/src/components/Images/01.webp" 
          class="object-cover w-full h-full transition-all duration-1000 ease-out grayscale group-hover:grayscale-0 group-hover:scale-110" 
          alt="Suite 1"
        >
        <div class="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
            <span class="block mb-2 font-sans text-xs tracking-widest text-gold">01</span>
            <h3 class="font-serif text-4xl text-white">The Onyx Suite</h3>
        </div>
      </div>

      <div @click="selectSuite('The Ivory Loft', '/src/components/Images/02.webp')" class="relative w-[80vw] md:w-[35vw] h-full flex-shrink-0 group overflow-hidden cursor-pointer" data-cursor="hover">
         <img 
          src="/src/components/Images/02.webp" 
          class="object-cover w-full h-full transition-all duration-1000 ease-out grayscale group-hover:grayscale-0 group-hover:scale-110" 
          alt="Suite 2"
        >
         <div class="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
            <span class="block mb-2 font-sans text-xs tracking-widest text-gold">02</span>
            <h3 class="font-serif text-4xl text-white">The Ivory Loft</h3>
        </div>
      </div>

       <div @click="selectSuite('Presidential Void', '/src/components/Images/03.webp')" class="relative w-[80vw] md:w-[35vw] h-full flex-shrink-0 group overflow-hidden cursor-pointer" data-cursor="hover">
         <img 
          src="/src/components/Images/03.webp" 
          class="object-cover w-full h-full transition-all duration-1000 ease-out grayscale group-hover:grayscale-0 group-hover:scale-110" 
          alt="Suite 3"
        >
         <div class="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
            <span class="block mb-2 font-sans text-xs tracking-widest text-gold">03</span>
            <h3 class="font-serif text-4xl text-white">Presidential Void</h3>
        </div>
      </div>
    </div>
  </section>
</template>