<template>
        <ul class="presets">
            <li class="preset" @click="addPreset1()">Camping</li>
            <li class="preset" @click="addPreset2()">Festival</li>
            <li class="preset" @click="addPreset3()">Travel</li>
        </ul>
</template>

<script>
import { bus } from '@/main.js'

export default {
    name: 'preset-list',
  data() {
    return {
      camping: [
        {title: 'Telt', completed: false},
        {title: 'Sovepose', completed: false},
        {title: 'Tandbørste', completed: false},
        {title: 'Lommelygte', completed: false}
      ],
      festival: [
        {title: 'Telt', completed: false},
        {title: 'Sovepose', completed: false},
        {title: 'Tandbørste', completed: false},
        {title: 'Drikkevarer (alkohol)', completed: false}
      ],
      travel: [
        {title: 'Flybillet', completed: false},
        {title: 'Pas', completed: false},
        {title: 'Tandbørste', completed: false},
        {title: 'Kuffert', completed: false}
      ]
    }
  },
  methods: {
    addPreset1() {
      bus.$emit('create-camping', this.camping)
      this.camping.push()
    },
    addPreset2() {
      bus.$emit('create-festival', this.festival)
      this.festival.push()
    },
    addPreset3() {
      bus.$emit('create-travel', this.travel)
      this.travel.push()
    }
  }
}
</script>

<style>

</style>