<template>
  <div class="preset-menu">
        <!-- <p>Presets <img src="../../img/arrow.png" alt="Drop Down"></p> -->
        <preset-list v-show="hidden"/>
    </div>
</template>

<script>
import presetList from '@/components/presetList.vue'

export default {
    name: 'preset',
    components: {
        presetList
    },
    data () {
        return {
        hidden: true
        }
    },
    methods: {
        toggleList() {
            this.hidden = !this.hidden
        }
    }
}
</script>

<style>

</style>