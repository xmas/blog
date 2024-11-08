<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import VPImage from './VPImage.vue'
import VPLink from './VPLink.vue'

defineProps<{
  icon?: DefaultTheme.FeatureIcon
  title: string
  details?: string
  link?: string
  linkText?: string
  rel?: string
  target?: string
  image?: string
}>()

import { useData } from '../composables/data'
const { isDark } = useData()

</script>

<template>
  <VPLink class="VPFeature" :href="link" :rel="rel" :target="target" :no-icon="true" :tag="link ? 'a' : 'div'">
    <article class="box">
      <div v-if="image">
        <VPImage class="image-bottom" :image="image" />
      </div>
      <div v-if="typeof icon === 'object' && icon.wrap" class="icon">
        <VPImage :image="icon" :alt="icon.alt" :height="icon.height || 48" :width="icon.width || 48"
          :class="isDark ? 'svg-opt-invert' : ''" />
      </div>
      <VPImage v-else-if="typeof icon === 'object'" :image="icon" :alt="icon.alt" :height="icon.height || 48"
        :width="icon.width || 48" :class="isDark ? 'svg-opt-invert' : ''" />

      <div v-else-if="icon" class="icon" v-html="icon"></div>
      <h2 class="title" v-html="title"></h2>
      <p v-if="details" class="details" v-html="details"></p>

      <div v-if="linkText" class="link-text">
        <p class="link-text-value">
          {{ linkText }} <span class="vpi-arrow-right link-text-icon" />
        </p>
      </div>

    </article>
  </VPLink>
</template>

<style>
.image-bottom {
  padding-top: 10px;
  margin-bottom: 2rem;
 max-height: 40px;
}

.svg-opt-invert {
  background-color: #51b7c0;
  border-radius: 16px;
}
</style>

<style scoped>
.VPFeature {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.VPFeature.link:hover {
  border-color: var(--vp-c-brand-1);
}



.box {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
}

.box> :deep(.VPImage) {
  margin-bottom: 20px;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 6px;
  background-color: var(--vp-c-default-soft);
  width: 48px;
  height: 48px;
  font-size: 24px;
  transition: background-color 0.25s;
}

.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
}

.details {
  flex-grow: 1;
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.link-text {
  padding-top: 8px;
}

.link-text-value {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.link-text-icon {
  margin-left: 6px;
}
</style>
