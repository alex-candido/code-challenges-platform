'use client';

import { UserProfile, useClerk } from '@clerk/nextjs';

import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

const UserProfilePage = () => {
  const { theme } = useTheme();
  const { user } = useClerk();

  return (
    <div className="flex items-center justify-center w-full">
      {user && (
        <UserProfile
          appearance={{
            baseTheme: theme === 'dark' ? dark : undefined,
            elements: {
              rootBox: 'w-full bg-background text-foreground',
              card: 'w-full mx-0 max-w-[none] !rounded-none bg-background text-foreground',
              navbar: 'bg-background text-foreground',
            },
          }}
          path="/user-profile"
          routing="path"
        />
      )}
    </div>
  );
};

export default UserProfilePage;
