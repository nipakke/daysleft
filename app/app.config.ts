

export default defineAppConfig({
  appName: "daysleft",
  uiPro: {},
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  toaster: {
    position: 'top-right' as const,
    expand: true,
    duration: 3000,
  },
  ui: {
    colors: {
      primary: "blue",
      neutral: "zinc",
    },
  },
})