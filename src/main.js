// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
import './random-post.js'

Vue.config.productionTip = false

let methods = {
  random(low, high) {
    let result = Math.random() * ((high - low) + low);
    return parseInt(result);
  },
};
function random(low, high) {
  let result = Math.random() * ((high - low) + low);
  return parseInt(result);
};

let bgColors = [
  'turquoise-bg',
  'emerald-bg',
  'peter-river-bg',
  'amethyst-bg',
]
let colors = [
  'turquoise-color',
  'emerald-color',
  'peter-river-color',
  'amethyst-color',
]
let font = [
  'big',
  'small',
  'medium',
]

let elements = [
  'retangule1',
  'retangule2'
]

let text = [
  'Texto 1',
  'Texto 2',
  'Texto 3',
]
let color = colors[random(1, 4)];
let element = elements[random(1,2)];
let data = {bgColors, colors, elements, text, font};
console.log(data);
export default Vue.component('HelloWorld', {
  data: () => data,
  methods,
  template:
    `<div class="post">
        <div :class="[elements[random(1,2)], bgColors[random(1,4)]]">
          <span :class="[colors[random(1,4)], font[random(1,3)]]">
            {{ text[random(1,3)] }}
            </span>
        </div>
        <div :class="[elements[random(1,2)], bgColors[random(1,4)]]">
        <span :class="[colors[random(1,4)], font[random(1,3)]]">
          {{ text[random(1,3)] }}
          </span>
        </div>
        <div :class="[elements[random(1,2)], bgColors[random(1,4)]]">
        <span :class="[colors[random(1,4)], font[random(1,3)]]">
          {{ text[random(1,3)] }}
          </span>
        </div>
    </div>`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data,
  methods,
  template: '<HelloWorld/>'
})
