# Aurum Luxury - Ethereal Sanctuary

<div align="center">
  <img src="public/vite.svg" alt="Aurum Logo" width="100" />
  <br />
  <p><i>"Luxury is the absence of noise."</i></p>
  <p>An immersive, high-end web experience for a fictional luxury sanctuary in Kyoto.</p>
</div>

---

## ✦ About The Project

**Aurum Luxury** is a concept website for an exclusive resort focused on elemental purity, silence, and minimalism. The project demonstrates high-end frontend development techniques, featuring smooth scrolling, complex GSAP animations, and an atmospheric UI design.

The design language revolves around the contrast between "The Void" (Silence/Black) and "Aurum" (Gold/Light), utilizing a distinct typography pairing of *Italiana* and *Manrope*.

### Key Pages
* **Home:** Cinematic hero section with video background and philosophy scroll reveal.
* **The Collection:** Horizontal scroll showcase of luxury suites (The Onyx Suite, Ivory Loft, Presidential Void).
* **Dining:** An "Omakase" culinary experience page with shadow/light aesthetics.
* **Wellness:** A spa and thermal wellness section focused on "transmutation" of the mind.

## 🛠Tcch Stack

* **Framework:** [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [GSAP](https://greensock.com/gsap/) (ScrollTrigger)
* **Smooth Scrolling:** [Lenis](https://lenis.studio/)
* **Routing:** [Vue Router](https://router.vuejs.org/)

## ✨ Features

* **Immersive Interactions:**
    * Custom cursor with blending modes and hover states.
    * Noise overlay for film-grain texture.
    * Bespoke Preloader animation.
* **Advanced Animations:**
    * Text reveal animations on scroll.
    * Horizontal scroll sections (Collection view).
    * Parallax effects on images.
    * Smooth page transitions.
* **UI Components:**
    * Full-screen menu overlay.
    * Booking/Reservation modal.
    * Suite detail overlays.

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
* Node.js (v16.0.0 or higher)
* npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/inasrami/aurum-luxury.git](https://github.com/inasrami/aurum-luxury.git)
    cd aurum-luxury
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```
    The site should now be running at `http://localhost:5173`.

### Building for Production

To build the project for deployment:

```bash
npm run build
