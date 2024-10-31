import {
  LocalUser,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
} from "agora-rtc-react";
import { useState } from "react";
import RemoteUsers from "./RemoteUsers";
import UserControls from "./UserControls";

type ChannelProps = {
  leaveChannel: () => void;
};
const Channel = ({ leaveChannel }: ChannelProps) => {
  // Local User
  const [micOn, setMicOn] = useState<boolean>(true);
  const [cameraOn, setCameraOn] = useState<boolean>(true);
  // Create a mic and camera track
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  const { localCameraTrack } = useLocalCameraTrack(cameraOn);

  // Publish the mic and camera track for the local user
  usePublish([localCameraTrack, localMicrophoneTrack]);

  return (
    <div className="">
      <div className="grid gap-2 grid-flow-cols">
        <div className="w-60 h-52">
          <LocalUser
            audioTrack={localMicrophoneTrack}
            videoTrack={localCameraTrack}
            micOn={micOn}
            cameraOn={cameraOn}
          >
            <samp className="bg-black text-white px-1 text-sm bottom-0 absolute">
              You
            </samp>
          </LocalUser>
        </div>
        <RemoteUsers />
      </div>
      <UserControls
        micOn={micOn}
        setMicOn={setMicOn}
        cameraOn={cameraOn}
        setCameraOn={setCameraOn}
        leaveChannel={leaveChannel}
      />
    </div>
  );
};

export default Channel;
