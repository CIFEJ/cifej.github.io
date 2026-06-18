import { ref, onMounted, onUnmounted } from 'vue'

/**
 * useSlider: reusable logic for sliders and carousels.
 *
 * @param {number} count     - total number of slides
 * @param {number} interval  - ms between auto-advances (0 = no autoplay)
 */
export function useSlider(count, interval = 8000) {
  const current = ref(0)
  let timer = null
  let touchStartX = 0

  function goTo(index) {
    current.value = ((index % count) + count) % count
  }

  function startTimer() {
    if (!interval) return
    clearInterval(timer)
    timer = setInterval(() => goTo(current.value + 1), interval)
  }

  function prev() {
    goTo(current.value - 1)
    startTimer()
  }

  function next() {
    goTo(current.value + 1)
    startTimer()
  }

  // Touch swipe: attach handlers to an element via template ref
  function onTouchstart(e) {
    touchStartX = e.touches[0].clientX
  }
  function onTouchend(e) {
    const diff = touchStartX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      goTo(current.value + (diff > 0 ? 1 : -1))
      startTimer()
    }
  }

  onMounted(startTimer)
  onUnmounted(() => clearInterval(timer))

  return { current, goTo, prev, next, onTouchstart, onTouchend }
}
