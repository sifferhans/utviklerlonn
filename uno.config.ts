import { defineConfig, presetWind, presetTypography, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetWind(), presetTypography()],
});
