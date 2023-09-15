import type { ThemeCssVar } from "../types/theme";

export const cssVar = (name: ThemeCssVar, _default?: string) =>
  _default ? `var(${name}, ${_default})` : `var(${name})`;
