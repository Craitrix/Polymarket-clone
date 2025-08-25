declare module "plotly.js-basic-dist" {
  interface Plotly {
    newPlot: (
      divId: string | HTMLElement,
      data: any[],
      layout?: any,
      config?: any
    ) => void;
    react: any;
  }

  const Plotly: Plotly;
  export default Plotly;
}
