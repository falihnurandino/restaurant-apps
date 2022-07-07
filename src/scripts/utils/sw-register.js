import runtime from 'serviceworker-webpack-plugin/lib/runtime'

const swRegister = () => {
  if ('serviceWorker' in navigator) {
    runtime.register()
    return
  }
  console.log('Service worker not supported in this browser')
}

export default swRegister
