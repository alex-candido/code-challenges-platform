import Link from 'next/link';

import { useClerk } from '@clerk/nextjs';
import { AlignJustify, ChevronLeft, ChevronRight } from 'lucide-react';
import Timer from '../base/Timer';

interface TopbarProps {
  problemPage?: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {
  const { user } = useClerk();

  const handleProblemChange = (isForward: boolean) => {};
  return (
    <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
      <div
        className={`flex w-full items-center justify-between ${!problemPage ? 'max-w-[1200px] mx-auto' : ''}`}
      >
        {problemPage && (
          <div className="flex items-center gap-4 flex-1 justify-center">
            <div
              className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
              onClick={() => handleProblemChange(false)}
            >
              <ChevronLeft />
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer"
            >
              <div>
                <AlignJustify />
              </div>
              <p>Problem List</p>
            </Link>
            <div
              className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
              onClick={() => handleProblemChange(true)}
            >
              <ChevronRight />
            </div>
          </div>
        )}
        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2"
            >
              Premium
            </a>
          </div>
          {user && problemPage && <Timer /> }
        </div>
      </div>
    </nav>
  );
};
export default Topbar;
