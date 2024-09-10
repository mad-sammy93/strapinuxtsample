<template>
  <div>
    <h2>{{listName}}</h2>
    <ul>
      <!-- {{ items }} -->
      <li v-for="(chef, index) in items" :key="index">{{ chef.attributes.Name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">

type ListItem = {
  data: {
    id: string
    attributes: {
      Name: string
    }
  }
}

defineProps({
  listName: String,
  items: {
    type: Array as PropType<ListItem[]>,
  }
})
</script>

<style scoped>

</style>