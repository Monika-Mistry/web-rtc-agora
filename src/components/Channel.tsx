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
  isJoining: boolean;
};
const Channel = ({ isJoining }: ChannelProps) => {
  // Local User
  const [micOn, setMicOn] = useState<boolean>(true);
  const [cameraOn, setCameraOn] = useState<boolean>(true);
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  const { localCameraTrack } = useLocalCameraTrack(cameraOn);

  usePublish([localCameraTrack, localMicrophoneTrack]);

  return (
    <div>
      <div>
        <LocalUser
          audioTrack={localMicrophoneTrack}
          videoTrack={localCameraTrack}
          micOn={micOn}
          cameraOn={cameraOn}
        >
          <samp>You</samp>
        </LocalUser>
        <RemoteUsers />
      </div>
      <UserControls
        micOn={micOn}
        setMicOn={setMicOn}
        cameraOn={cameraOn}
        setCameraOn={setCameraOn}
      />
    </div>
  );
};

export default Channel;
