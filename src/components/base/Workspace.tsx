import { useState } from 'react';
import Confetti from "react-confetti";
import Split from "react-split";

import useWindowSize from '@/hooks/useWindowSize';

import Playground from "../base/Playground";
import ProblemDescription from "../base/ProblemDescription";

interface WorkspaceProps {
	problem: Problem;
};

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
  const { width, height } = useWindowSize();
  const [success, setSuccess] = useState(false);
	const [solved, setSolved] = useState(false);

  return (
    <Split className='split' minSize={0}>
      <ProblemDescription problem={problem} _solved={solved} />
      <div>
        <Playground problem={problem} setSuccess={setSuccess} setSolved={setSolved} />
        {success && <Confetti gravity={0.3} tweenDuration={4000} width={width - 1} height={height - 1} />}
      </div>
    </Split>
  )
}

export default Workspace
