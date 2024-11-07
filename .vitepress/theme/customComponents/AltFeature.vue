<script setup lang="ts">
import { useData } from '../composables/data'
import VPFeatures from '../components/VPFeatures.vue'

const { frontmatter: fm } = useData()
</script>

<template>
  <VPFeatures
    v-if="fm.features"
    class="VPHomeFeatures"
    :features="fm.features"
  />
</template>


<style lang="scss">
.item, .grid-3 {
  padding: 0px;
}
.VPFeature {

    transition: all 250ms ease-in;
}

.VPFeature:hover {
    background: linear-gradient(265.27deg, #0000 20.55%, #00F27E 94.17%);
    background-color: #00F27E;
}
</style>
