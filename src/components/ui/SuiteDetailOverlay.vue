<script setup>
defineProps({
  suite: Object
});
defineEmits(['close']);
</script>

<template>
  <div class="fixed inset-0 z-[9000] bg-void/98 overflow-y-auto" v-if="suite">
    <button @click="$emit('close')" class="fixed z-50 p-4 font-sans text-xs tracking-widest top-10 right-10 text-mist hover:text-gold mix-blend-difference" data-cursor="hover">
        CLOSE
    </button>

    <div class="flex flex-col min-h-screen md:flex-row">
        <div class="w-full md:w-1/2 h-[50vh] md:h-auto relative">
            <img :src="suite.image" :alt="suite.title" class="object-cover w-full h-full grayscale">
            <div class="absolute inset-0 bg-gradient-to-t from-void to-transparent md:bg-gradient-to-r"></div>
        </div>

        <div class="flex flex-col justify-center w-full p-10 bg-gray-500/50 md:w-1/2 md:p-24 backdrop-blur-sm text-mist">
            <span class="text-gold font-sans text-xs tracking-[0.4em] mb-4">THE COLLECTION</span>
            <h2 class="mb-8 font-serif text-5xl md:text-7xl">{{ suite.title }}</h2>
            <p class="max-w-md mb-10 font-sans font-light leading-loose text-white/60">
                Experience the pinnacle of silence and design. This suite features floor-to-ceiling soundproof glass, offering an unmediated connection to the Kyoto skyline while maintaining absolute tranquility.
            </p>
            
            <div class="grid grid-cols-2 gap-8 mb-12">
                <div>
                    <h4 class="mb-2 font-serif text-xl text-white">Amenities</h4>
                    <ul class="space-y-2 font-sans text-xs text-white/50">
                        <li>Private Thermal Pool</li>
                        <li>24h Butler Service</li>
                        <li>Acoustic Isolation</li>
                    </ul>
                </div>
                 <div>
                    <h4 class="mb-2 font-serif text-xl text-white">Details</h4>
                    <ul class="space-y-2 font-sans text-xs text-white/50">
                        <li>120 sqm</li>
                        <li>King Size</li>
                        <li>City View</li>
                    </ul>
                </div>
            </div>

            <button class="pb-1 font-sans text-xs tracking-widest transition-colors border-b w-fit border-gold text-gold hover:text-white hover:border-white" data-cursor="hover">
                BOOK THIS SUITE
            </button>
        </div>
    </div>
  </div>
</template>