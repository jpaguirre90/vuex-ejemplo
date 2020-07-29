import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [
      { id: 1, title: 'The Hangover', genre: 'Comedy' },
      { id: 2, title: 'I Love You Man', genre: 'Comedy' },
      { id: 3, title: 'Cars', genre: 'Family' },
      { id: 4, title: 'Toy Story', genre: 'Family' },
      { id: 5, title: 'Home Alone', genre: 'Family' },
      { id: 6, title: 'Sister Acts', genre: 'Comedy' },
    ]
  },
  // more stuff will go here later
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

