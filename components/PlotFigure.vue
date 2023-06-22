<script lang="ts" setup>
import * as Plot from "@observablehq/plot";

const props = defineProps<{
  options: Plot.PlotOptions;
}>();

const plot = ref<HTMLDivElement>();

onMounted(() => {
  const p = Plot.plot({
    color: {
      scheme: "BuRd",
    },
    ...props.options,
  });
  plot.value?.append(p);
});
</script>

<template>
  <div ref="plot"></div>
</template>
