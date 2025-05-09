'use client';

import { problemsData } from '@/mock/problems';
import { useClerk } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

import CircleSkeleton from '@/components/Skeletons/CircleSkeleton';
import RectangleSkeleton from '@/components/Skeletons/RectangleSkeleton';

import {
  AiFillDislike,
  AiFillLike,
  AiFillStar,
  AiOutlineLoading3Quarters,
} from 'react-icons/ai';
import { BsCheck2Circle } from 'react-icons/bs';
import { TiStarOutline } from 'react-icons/ti';

interface ProblemDescriptionProps {
  problem: Problem;
  _solved: boolean;
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({
  problem,
  _solved,
}) => {
  const { currentProblem, loading, problemDifficultyClass, setCurrentProblem } =
    useGetCurrentProblem(problem.id);
  const { liked, disliked, solved, setData, starred } =
    useGetUsersDataOnProblem(problem.id);
  const [updating, setUpdating] = useState(false);

  return (
    <div>
      {/* TAB */}
      <div className="flex px-4 h-11 w-full items-center pt-2 overflow-x-hidden">
        <div
          className={
            'bg-dark-layer-1 rounded-[5px] px-5 py-[10px] text-xs cursor-pointer'
          }
        >
          Description
        </div>
      </div>
      <div className="flex px-4 py-4 h-[calc(100vh-94px)] overflow-y-auto">
        {/* Problem heading */}
        <div className="w-full">
          <div className="flex space-x-4">
            <div className="flex-1 mr-2 text-lg font-medium">
              {problem?.title}
            </div>
          </div>
          {!loading && currentProblem && (
            <div className="flex items-center mt-3">
              <div
                className={`${problemDifficultyClass} inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
              >
                {currentProblem.difficulty}
              </div>
              {(solved || _solved) && (
                <div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s">
                  <BsCheck2Circle />
                </div>
              )}
              <div
                className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6"
                onClick={() => {}}
              >
                {liked && !updating && (
                  <AiFillLike className="text-dark-blue-s" />
                )}
                {!liked && !updating && <AiFillLike />}
                {updating && (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                )}

                <span className="text-xs">{currentProblem.likes}</span>
              </div>
              <div
                className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6"
                onClick={() => {}}
              >
                {disliked && !updating && (
                  <AiFillDislike className="text-dark-blue-s" />
                )}
                {!disliked && !updating && <AiFillDislike />}
                {updating && (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                )}

                <span className="text-xs">{currentProblem.dislikes}</span>
              </div>
              <div
                className="cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 "
                onClick={() => {}}
              >
                {starred && !updating && (
                  <AiFillStar className="text-dark-yellow" />
                )}
                {!starred && !updating && <TiStarOutline />}
                {updating && (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                )}
              </div>
            </div>
          )}

          {loading && (
            <div className="mt-3 flex space-x-2">
              <RectangleSkeleton />
              <CircleSkeleton />
              <RectangleSkeleton />
              <RectangleSkeleton />
              <CircleSkeleton />
            </div>
          )}

          {/* Problem Statement(paragraphs) */}
          <div className="text-sm">
            <div
              dangerouslySetInnerHTML={{ __html: problem.problemStatement }}
            />
          </div>

          {/* Examples */}
          <div className="mt-4">
            {problem.examples.map((example, index) => (
              <div key={example.id}>
                <p className="font-medium ">Example {index + 1}: </p>
                {example.img && (
                  <img src={example.img} alt="" className="mt-3" />
                )}
                <div className="example-card">
                  <pre>
                    <strong className="">Input: </strong> {example.inputText}
                    <br />
                    <strong>Output:</strong>
                    {example.outputText} <br />
                    {example.explanation && (
                      <>
                        <strong>Explanation:</strong> {example.explanation}
                      </>
                    )}
                  </pre>
                </div>
              </div>
            ))}
          </div>

          {/* Constraints */}
          <div className="my-8 pb-4">
            <div className=" text-sm font-medium">Constraints:</div>
            <ul className=" ml-5 list-disc ">
              <div dangerouslySetInnerHTML={{ __html: problem.constraints }} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProblemDescription;

function useGetCurrentProblem(problemId: string) {
  const [currentProblem, setCurrentProblem] = useState<DBProblem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [problemDifficultyClass, setProblemDifficultyClass] =
    useState<string>('');

  useEffect(() => {
    // Get problem from DB
    const getCurrentProblem = async () => {
      setLoading(true);

      const problem = problemsData.find(problem => problem.id === problemId);

      if (problem) {
        setCurrentProblem({ ...problem } as DBProblem);
        // easy, medium, hard
        setProblemDifficultyClass(
          problem.difficulty === 'Easy'
            ? 'bg-olive text-olive'
            : problem.difficulty === 'Medium'
              ? 'bg-dark-yellow text-dark-yellow'
              : ' bg-dark-pink text-dark-pink',
        );
      }
      setLoading(false);
    };
    getCurrentProblem();
  }, [problemId]);

  return { currentProblem, loading, problemDifficultyClass, setCurrentProblem };
}

function useGetUsersDataOnProblem(problemId: string) {
  const { user } = useClerk();
  const [data, setData] = useState({
    liked: false,
    disliked: false,
    starred: false,
    solved: false,
  });

  useEffect(() => {
    const getUsersDataOnProblem = async () => {
      if (true) {
        const data = {
          solvedProblems: [''],
          likedProblems: [''],
          dislikedProblems: [''],
          starredProblems: [''],
        };
        const {
          solvedProblems,
          likedProblems,
          dislikedProblems,
          starredProblems,
        } = data;
        setData({
          liked: likedProblems.includes(problemId), // likedProblems["two-sum","jump-game"]
          disliked: dislikedProblems.includes(problemId),
          starred: starredProblems.includes(problemId),
          solved: solvedProblems.includes(problemId),
        });
      }
    };

    if (user) getUsersDataOnProblem();
    return () =>
      setData({ liked: false, disliked: false, starred: false, solved: false });
  }, [problemId, user]);

  return { ...data, setData };
}
