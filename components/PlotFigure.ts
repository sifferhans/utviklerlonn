import * as Plot from "@observablehq/plot";

export default defineComponent({
  props: {
    options: {
      type: Object as PropType<Plot.PlotOptions>,
      required: true,
    },
  },
  render() {
    const { options } = this;
    return withDirectives(h("div"), [
      [
        {
          mounted(el) {
            el.append(
              Plot.plot({
                color: {
                  scheme: "BuRd",
                },
                ...options,
              })
            );
          },
        },
      ],
    ]);
  },
});
