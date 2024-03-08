'use client';

import Link from 'next/link';

import { useClerk } from '@clerk/nextjs';
import { AlignJustify, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from 'next-themes';

import { problems } from '@/utils/problems';

import ThemeToggle from '@/components/base/ThemeToggle';
import { useParams, useRouter } from 'next/navigation';
import Timer from '../base/Timer';
import UserAccountNav from '../base/UserAccountNav';
import { Button } from '../ui/button';

interface TopbarProps {
  problemPage?: boolean;
}

const Navbar: React.FC<TopbarProps> = ({ problemPage }) => {
  const { theme } = useTheme();
  const { user } = useClerk();

  const router = useRouter();
  const params = useParams<{ pid: string }>();

  const handleProblemChange = (isForward: boolean) => {
    const { order } = problems[params.pid as string] as Problem;
    const direction = isForward ? 1 : -1;
    const nextProblemOrder = order + direction;
    const nextProblemKey = Object.keys(problems).find(
      key => problems[key].order === nextProblemOrder,
    );

    if (isForward && !nextProblemKey) {
      const firstProblemKey = Object.keys(problems).find(
        key => problems[key].order === 1,
      );
      router.push(`/problems/${firstProblemKey}`);
    } else if (!isForward && !nextProblemKey) {
      const lastProblemKey = Object.keys(problems).find(
        key => problems[key].order === Object.keys(problems).length,
      );
      router.push(`/problems/${lastProblemKey}`);
    } else {
      router.push(`/problems/${nextProblemKey}`);
    }
  };

  return (
    <div
      className={`navbar fixed inset-x-0 top-0 dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-3 ${theme === 'light' ? 'bg-white' : 'bg-none'}`}
    >
      <div className="navbar-container flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link href={'/'} className="flex items-center gap-2">
              <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-lg md:text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
                Code Challenge
              </p>
            </Link>
          </div>
        </div>
        <div className="navbar-content hidden md:flex flex-1 items-center">
          <div className="navbar-item ml-2 w-full">
            {problemPage && (
              <div className="flex items-center gap-4 flex-1 justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleProblemChange(false)}
                >
                  <ChevronLeft />
                </Button>
                <Link
                  href="/"
                  className="flex items-center gap-2 font-medium max-w-[170px]cursor-pointer"
                >
                  <div>
                    <AlignJustify />
                  </div>
                </Link>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleProblemChange(true)}
                >
                  <ChevronRight />
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="navbar-account ml-auto flex items-center space-x-4">
          <div className="navbar-item">{user && problemPage && <Timer />}</div>
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
