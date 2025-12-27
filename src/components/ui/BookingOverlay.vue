<script setup>
import { ref } from 'vue';

const emit = defineEmits(['close']);

const checkIn = ref('');
const checkOut = ref('');
const guests = ref(1);

const handleSearch = () => {
    alert("This is a demo booking experience. Redirecting to booking engine...");
    emit('close');
};
</script>

<template>
  <div class="fixed inset-0 z-[9000] bg-void flex justify-center items-center px-4">
    <button @click="$emit('close')" class="absolute p-4 font-sans text-xs tracking-widest top-10 right-10 text-mist hover:text-gold" data-cursor="hover">
        CLOSE
    </button>

    <div class="relative w-full max-w-4xl p-8 border border-white/10 md:p-16 bg-charcoal/30 backdrop-blur-md">
        <span class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-void px-4 text-gold font-sans text-xs tracking-[0.3em]">RESERVATION</span>
        
        <h2 class="mb-12 font-serif text-4xl italic text-center md:text-5xl text-mist">Secure Your Sanctuary</h2>

        <form @submit.prevent="handleSearch" class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div class="flex flex-col gap-2">
                <label class="font-sans text-[10px] tracking-widest text-mist/60">CHECK-IN</label>
                <input type="date" v-model="checkIn" class="py-2 font-serif text-xl bg-transparent border-b outline-none border-white/20 text-mist focus:border-gold" data-cursor="hover">
            </div>

            <div class="flex flex-col gap-2">
                <label class="font-sans text-[10px] tracking-widest text-mist/60">CHECK-OUT</label>
                <input type="date" v-model="checkOut" class="py-2 font-serif text-xl bg-transparent border-b outline-none border-white/20 text-mist focus:border-gold" data-cursor="hover">
            </div>

            <div class="flex flex-col gap-2">
                 <label class="font-sans text-[10px] tracking-widest text-mist/60">GUESTS</label>
                 <select v-model="guests" class="py-2 font-serif text-xl bg-transparent border-b rounded-none outline-none appearance-none border-white/20 text-mist focus:border-gold" data-cursor="hover">
                    <option value="1" class="bg-void">1 Guest</option>
                    <option value="2" class="bg-void">2 Guests</option>
                    <option value="3" class="bg-void">3 Guests</option>
                 </select>
            </div>

            <div class="flex justify-center mt-8 md:col-span-3">
                <button type="submit" class="border border-gold text-gold px-12 py-4 font-sans text-xs tracking-[0.2em] hover:bg-gold hover:text-void transition-all duration-500" data-cursor="hover">
                    CHECK AVAILABILITY
                </button>
            </div>
        </form>
    </div>
  </div>
</template>