'use client';

import Link from 'next/link';

import { useClerk } from '@clerk/nextjs';

import ThemeToggle from '@/components/base/ThemeToggle';
import UserAccountNav from '../base/UserAccountNav';

const Navbar = () => {
  const { user } = useClerk();

  return (
    <div className="navbar fixed inset-x-0 top-0 tex-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-2 ">
      <div className="navbar-container flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        <div className="navbar-left">
          <div className="navbar-item">
            <Link href={'/'} className="flex items-center gap-2">
              <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
                Code Challenge
              </p>
            </Link>
          </div>
        </div>
        <div className="navbar-right ml-auto flex items-center space-x-4">
          <div className="navbar-item">
            <ThemeToggle />
          </div>
          <div className="navbar-item flex items-center">
            <UserAccountNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
