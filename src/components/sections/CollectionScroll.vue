<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 1. IMPORT YOUR IMAGES HERE
// This tells Vite to bundle these files and gives you the correct final URL
import img1 from '@/components/Images/01.webp';
import img2 from '@/components/Images/02.webp';
import img3 from '@/components/Images/03.webp';

gsap.registerPlugin(ScrollTrigger);

const emit = defineEmits(['open-suite']);

const selectSuite = (title, image) => {
  emit('open-suite', { title, image });
};

// 2. ASSIGN THE IMPORTED IMAGES TO YOUR DATA
const suites = [
  { 
    id: 1, 
    title: 'The Onyx Suite', 
    price: '$800', 
    image: img1, // Use the variable, not the string path
    desc: 'Dark stone aesthetics with panoramic city views.' 
  },
  { 
    id: 2, 
    title: 'The Ivory Loft', 
    price: '$1,200', 
    image: img2, 
    desc: 'Bright, airy, and soundproofed for absolute silence.' 
  },
  { 
    id: 3, 
    title: 'Presidential Void', 
    price: '$2,500', 
    image: img3, 
    desc: 'The ultimate luxury. 200sqm of pure stillness.' 
  },
];

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
      
      <div 
        v-for="suite in suites" 
        :key="suite.id"
        @click="selectSuite(suite.title, suite.image)" 
        class="relative w-[80vw] md:w-[35vw] h-full flex-shrink-0 group overflow-hidden cursor-pointer" 
        data-cursor="hover"
      >
        <img 
          :src="suite.image" 
          class="object-cover w-full h-full transition-all duration-1000 ease-out grayscale group-hover:grayscale-0 group-hover:scale-110" 
          :alt="suite.title"
        >
        <div class="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
            <span class="block mb-2 font-sans text-xs tracking-widest text-gold">0{{ suite.id }}</span>
            <h3 class="font-serif text-4xl text-white">{{ suite.title }}</h3>
        </div>
      </div>

    </div>
  </section>
</template>
