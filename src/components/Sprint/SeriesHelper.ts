export const increaseSeries = (series: number[]) => {
  series[series.length - 1] = series[series.length - 1] + 1;
  return series;
};

export const resetSeries = (series: number[]) => {
  if (series[series.length - 1] > 0) {
    series.push(0);
  }
  return series;
};

export const maxSeries = (series: number[]) => {
  return Math.max.apply(null, series);
};
