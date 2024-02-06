import { useState } from "react";
import PreferenceNav from "./PreferenceNav";

interface PlaygroundProps {
	problem: Problem;
	setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
	setSolved: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface ISettings {
	fontSize: string;
	settingsModalIsOpen: boolean;
	dropdownIsOpen: boolean;
}

const Playground: React.FC<PlaygroundProps> = ({ problem, setSuccess, setSolved }) => {

  const [settings, setSettings] = useState<ISettings>({
		fontSize: "",
		settingsModalIsOpen: false,
		dropdownIsOpen: false,
	});
  return (
		<div className='flex flex-col  relative overflow-x-hidden'>
      <PreferenceNav settings={settings} setSettings={setSettings} />
    </div>
	);
};
export default Playground;
