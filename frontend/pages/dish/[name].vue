<template>
    <div>
      <SectionHeader :headerTitle="name"/>
    </div>
  </template>
  <script setup lang="ts">
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const name = Array.isArray(route.params.name) ? route.params.name[0] : route.params.name as string;
  </script>