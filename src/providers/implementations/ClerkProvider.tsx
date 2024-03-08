"use client";

import { ClerkProvider as NextClerkProvider } from '@clerk/nextjs';

interface ClerkProviderProps {
  children: React.ReactNode;
}

const ClerkProvider: React.FC<ClerkProviderProps> = ({ children }) => {
  return (
    <NextClerkProvider
      appearance={{
        elements: {
          card: "bg-background text-foreground",
          modalCloseButton: "bg-background text-foreground",
          navbarButtons: "bg-background text-foreground",
          navbarButton: "bg-background text-foreground",
          headerTitle: "bg-background text-foreground",
          headerSubtitle: "bg-background text-foreground",
          profileSectionTitleText: "bg-background text-foreground",
          profileSectionTitle: "bg-background text-foreground",
          profileSectionContent: "bg-background text-foreground",
          profileSectionPrimaryButton: "bg-background text-foreground",
          userPreviewMainIdentifier: "bg-background text-foreground",
          accordionTriggerButton: "bg-background text-foreground",
        }
      }}
    >
      {children}
    </NextClerkProvider>
  )
}

export default ClerkProvider
