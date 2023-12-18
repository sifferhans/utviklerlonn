<script lang="ts" setup>
import * as Plot from '@observablehq/plot'

const { data, pending, error } = await useFetch('/data.json', {
	key: 'data',
})

if (error.value || !data.value) {
	throw createError({ statusCode: 404, statusMessage: 'Not found' })
}

const fag: Plot.PlotOptions = {
	caption: 'Gjennomsnittlig lønn på tvers av fagområder',
	nice: true,
	marginLeft: 170,
	width: 1000,
	color: {
		legend: 'swatches',
		scheme: 'Tableau10',
	},
	marks: [
		Plot.boxX(data.value, {
			y: 'fag',
			x: 'lønn',
			fill: 'jobb',
		}),
		Plot.frame(),
	],
}

const median: Plot.PlotOptions = {
	caption: 'Gjennomsnittlig lønn',
	nice: true,
	marginLeft: 120,
	color: {
		legend: 'ramp',
		scheme: 'BuRd',
	},
	marks: [
		Plot.auto(data.value, {
			x: 'lønn',
			fy: 'kolleger',
			color: 'count',
		}),
	],
}
</script>

<template>
	<div v-if="!pending && data" class="prose max-w-6xl w-full mx-auto">
		<h1 class="my-12">Utviklerlønn 2023</h1>

		<StatsGrid :data="data" />

		<!-- <pre class="fixed top-0 right-0 border border-gray-9">{{ data[0] }}</pre> -->
		<div class="grid gap-4 grid-cols-2">
			<PlotFigure :options="fag" class="col-span-2" />
			<PlotFigure :options="median" />
		</div>
	</div>
</template>
