'use client';

import { useParams } from 'next/navigation';

import Workspace from '@/components/base/Workspace';
import useHasMounted from '@/hooks/useHasMounted';
import { problems } from '@/utils/problems';

export default function Page() {
  const params = useParams<{ pid: string }>();
  const { pid } = params;
  const problem = problems[pid];

  if (!problem) {
    return {
      notFound: true,
    };
  }
  problem.handlerFunction = problem.handlerFunction.toString();

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  return (
    <div>
      <Workspace problem={problem} />
    </div>
  );
}
