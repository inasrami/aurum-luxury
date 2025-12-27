<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';


const suites = [
  { id: 1, title: 'The Onyx Suite', price: '$800', image: '/src/components/Images/01.webp', desc: 'Dark stone aesthetics with panoramic city views.' },
  { id: 2, title: 'The Ivory Loft', price: '$1,200', image: '/src/components/Images/02.webp', desc: 'Bright, airy, and soundproofed for absolute silence.' },
  { id: 3, title: 'Presidential Void', price: '$2,500', image: '/src/components/Images/03.webp', desc: 'The ultimate luxury. 200sqm of pure stillness.' },
];

onMounted(() => {
    gsap.from(".collection-item", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });
});
</script>

<template>
  <div class="min-h-screen px-8 pt-32 pb-20 bg-void md:px-20 text-mist">
    
    <header class="mb-24 text-center">
        <span class="font-sans text-xs tracking-[0.4em] text-gold mb-6 block">ACCOMMODATION</span>
        <h1 class="font-serif text-5xl italic md:text-7xl">The Collection</h1>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        <div v-for="suite in suites" :key="suite.id" class="cursor-pointer collection-item group" @click="$emit('open-suite', suite)">
            <div class="relative mb-6 overflow-hidden">
                <img :src="suite.image" :alt="suite.title" class="w-full h-[60vh] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out">
                <div class="absolute inset-0 transition-colors bg-black/20 group-hover:bg-transparent"></div>
            </div>
            
            <div class="flex items-baseline justify-between pb-4 transition-colors border-b border-white/10 group-hover:border-gold">
                <h2 class="font-serif text-3xl transition-colors group-hover:text-gold">{{ suite.title }}</h2>
                <span class="font-sans text-xs tracking-widest opacity-60">{{ suite.price }} / NIGHT</span>
            </div>
            <p class="mt-4 font-sans text-sm font-light leading-relaxed opacity-50">{{ suite.desc }}</p>
        </div>
    </div>

  </div>
</template>