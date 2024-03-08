import { useTheme } from 'next-themes';

interface ClerkProviderProps {
  children: React.ReactNode;
}

const Text: React.FC<ClerkProviderProps> = ({ children }) => {
  const { resolvedTheme, systemTheme } = useTheme();
  let theme = String(systemTheme)

  console.log(theme)
  return (
    <div>teste</div>
  )
}

export default Text
