<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  // Animates opacity from 0 to 1 when the component loads
  gsap.to("nav", { 
    opacity: 1, 
    duration: 1.5, 
    ease: "power2.out",
    delay: 0.5 
  });
});
</script>

<template>
  <nav class="fixed top-0 w-full p-8 md:p-12 flex justify-between items-start z-[100] mix-blend-difference text-mist opacity-0">
    
    <div 
        class="flex flex-col gap-1 p-4 -m-4 cursor-pointer group" 
        id="menu-btn" 
        data-cursor="hover" 
        @click="$emit('toggle-menu')"
    >
        <div class="w-8 h-[1px] bg-current transition-all group-hover:w-12"></div>
        <div class="w-8 h-[1px] bg-current transition-all group-hover:w-6"></div>
    </div>
    
    <router-link 
        to="/" 
        class="absolute font-serif text-2xl tracking-widest transition-colors -translate-x-1/2 left-1/2 hover:text-gold" 
        data-cursor="hover"
    >
        AURUM.
    </router-link>

    <div class="flex gap-8 font-sans text-[10px] tracking-[0.25em]">
        <router-link to="/collection" class="hidden transition-colors hover:text-gold md:block" data-cursor="hover">
            SUITES
        </router-link>
        <a href="#" @click.prevent="$emit('toggle-booking')" class="transition-colors hover:text-gold" data-cursor="hover">
            BOOKING
        </a>
    </div>
  </nav>
</template>