export const createStore = ({
  getId = () => `${Math.random()}`,
}: {
  getId?: () => string;
} = {}) => {
  const listeners: Record<string, () => void> = {};

  const emit = () => {
    for (const listener of Object.values(listeners)) {
      listener?.();
    }
  };

  const subscribe = (callback: () => void) => {
    const id = getId();
    listeners[id] = callback;

    return () => {
      delete listeners[id];
    };
  };

  return { emit, subscribe };
};
