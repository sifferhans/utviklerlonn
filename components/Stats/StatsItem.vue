<script setup lang="ts">
defineProps<{
  title: string;
  value: number | string;
}>();
</script>

<template>
  <div>
    <span class="block text-4xl">{{ value }}</span>
    <span class="text-gray-500">{{ title }}</span>
  </div>
</template>
