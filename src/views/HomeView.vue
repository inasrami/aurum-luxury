<script setup>
import HeroSection from '@/components/sections/HeroSection.vue';
import PhilosophySection from '@/components/sections/PhilosophySection.vue';
import CollectionScroll from '@/components/sections/CollectionScroll.vue';
import OfferingsSticky from '@/components/sections/OfferingsSticky.vue';


const emit = defineEmits(['open-suite']);
</script>

<template>
  <div>
    <HeroSection />
    <PhilosophySection />
    <CollectionScroll @open-suite="$emit('open-suite', $event)" />
    <OfferingsSticky />
  </div>
</template>