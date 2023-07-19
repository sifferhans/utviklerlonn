<script setup lang="ts">
defineProps<{
  title: string;
  value: number | string;
}>();
</script>

<template>
  <div class="p-6 rounded-xl bg-orange-50">
    <span class="block text-4xl text-orange-950">{{ value }}</span>
    <span class="text-orange-900">{{ title }}</span>
  </div>
</template>
