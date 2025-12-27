<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

const emit = defineEmits(['complete']);

onMounted(() => {
  const tl = gsap.timeline({
    onComplete: () => emit('complete')
  });

  tl.to(".preloader-char", {
      y: 0, duration: 1, stagger: 0.1, ease: "power3.out"
  })
  .to("#loader-line", { scaleX: 1, duration: 1, ease: "expo.out" }, "-=0.5")
  .to("#preloader", { yPercent: -100, duration: 1.2, ease: "power4.inOut", delay: 0.5 });
});
</script>

<template>
  <div id="preloader" class="fixed top-0 left-0 w-full h-screen bg-void z-[10000] flex justify-center items-center">
    <div class="z-10 flex flex-col items-center">
      <h1 class="font-serif text-6xl text-mist overflow-hidden h-16 flex">
        <span class="preloader-char inline-block translate-y-full">A</span>
        <span class="preloader-char inline-block translate-y-full">U</span>
        <span class="preloader-char inline-block translate-y-full">R</span>
        <span class="preloader-char inline-block translate-y-full">U</span>
        <span class="preloader-char inline-block translate-y-full">M</span>
      </h1>
      <div class="w-full h-[1px] bg-white/20 mt-4 scale-x-0 origin-left" id="loader-line"></div>
    </div>
  </div>
</template>