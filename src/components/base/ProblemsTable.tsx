import { useState } from 'react';

interface ProblemsTableProps {
  setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProblemsTable: React.FC<ProblemsTableProps> = ({
  setLoadingProblems,
}) => {
  const [youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: '',
  });
  return (
    <>
      <tbody className="text-white"></tbody>
      {youtubePlayer.isOpen && (
        <tfoot className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center"></tfoot>
      )}
    </>
  );
};
export default ProblemsTable;
