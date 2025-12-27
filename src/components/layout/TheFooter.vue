<template>
  <footer class="min-h-screen bg-[#E6E6E6] text-void relative z-30 flex flex-col justify-between px-6 md:px-20 py-20 overflow-hidden">
    <div class="flex items-start justify-between pb-8 border-b border-void/10">
        <span class="font-serif text-3xl">Aurum.</span>
        <div class="text-right">
            <p class="mb-2 font-sans text-xs tracking-widest">RESERVATIONS</p>
            <p class="font-serif text-xl">+359 00 000 0000</p>
        </div>
    </div>

  <div class="relative flex flex-col items-center justify-center my-20">
        <div class="absolute w-[40vw] h-[40vw] rounded-full border border-void/5 animate-spin-slow pointer-events-none"></div>
        <p class="font-sans text-sm tracking-[0.4em] mb-8 text-void/60">YOUR JOURNEY BEGINS</p>
        <h2 @click="$emit('open-booking')" class="font-serif text-[13vw] leading-[0.8] cursor-pointer hover:italic transition-all duration-500 relative group overflow-hidden" data-cursor="hover">
             <span class="inline-block transition-transform duration-700 group-hover:-translate-y-full">Reserve</span>
             <span class="absolute top-0 left-0 inline-block italic transition-transform duration-700 translate-y-full group-hover:translate-y-0 text-gold">Reserve</span>
        </h2>
    </div>

    <div class="flex flex-col md:flex-row justify-between items-end gap-10 font-sans text-[10px] tracking-[0.2em] text-void/60 uppercase">
        <div class="flex flex-col gap-2">
            <a href="#" class="transition-colors hover:text-void" data-cursor="hover">Instagram</a>
            <a href="#" class="transition-colors hover:text-void" data-cursor="hover">Twitter / X</a>
        </div>
        <div class="w-full text-right md:w-auto">
            &copy; 2025 AURUM<br>DESIGNED BY INAS RAMI
        </div>
    </div>
  </footer>
</template>