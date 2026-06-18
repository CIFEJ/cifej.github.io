import { onMounted, onUnmounted } from 'vue'
import { animate, inView } from 'motion'

const ANIMATIONS = {
  'fade-up': { opacity: [0, 1], y: [40, 0] },
  'fade-down': { opacity: [0, 1], y: [-40, 0] },
  'fade-left': { opacity: [0, 1], x: [40, 0] },
  'fade-right': { opacity: [0, 1], x: [-40, 0] },
  'zoom-in': { opacity: [0, 1], scale: [0.85, 1] },
  'flip-left': { opacity: [0, 1], rotateY: [-90, 0] },
  'flip-right': { opacity: [0, 1], rotateY: [90, 0] }
}

export function useMotion() {
  const cleanups = []

  onMounted(() => {
    document.querySelectorAll('[data-motion]').forEach((el) => {
      const keyframes = ANIMATIONS[el.dataset.motion] || ANIMATIONS['fade-up']

      const stop = inView(
        el,
        () => {
          stop()
          el.classList.remove('motion-pending')
          animate(el, keyframes, {
            duration: 0.7,
            easing: [0.25, 0.46, 0.45, 0.94]
          })
        },
        { margin: '-80px' }
      )

      cleanups.push(stop)
    })
  })

  onUnmounted(() => {
    cleanups.forEach((fn) => fn?.())
    cleanups.length = 0
  })
}
