<template>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { ele } from '../vdom/element'
import { diff } from '../vdom/diff'
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
var ul2 = ele('div', { id: 'virtual' }, [
  ele('p', {}, ['Virtual DOM']),
  ele('ul', { id: 'list' }, [
    // ele('li', { class: 'item' }, ['Item 21']),
    ele('li', { class: 'item' }, ['Item 23'])
  ]),
  ele('p', {}, ['Hello World'])
])
console.log(ul1.render(), ul2.render())
var patches = diff(ul1, ul2);
console.log('patches:', patches);

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue { }
</script>
