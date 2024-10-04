<template>
  <div class="header container">
    <h1 @click="navigateTo('/')">{{ topHeader.logoTitle }}</h1>
    <div>
      <ul>
        <li v-for="(item, index) in topHeader.leftLinks" :key="index">
          <NavSubItem
            v-if="item"
            :name="item.title"
            :url="item.url"
          ></NavSubItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TopHeader } from "../types";

const props = defineProps({
  topHeader: { type: Object as PropType<TopHeader>, required: true },
});
</script>
<style lang="sass" scoped>
.header
  position: fixed
  top: 0
  right: 0
  left: 0
  display: flex
  justify-content: space-between
  align-items: center
  background: $vividOrange
  z-index: 50
  width: 100%
  h1
    cursor: pointer

  ul
    list-style: none
    display: flex
    gap: 20px
</style>
