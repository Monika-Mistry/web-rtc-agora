import { Dispatch, SetStateAction } from "react";

type UserControlsProps = {
  cameraOn: boolean;
  setCameraOn: Dispatch<SetStateAction<boolean>>;
  micOn: boolean;
  setMicOn: Dispatch<SetStateAction<boolean>>;
  //   isJoining: boolean;
  //   setIsJoinng: Dispatch<SetStateAction<boolean>>;
};
const UserControls = ({ setMicOn, setCameraOn }: UserControlsProps) => {
  return (
    <div>
      <button onClick={() => setMicOn((prevState) => !prevState)}>
        Toggle Mic
      </button>
      <button onClick={() => setCameraOn((prevState) => !prevState)}>
        Toggle Camera
      </button>
      {/* <button>Leave Call</button> */}
    </div>
  );
};

export default UserControls;
