'use client';

import { useState } from 'react';

import ProblemsTable from '@/components/base/ProblemsTable';
import useHasMounted from '@/hooks/useHasMounted';
import { useTheme } from 'next-themes';

const LoadingSkeleton = () => {
  const { theme } = useTheme();
  return (
    <div className="flex items-center space-x-12 mt-4 px-6">
      <div
        className={`w-6 h-6 shrink-0 rounded-full bg-dark-layer-1 ${theme === 'light' ? 'opacity-25' : ''}`}
      ></div>
      <div
        className={`h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1 ${theme === 'light' ? 'opacity-25' : ''}`}
      ></div>
      <div
        className={`h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1 ${theme === 'light' ? 'opacity-25' : ''}`}
      ></div>
      <div
        className={`h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1 ${theme === 'light' ? 'opacity-25' : ''}`}
      ></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default async function Homepage() {
  const [loadingProblems, setLoadingProblems] = useState(true);
  const hasMounted = useHasMounted();

  return (
    <div className="min-h-screen">
      <h1
        className="text-2xl text-center font-medium
					uppercase pt-10 pb-5"
      >
        &ldquo; QUALITY OVER QUANTITY &rdquo; 👇
      </h1>
      <div className="relative overflow-x-auto mx-auto px-6 pb-10">
        {loadingProblems && (
          <div className="max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse">
            {[...Array(10)].map((_, idx) => (
              <LoadingSkeleton key={idx} />
            ))}
          </div>
        )}
        <table className="text-smtext-left sm:w-7/12 w-full max-w-[1200px] mx-auto">
          {!loadingProblems && (
            <thead className="text-xs uppercase border-b">
              <tr>
                <th scope="col" className="px-1 py-3 w-0 font-bold">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 w-0 font-bold">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 w-0 font-bold">
                  Difficulty
                </th>

                <th scope="col" className="px-6 py-3 w-0 font-bold">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 w-0 font-bold">
                  Solution
                </th>
              </tr>
            </thead>
          )}
          <ProblemsTable setLoadingProblems={setLoadingProblems} />
        </table>
      </div>
    </div>
  );
}
