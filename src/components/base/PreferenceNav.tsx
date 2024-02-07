import { ISettings } from "./Playground";

interface PreferenceNavProps {
  settings: ISettings;
  setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
}

const PreferenceNav: React.FC<PreferenceNavProps> = ({
  setSettings,
  settings,
}) => {
  return (
    <div className="flex items-center justify-between h-11 w-full ">
      <div className="flex items-center ">
        <button className="flex cursor-pointer items-center rounded focus:outline-none 2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium">
          <div className="flex items-center px-1">
            <div className="text-xs text-label-2 ">
              JavaScript
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
export default PreferenceNav;
