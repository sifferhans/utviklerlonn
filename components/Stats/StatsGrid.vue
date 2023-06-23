<script lang="ts" setup>
import data from "~/assets/data.json";

const total = computed(() => data.length);

const happy = computed(() => {
  const filtered = data.filter((d) => d.fornøyd === "Ja").length;
  return toPercentage(filtered, total.value) + "%";
});

const fag = computed(() => {
  let result: Record<string, number> = {};

  data
    .map((d) => d.fag)
    .forEach((v) => {
      if (!result[v]) result[v] = 0;
      result[v] += 1;
    });

  const top = Object.entries(result)
    .map(([key, value]) => [value, key])
    .sort(([a], [b]) => (a > b ? -1 : 1))[0][1];

  return top;
});
</script>

<template>
  <ul aria-label="Statistikk" class="grid grid-cols-4 gap-4 p-0 my-12">
    <li class="list-none">
      <StatsItem title="Totalt innsendte svar" :value="total" />
    </li>
    <li class="list-none">
      <StatsItem title="Er fornøyd med lønn" :value="happy" />
    </li>
    <li class="list-none">
      <StatsItem title="Vanligste fag" :value="fag" />
    </li>
  </ul>
</template>
