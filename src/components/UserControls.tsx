import { MicOff, Mic, CameraOff, Camera, PhoneOff } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type UserControlsProps = {
  cameraOn: boolean;
  setCameraOn: Dispatch<SetStateAction<boolean>>;
  micOn: boolean;
  setMicOn: Dispatch<SetStateAction<boolean>>;
  leaveChannel: () => void;
};
const UserControls = ({
  micOn,
  setMicOn,
  cameraOn,
  setCameraOn,
  leaveChannel,
}: UserControlsProps) => {
  return (
    <div className="flex gap-4 justify-center m-2">
      <button
        onClick={() => setMicOn((prevState) => !prevState)}
        aria-label="toggle microphone"
        className="bg-blue-800 rounded-full p-2 text-white"
      >
        {micOn ? <MicOff /> : <Mic />}
      </button>
      <button
        onClick={() => setCameraOn((prevState) => !prevState)}
        aria-label="toggle camera"
        className="bg-blue-800 rounded-full p-2 text-white"
      >
        {cameraOn ? <CameraOff /> : <Camera />}
      </button>
      <button onClick={leaveChannel} aria-label="leave channel" className="bg-red-600 px-4 py-2 text-white rounded-full">
        <PhoneOff />
      </button>
    </div>
  );
};

export default UserControls;
