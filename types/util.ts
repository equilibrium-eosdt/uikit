export type UnwrapArray<T> = T extends Array<infer U> ? U : never;
export type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };
export type ComposeProps<T extends string[], V> = Record<UnwrapArray<T>, V>;
