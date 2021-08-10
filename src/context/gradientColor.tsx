import { createContext, PropsWithChildren, useCallback, useState } from 'react';

interface GradientCtx {
  colors: [topColor: string, bottomColor: string];
  onColorsChange: (colors: this['colors']) => void;
}
export const gradientCtx = createContext<GradientCtx>(null!);
export function GradientProvider({ children }: PropsWithChildren<any>) {
  const [currentColors, setCurrentColors] = useState<GradientCtx['colors']>([
    '#ff6262',
    '#ffa947',
  ]);
  return (
    <gradientCtx.Provider
      value={{
        colors: currentColors,
        onColorsChange: setCurrentColors,
      }}
    >
      {children}
    </gradientCtx.Provider>
  );
}
