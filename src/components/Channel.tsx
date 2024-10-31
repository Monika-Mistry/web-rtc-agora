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
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  const { localCameraTrack } = useLocalCameraTrack(cameraOn);

  usePublish([localCameraTrack, localMicrophoneTrack]);

  return (
    <div>
      <div className="w-60 h-60">
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
