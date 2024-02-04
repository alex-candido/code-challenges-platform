import { ClerkProvider as NextClerkProvider } from '@clerk/nextjs';

interface ClerkProviderProps {
  children: React.ReactNode;
}

const ClerkProvider: React.FC<ClerkProviderProps> = ({ children }) => {
  return (
    <NextClerkProvider>
      {children}
    </NextClerkProvider>
  )
}

export default ClerkProvider
