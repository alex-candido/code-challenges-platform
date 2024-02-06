'use client';

import NextThemesProvider from './implementations/NextThemesProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <NextThemesProvider>{children}</NextThemesProvider>;
};

export default Providers;
