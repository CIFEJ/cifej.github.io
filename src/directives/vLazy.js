/**
 * v-lazy: Vue directive for lazy-loading images via IntersectionObserver.
 * Usage: <img v-lazy="'/img/photo.webp'" alt="...">
 *
 * Features:
 * - Deferred placeholder: shown only if the image takes more than 300ms (avoids flash).
 * - Class .loaded on the img when it finishes loading.
 * - Class .img-loaded on the parent .gallery-item (fallback for Firefox < 121 without :has()).
 */
export const vLazy = {
  mounted(el, binding) {
    if (!('IntersectionObserver' in window)) {
      // Fallback: direct load
      el.src = binding.value
      el.classList.add('loaded')
      el.closest('.gallery-item')?.classList.add('img-loaded')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const img = entry.target
          const item = img.closest('.gallery-item')

          const placeholderTimer = setTimeout(
            () => item?.classList.add('show-placeholder'),
            300
          )

          img.src = binding.value

          img.addEventListener(
            'load',
            () => {
              clearTimeout(placeholderTimer)
              img.classList.add('loaded')
              item?.classList.add('img-loaded')
            },
            { once: true }
          )

          observer.unobserve(img)
        })
      },
      { rootMargin: '200px' }
    )

    observer.observe(el)
  }
}
