<script lang="ts" setup>
import * as Plot from "@observablehq/plot";
import data from "~/assets/data.json";

const bonus: Plot.PlotOptions = {
  caption: "Fornøyd vs bonus",
  nice: true,
  marginLeft: 60,
  width: 1000,
  color: {
    legend: "ramp",
  },
  marks: [
    Plot.auto(data, {
      y: "alder",
      fx: "bonus",
      fy: "fornøyd",
      color: "erfaring",
    }),
  ],
};

const median: Plot.PlotOptions = {
  caption: "Gjennomsnittlig lønn",
  nice: true,
  marginLeft: 60,
  marks: [
    Plot.auto(data, {
      mark: "bar",
      x: "erfaring",
      y: "alder",
      color: "erfaring",
    }),
  ],
};
</script>

<template>
  <div class="prose max-w-6xl w-full mx-auto">
    <h1 class="my-12">Utviklerlønn 2023</h1>

    <StatsGrid />

    <pre class="fixed top-0 right-0 border border-gray-9">{{ data[0] }}</pre>
    <div class="grid gap-4 grid-cols-2">
      <PlotFigure :options="bonus" class="col-span-2" />
      <PlotFigure :options="median" />
    </div>
  </div>
</template>
