interface ProblemDescriptionProps {
  problem: Problem;
  _solved: boolean;
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({
  problem,
  _solved,
}) => {
  return (
    <div>
      {/* TAB */}
      <div className="flex h-11 w-full items-center pt-2 overflow-x-hidden">
        <div
          className={'rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer'}
        >
          Description
        </div>
      </div>
      <div className="flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto">
        {/* Problem heading */}
        <div className="w-full">
          <div className="flex space-x-4">
            <div className="flex-1 mr-2 text-lg font-medium">
              title
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProblemDescription;
