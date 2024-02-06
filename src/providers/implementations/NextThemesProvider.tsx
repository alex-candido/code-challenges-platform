import { ThemeProvider } from 'next-themes';

interface NextThemesProviderProps {
  children: React.ReactNode;
}

const NextThemesProvider: React.FC<NextThemesProviderProps> = ({
  children,
}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default NextThemesProvider;
