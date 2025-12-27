<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const text = "We believe luxury is the absence of noise. In a world of constant demand, Aurum offers the rarest commodity: stillness. Designed by masters of minimalism, our spaces are not merely for sleeping, but for the recalibration of the soul.";
const words = text.split(" ");

onMounted(() => {
  gsap.to(".word-span", {
    opacity: 1, stagger: 0.1, ease: "none",
    scrollTrigger: {
      trigger: "#philosophy-text", start: "top 80%", end: "bottom 50%", scrub: 1
    }
  });
});
</script>

<template>
  <section class="py-40 px-6 md:px-32 bg-void relative z-10 flex flex-col md:flex-row gap-20">
    <div class="w-full md:w-1/3 pt-4">
      <span class="text-gold text-[10px] tracking-[0.3em] font-sans border-b border-gold/30 pb-2">THE PHILOSOPHY</span>
    </div>
    <div class="w-full md:w-2/3">
      <p class="font-serif text-3xl md:text-5xl leading-[1.4] text-mist" id="philosophy-text">
        <span v-for="(word, index) in words" :key="index" class="word-span opacity-20 transition-opacity duration-300">
          {{ word }}&nbsp;
        </span>
      </p>
    </div>
  </section>
</template>