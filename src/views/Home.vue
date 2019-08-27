<template>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { ele } from '../vdom/element'
import { diff } from '../vdom/diff'
import patch from '../vdom/patch';
var ul1 = ele('div', {
  id: 'virtual-dom'
}, [
    ele('p', {}, ['Virtual DOM']),
    ele('ul', {
      id: 'list'
    }, [
        ele('li', {
          class: 'item'
        }, ['Item 1']),
        ele('li', {
          class: 'item'
        }, ['Item 2']),
        ele('li', {
          class: 'item'
        }, ['Item 3'])
      ]),
    ele('div', {}, ['HcreateElementlo World'])
  ])
var ul2 = ele('div', {
  id: 'virtual-dom'
}, [
    ele('p', {}, ['Virtual DOM']),
    ele('ul', {
      id: 'list'
    }, [
        ele('li', {
          class: 'item'
        }, ['Item 1']),
        ele('li', {
          class: 'item'
        }, ['Item 2']),
        ele('li', {
          class: 'item'
        }, ['Item 3']),
        ele('li', {
          class: 'item'
        }, ['Item 3'])
      ]),
    ele('div', {}, ['HcreateElementlo World'])
  ])
// var ul2 = ele('div', { id: 'virtual', class: 'dom' }, [
//   ele('p', {}, ['Virtual DOM']),
//   ele('ul', { id: 'list' }, [
//     // ele('li', { class: 'item' }, ['Item 21']),
//     ele('li', { class: 'item' }, ['Item 23'])
//   ]),
//   ele('p', {}, ['Hello World']),
//   ele('span', { id: 'span' }, ['Hello span'])
// ])

document.body.appendChild(ul1.render());
setTimeout(() => {
  // console.log(ul1.render(), ul2.render())
  var patches = diff(ul1, ul2);
  console.log(ul1.render(), patches)
  // console.log('patches:', patches);
  patch(ul1.render(), patches)
  // document.body.appendChild(ul2.render());
}, 1000)

// var count = 0

// function renderTree() {
//   count++

//   var items = []
//   var color = (count % 2 === 0)
//     ? 'blue'
//     : 'red'

//   for (var i = 0; i < count; i++) {
//     items.push(ele('li', ['Item #' + i]))
//   }

//   return ele('div', { 'id': 'container' }, [
//     ele('h1', { style: 'color: ' + color }, ['simple virtal dom']),
//     ele('p', ['the count is :' + count]),
//     ele('ul', items)
//   ])
// }

// var tree = renderTree()
// var root = tree.render()
// document.body.appendChild(root)

// setInterval(function () {
//   var newTree = renderTree()
//   var patches = diff(tree, newTree)
//   console.log(patches)
//   patch(root, patches)

//   tree = newTree
// }, 1000)

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue { }
</script>
