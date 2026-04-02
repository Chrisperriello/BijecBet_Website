const analyticsId = import.meta.env.VITE_GA_MEASUREMENT_ID

let initialized = false

export function initAnalytics() {
  if (!analyticsId || initialized) {
    return
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag(...args) {
    window.dataLayer.push(args)
  }
  window.gtag = gtag
  window.gtag('js', new Date())
  window.gtag('config', analyticsId)
  initialized = true
}

export function trackEvent(eventName, params = {}) {
  if (!window.gtag) {
    return
  }
  window.gtag('event', eventName, params)
}
