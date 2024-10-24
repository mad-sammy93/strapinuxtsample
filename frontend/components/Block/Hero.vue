<script setup lang="ts">
const { $getImageUrl } = useNuxtApp()
import type { ComponentBlockHero } from '~/types'
defineProps({
  data: {
    type: Object as PropType<ComponentBlockHero>,
  },
})
</script>
<template>
  <div class="relative w-full h-full ">
    <div class="mx-auto text-center relative">
      <div class="overlay hover:display-block"></div>
      <NuxtImg
        v-if="data?.image?.data?.attributes?.url"
        :src="$getImageUrl(data?.image?.data?.attributes?.url)"
        :alt="data?.image?.data?.attributes?.name"
        class="relative w-full object-cover object-bottom top h-screen"
      />
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <AtomQuote
          v-if="data?.quote"
          :quote="data?.quote ?? undefined"
        />
        <div
          v-if="data?.Description"
          class="text-shadow p-20 text-white mx-auto w-full max-w-[1440px]: text-2xl"
        >
          {{ data?.Description }}
        </div>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <AtomButton
            v-if="data?.button"
            :button="data?.button ?? undefined"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="sass">
.overlay
  transition: all 0.5s
  position: absolute
  display: none
  width: 100%
  height: 100%
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: rgba(0,0,0,0.5)
  z-index: 0
</style>
