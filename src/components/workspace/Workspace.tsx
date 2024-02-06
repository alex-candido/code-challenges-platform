import { useState } from 'react';
import Split from "react-split";
import Playground from "../base/Playground";
import ProblemDescription from "../base/ProblemDescription";

interface WorkspaceProps {
	problem: Problem;
};

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
  const [success, setSuccess] = useState(false);
	const [solved, setSolved] = useState(false);

  return (
    <Split className='split' minSize={0}>
      <ProblemDescription problem={problem} _solved={solved} />
      <div>
        <Playground problem={problem} setSuccess={setSuccess} setSolved={setSolved} />
      </div>
    </Split>
  )
}

export default Workspace
