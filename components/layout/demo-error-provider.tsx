'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

type DemoErrorContextValue = {
  throwInRootLayout: () => void;
};

const DemoErrorContext = createContext<DemoErrorContextValue | null>(null);

export function DemoErrorProvider({ children }: { children: ReactNode }) {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('示範：Root Layout 發生錯誤，由 global-error.tsx 處理');
  }

  const value = useMemo(
    () => ({
      throwInRootLayout: () => setShouldThrow(true),
    }),
    [],
  );

  return <DemoErrorContext.Provider value={value}>{children}</DemoErrorContext.Provider>;
}

export function useDemoError() {
  const context = useContext(DemoErrorContext);

  if (!context) {
    throw new Error('useDemoError 必須放在 DemoErrorProvider 內');
  }

  return context;
}
