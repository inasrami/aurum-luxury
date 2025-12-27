<script setup>
import { onMounted } from 'vue';
import Lenis from '@studio-freight/lenis';

// UI
import NoiseOverlay from './components/ui/NoiseOverlay.vue';
import CustomCursor from './components/ui/CustomCursor.vue';
import ThePreloader from './components/ui/ThePreloader.vue';

// Layout
import TheNavigation from './components/layout/TheNavigation.vue';
import TheFooter from './components/layout/TheFooter.vue';


import HeroSection from './components/sections/HeroSection.vue';
import PhilosophySection from './components/sections/PhilosophySection.vue';
import CollectionScroll from './components/sections/CollectionScroll.vue';
import OfferingsSticky from './components/sections/OfferingsSticky.vue';

onMounted(() => {

  const lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});
</script>

<template>
  <main>
    <NoiseOverlay />
    <CustomCursor />
    <ThePreloader />
    
    <TheNavigation />
    
    <HeroSection />
    <PhilosophySection />
    <CollectionScroll />
    <OfferingsSticky />
    
    <TheFooter />
  </main>
</template>