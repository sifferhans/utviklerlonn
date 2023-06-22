interface ToPercentageOptions {
  rounding?: (x: number) => number;
}

export function toPercentage(
  value: number,
  total: number,
  options: ToPercentageOptions = {}
) {
  const { rounding = Math.floor } = options;
  return rounding((value / total) * 100);
}
