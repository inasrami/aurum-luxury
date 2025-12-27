<script setup>
import { onMounted, ref } from 'vue';
import { RouterView, useRoute } from 'vue-router'; 
import Lenis from '@studio-freight/lenis';

import NoiseOverlay from './components/ui/NoiseOverlay.vue';
import CustomCursor from './components/ui/CustomCursor.vue';
import ThePreloader from './components/ui/ThePreloader.vue';
import MenuOverlay from './components/ui/MenuOverlay.vue';
import BookingOverlay from './components/ui/BookingOverlay.vue';
import SuiteDetailOverlay from './components/ui/SuiteDetailOverlay.vue';

import TheNavigation from './components/layout/TheNavigation.vue';
import TheFooter from './components/layout/TheFooter.vue';


const isMenuOpen = ref(false);
const isBookingOpen = ref(false);
const activeSuite = ref(null);
let lenis = null;

onMounted(() => {
  lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});


const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;
const openBooking = () => isBookingOpen.value = true;
const closeBooking = () => isBookingOpen.value = false;
const openSuite = (suiteData) => activeSuite.value = suiteData;
const closeSuite = () => activeSuite.value = null;

const handleNav = (path) => {
    if (path.startsWith('#')) {
        const el = document.querySelector(path);
        if(el) lenis?.scrollTo(el);
    } 
    else {

    }
}
</script>

<template>
  <main>
    <NoiseOverlay />
    <CustomCursor />
    <ThePreloader />
    
    <MenuOverlay 
      :is-open="isMenuOpen" 
      @close="isMenuOpen = false" 
      @navigate="handleNav" 
      @open-booking="openBooking" 
    />

    <Transition enter-active-class="duration-500 ease-out" enter-from-class="translate-y-10 opacity-0" enter-to-class="translate-y-0 opacity-100" leave-active-class="duration-300 ease-in" leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-10 opacity-0">
         <BookingOverlay v-if="isBookingOpen" @close="closeBooking" />
    </Transition>

    <Transition enter-active-class="duration-700 ease-out" enter-from-class="scale-95 opacity-0" enter-to-class="scale-100 opacity-100" leave-active-class="duration-300 ease-in" leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
        <SuiteDetailOverlay v-if="activeSuite" :suite="activeSuite" @close="closeSuite" />
    </Transition>

    <TheNavigation @toggle-menu="toggleMenu" @toggle-booking="openBooking" />
    
    <RouterView v-slot="{ Component }">
        <Transition enter-active-class="duration-700 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="duration-300 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <component :is="Component" @open-suite="openSuite" />
        </Transition>
    </RouterView>
    
    <TheFooter @open-booking="openBooking" />
  </main>
</template>