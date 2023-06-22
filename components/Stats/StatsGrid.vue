<script lang="ts" setup>
import data from "~/assets/data.json";

const total = computed(() => data.length);

const happy = computed(() => {
  const filtered = data.filter((d) => d.fornøyd === "Ja").length;
  return toPercentage(filtered, total.value) + "%";
});

const bonus = computed(() => {
  const filtered = data.filter((d) => d.bonus === "Ja").length;
  return toPercentage(filtered, total.value) + "%";
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
      <StatsItem title="Har fått bonus" :value="bonus" />
    </li>
  </ul>
</template>
