'use client';

import { LogOut, Settings, UserRound } from 'lucide-react';
import { useRouter } from 'next/navigation';

import UserAvatar from '@/components/base/UserAvatar';
import { useClerk } from '@clerk/nextjs';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

const UserAccountNav = () => {
  const { user, signOut, openUserProfile } = useClerk();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          className="w-10 h-10"
          user={{
            name: user?.fullName || null,
            image: user?.imageUrl || null,
          }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-popover" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user?.fullName && <p className="font-medium">{user?.fullName}</p>}
            {user?.emailAddresses[0].emailAddress && (
              <p className="w-[200px] truncate text-sm text-popover-foreground">
                {user?.emailAddresses[0].emailAddress}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={() => {
            openUserProfile();
          }}
          className="cursor-pointer"
        >
          <UserRound className="w-4 h-4 mr-2" />
          Modal account
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={() => {
            router.push('/user-profile');
          }}
          className="cursor-pointer"
        >
          <Settings className="w-4 h-4 mr-2" />
          <Link href="/user-profile">Manage account</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={() => {
            signOut();
          }}
          className="text-blue-600 cursor-pointer"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
