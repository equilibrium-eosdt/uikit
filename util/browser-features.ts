export const hasFeature = (featureName: keyof Window) =>
  typeof window !== "undefined" && featureName in window;
