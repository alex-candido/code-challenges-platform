import Link from 'next/link';

import { UserButton } from '@clerk/nextjs';

import ThemeToggle from '@/components/base/ThemeToggle';

const Navbar = () => {
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
          <div className="navbar-item relative w-full h-full aspect-square">
            <UserButton appearance={{
              elements: {
                userButtonPopoverRootBox: "!z-50 !min-w-[8rem] !overflow-hidden !rounded-md !border !border-[hsl(var(--border))] !bg-popover !text-popover-foreground !shadow-md"
              }
            }} afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
