type UnwrapArray<T> = T extends Array<infer U> ? U : never;
type GetProps<T extends string[]> = Record<UnwrapArray<T>, boolean>;
