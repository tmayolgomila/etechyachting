// stores/useScrollToNext.js
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

export function useScrollToNext(currentRoute, nextRoute) {
  const router = useRouter()

  const handleScroll = () => {
    const bottomReached =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 10

    if (bottomReached) {
      window.removeEventListener('scroll', handleScroll)
      setTimeout(() => router.push(nextRoute), 500)
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}
