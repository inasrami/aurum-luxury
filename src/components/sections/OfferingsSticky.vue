<template>
  <section class="bg-void text-mist relative">
    <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 flex flex-col justify-center px-10 md:px-24 bg-void z-20 border-r border-white/5">
            <span class="text-gold text-[10px] tracking-[0.3em] font-sans mb-6">GASTRONOMY & WELLNESS</span>
            <h2 class="font-serif text-5xl md:text-7xl mb-8 leading-tight">Curated <br><span class="italic text-gray-500">Indulgence</span></h2>
            <p class="font-sans text-gray-400 font-light leading-loose max-w-sm">
                From Omakase dining prepared by Michelin-starred chefs to thermal pools carved from volcanic stone. Every detail is a sensory meditation.
            </p>
        </div>

        <div class="w-full md:w-1/2 bg-charcoal">
            
            <div class="h-[80vh] w-full relative group overflow-hidden">
                <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                
                <img src="/src/components/Images/dining.webp" class="w-full h-full object-cover" alt="Dining">
                
                <div class="absolute bottom-10 left-10 z-20">
                    <h3 class="font-serif text-3xl italic">The Table</h3>
                    <span class="font-sans text-[10px] tracking-widest mt-2 block">OMAKASE</span>
                </div>
            </div>

            <div class="h-[80vh] w-full relative group overflow-hidden">
                <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                
                <img src="/src/components/Images/spa.webp" class="w-full h-full object-cover" alt="Spa">
                
                <div class="absolute bottom-10 left-10 z-20">
                    <h3 class="font-serif text-3xl italic">The Springs</h3>
                    <span class="font-sans text-[10px] tracking-widest mt-2 block">THERMAL WELLNESS</span>
                </div>
            </div>

            <div class="h-[80vh] w-full relative group overflow-hidden">
                 <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                 
                <img src="/src/components/Images/library.webp" class="w-full h-full object-cover" alt="Library">
                
                <div class="absolute bottom-10 left-10 z-20">
                    <h3 class="font-serif text-3xl italic">The Archive</h3>
                    <span class="font-sans text-[10px] tracking-widest mt-2 block">RARE BOOKS & SPIRITS</span>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>