<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

const cursor = ref(null);

const moveCursor = (e) => {
  gsap.to(cursor.value, { x: e.clientX, y: e.clientY, duration: 0.1 });
};

const handleHover = () => cursor.value?.classList.add('hovered');
const handleLeave = () => cursor.value?.classList.remove('hovered');

onMounted(() => {
  window.addEventListener('mousemove', moveCursor);

  document.body.addEventListener('mouseover', (e) => {
    if (e.target.closest('[data-cursor="hover"]') || e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
      handleHover();
    }
  });
  document.body.addEventListener('mouseout', (e) => {
    if (e.target.closest('[data-cursor="hover"]') || e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
      handleLeave();
    }
  });
});

onUnmounted(() => window.removeEventListener('mousemove', moveCursor));
</script>

<template>
  <div ref="cursor" id="cursor"></div>
</template>

<style scoped>
#cursor {
  position: fixed; top: 0; left: 0;
  width: 12px; height: 12px;
  background: #D4AF37; border-radius: 50%;
  pointer-events: none; z-index: 9999;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  transition: transform 0.2s ease, width 0.3s, height 0.3s;
}
#cursor.hovered {
  transform: translate(-50%, -50%) scale(4);
  background: #E6E6E6;
  mix-blend-mode: normal;
  opacity: 0.2;
}
</style>