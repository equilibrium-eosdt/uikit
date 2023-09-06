import { useEffect, useState, useSyncExternalStore } from "react";

import { hasFeature } from "../util/browser-features";
import { createStore } from "../util/store";

const { emit, subscribe } = createStore();

const DEFAULT_CONFIG = "auto";
const CONFIG_KEY = "theme";
export type ThemeVariant = "dark" | "light";
export type ThemeConfig = ThemeVariant | typeof DEFAULT_CONFIG;

const THEME_VARIANTS: ThemeVariant[] = ["light", "dark"];
export const THEME_CONFIG_VALUES = [DEFAULT_CONFIG, ...THEME_VARIANTS] as const;

export const isThemeVariant = (value?: string | null): value is ThemeVariant =>
  THEME_VARIANTS.includes(value as ThemeVariant);

const getSnapshot = (): ThemeConfig => {
  if (!hasFeature("localStorage")) {
    return DEFAULT_CONFIG;
  }

  const value = localStorage.getItem(CONFIG_KEY);
  return isThemeVariant(value) ? value : DEFAULT_CONFIG;
};

const getMatcher = () =>
  hasFeature("matchMedia")
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : undefined;

export const getSystemTheme = (): ThemeVariant => {
  const matcher = getMatcher();

  if (!matcher) {
    return "light";
  }

  return matcher.matches ? "dark" : "light";
};

/** @deprecated static values bad */
export const setValue = (value?: ThemeConfig, callback?: () => void) => {
  if (!hasFeature("localStorage")) {
    return;
  }

  if (!isThemeVariant(value)) {
    localStorage.removeItem(CONFIG_KEY);
  } else {
    localStorage.setItem(CONFIG_KEY, value);
  }

  emit();
  callback?.();
};

export const useThemeConfigStore = () =>
  useSyncExternalStore<ThemeConfig>(
    subscribe,
    getSnapshot,
    () => DEFAULT_CONFIG,
  );

export const useSetTheme = (config?: {
  theme: ThemeConfig;
  onChange?: (theme: ThemeVariant) => void;
}) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeVariant>(() =>
    isThemeVariant(config?.theme) ? config!.theme : getSystemTheme(),
  );

  useEffect(() => {
    if (isThemeVariant(config?.theme)) {
      setCurrentTheme(config!.theme);
    } else {
      setCurrentTheme(getSystemTheme());
      const matcher = getMatcher();

      if (!matcher) {
        return;
      }

      const listener = (e: MediaQueryListEvent) => {
        setCurrentTheme(e.matches ? "dark" : "light");
      };

      matcher.addEventListener("change", listener);

      return () => {
        matcher.removeEventListener("change", listener);
      };
    }
  }, [config]);

  useEffect(() => {
    config?.onChange?.(currentTheme);
    const element = document.documentElement;
    element.setAttribute("data-theme", currentTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTheme]);
};

export const getDOMTheme = (): ThemeVariant => {
  if (!hasFeature("document")) {
    return "light";
  }

  const value = document.documentElement.getAttribute("data-theme");
  return !isThemeVariant(value) ? "light" : value;
};
