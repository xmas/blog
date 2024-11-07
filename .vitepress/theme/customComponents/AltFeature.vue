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

</style>
