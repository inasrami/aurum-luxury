<template>
  <nav class="fixed top-0 w-full p-8 md:p-12 flex justify-between items-start z-50 mix-blend-difference text-mist opacity-0 nav-enter">
    <div class="flex flex-col gap-1 group cursor-pointer" id="menu-btn" data-cursor="hover">
        <div class="w-8 h-[1px] bg-current transition-all group-hover:w-12"></div>
        <div class="w-8 h-[1px] bg-current transition-all group-hover:w-6"></div>
    </div>
    
    <a href="#" class="font-serif text-2xl tracking-widest hover:text-gold transition-colors" data-cursor="hover">AURUM.</a>

    <div class="flex gap-8 font-sans text-[10px] tracking-[0.25em]">
        <a href="#" class="hover:text-gold transition-colors hidden md:block" data-cursor="hover">SUITES</a>
        <a href="#" class="hover:text-gold transition-colors" data-cursor="hover">BOOKING</a>
    </div>
  </nav>
</template>