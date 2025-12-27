<script setup>
defineProps({
  isOpen: Boolean
});

defineEmits(['close', 'open-booking']);
</script>

<template>
  <div class="fixed inset-0 z-[9000] flex justify-end pointer-events-none">
    
    <Transition 
        enter-active-class="transition duration-500 ease-out" 
        enter-from-class="opacity-0" 
        enter-to-class="opacity-100" 
        leave-active-class="transition duration-500 ease-in" 
        leave-from-class="opacity-100" 
        leave-to-class="opacity-0"
    >
        <div v-if="isOpen" @click="$emit('close')" class="absolute inset-0 bg-black/60 backdrop-blur-[2px] pointer-events-auto"></div>
    </Transition>

    <Transition 
        enter-active-class="transition transform duration-700 cubic-bezier(0.22, 1, 0.36, 1)" 
        enter-from-class="translate-x-full" 
        enter-to-class="translate-x-0" 
        leave-active-class="transition duration-500 ease-in transform" 
        leave-from-class="translate-x-0" 
        leave-to-class="translate-x-full"
    >
        <div v-if="isOpen" class="relative w-full md:w-[480px] h-full bg-[#0a0a0a] border-l border-white/5 flex flex-col p-12 md:p-16 pointer-events-auto shadow-2xl shadow-black">
            
            <div class="flex items-center justify-between mb-20">
                <span class="font-serif text-2xl text-mist">Aurum.</span>
                <button @click="$emit('close')" class="group flex flex-col gap-1.5 w-8 hover:opacity-50 transition-opacity" data-cursor="hover">
                    <span class="w-full h-[1px] bg-mist rotate-45 translate-y-[3px]"></span>
                    <span class="w-full h-[1px] bg-mist -rotate-45 -translate-y-[3px]"></span>
                </button>
            </div>

            <nav class="flex flex-col flex-1 gap-8">
                <router-link to="/" @click="$emit('close')" class="flex items-baseline gap-6 transition-colors group text-mist hover:text-gold" data-cursor="hover">
                    <span class="font-sans text-[10px] text-white/30 group-hover:text-gold/50 transition-colors">01</span>
                    <span class="font-serif text-4xl italic">Home</span>
                </router-link>
                
                <router-link :to="{ path: '/', hash: '#philosophy-text' }" @click="$emit('close')" class="flex items-baseline gap-6 transition-colors group text-mist hover:text-gold" data-cursor="hover">
                    <span class="font-sans text-[10px] text-white/30 group-hover:text-gold/50 transition-colors">02</span>
                    <span class="font-serif text-4xl italic">Philosophy</span>
                </router-link>

                <router-link to="/collection" @click="$emit('close')" class="flex items-baseline gap-6 transition-colors group text-mist hover:text-gold" data-cursor="hover">
                    <span class="font-sans text-[10px] text-white/30 group-hover:text-gold/50 transition-colors">03</span>
                    <span class="font-serif text-4xl italic">The Collection</span>
                </router-link>

                <router-link to="/dining" @click="$emit('close')" class="flex items-baseline gap-6 transition-colors group text-mist hover:text-gold" data-cursor="hover">
                    <span class="font-sans text-[10px] text-white/30 group-hover:text-gold/50 transition-colors">04</span>
                    <span class="font-serif text-4xl italic">Dining</span>
                </router-link>

                 <router-link to="/wellness" @click="$emit('close')" class="flex items-baseline gap-6 transition-colors group text-mist hover:text-gold" data-cursor="hover">
                    <span class="font-sans text-[10px] text-white/30 group-hover:text-gold/50 transition-colors">05</span>
                    <span class="font-serif text-4xl italic">Wellness</span>
                </router-link>
            </nav>

            <div class="pt-10 mt-auto border-t border-white/10">
                <button @click="$emit('open-booking'); $emit('close')" class="w-full py-4 border border-gold text-gold font-sans text-xs tracking-[0.2em] hover:bg-gold hover:text-void transition-all duration-300" data-cursor="hover">
                    RESERVE YOUR STAY
                </button>
            </div>

        </div>
    </Transition>
  </div>
</template>