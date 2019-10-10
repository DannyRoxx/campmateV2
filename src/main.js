import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

export const bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('your-cache-name').then(function(cache) {
      return cache.addAll([
        // your list of cache keys to store in cache
        'app.7f171167.js',
        'chunk-vendors.2cded44d.js',
        // etc.
      ])
    })
  );
});