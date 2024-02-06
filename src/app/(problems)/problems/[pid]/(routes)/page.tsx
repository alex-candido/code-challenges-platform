"use client"

import Workspace from "@/components/workspace/workspace";
import useHasMounted from "@/hooks/useHasMounted";

interface ProblemPageProps {
  problem: Problem;
}

function page({ problem }: ProblemPageProps) {
  const hasMounted = useHasMounted();

	if (!hasMounted) return null;
  return (
    <div>
      <Workspace problem={problem} />
    </div>
  );
}

export default page;

// fetch the local data
//  SSG
// getStaticPaths => it create the dynamic routes
// export async function getStaticPaths() {
// 	const paths = Object.keys(problems).map((key) => ({
// 		params: { pid: key },
// 	}));

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// }

// // getStaticProps => it fetch the data

// export async function getStaticProps() {
//   const params = useParams<{ pid: string }>();
// 	const { pid } = params;
// 	const problem = problems[pid];

// 	if (!problem) {
// 		return {
// 			notFound: true,
// 		};
// 	}
// 	problem.handlerFunction = problem.handlerFunction.toString();
// 	return {
// 		props: {
// 			problem,
// 		},
// 	};
// }
