<script lang="ts" setup>
import * as Plot from "@observablehq/plot";
import data from "~/assets/data.json";

const fag: Plot.PlotOptions = {
  caption: "Gjennomsnittlig lønn på tvers av fagområder",
  nice: true,
  marginLeft: 170,
  width: 1000,
  color: {
    legend: "swatches",
  },
  marks: [
    Plot.boxX(data, {
      y: "fag",
      x: "lønn",
      fill: "jobb",
    }),
    Plot.frame(),
  ],
};

const median: Plot.PlotOptions = {
  caption: "Gjennomsnittlig lønn",
  nice: true,
  marginLeft: 120,
  color: {
    legend: "ramp",
    scheme: "BuRd",
  },
  marks: [
    Plot.auto(data, {
      x: "lønn",
      fy: "kolleger",
      color: "count",
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
      <PlotFigure :options="fag" class="col-span-2" />
      <PlotFigure :options="median" />
    </div>
  </div>
</template>
