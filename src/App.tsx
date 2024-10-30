import { useState } from "react";
import JoinRoom from "./components/JoinRoom";
import { useJoin } from "agora-rtc-react";

const App = () => {
  const [channel, setChannel] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [isJoining, setIsJoining] = useState<boolean>(false);

  // Join a channel
  useJoin(
    {
      appid: import.meta.env.VITE_AGORA_APP_ID,
      channel,
      token,
    },
    isJoining
  );
  return (
    <div>
      <h1>Video Call App</h1>
      <JoinRoom
        channel={channel}
        setChannel={setChannel}
        token={token}
        setToken={setToken}
        onJoin={() => setIsJoining(true)}
      />
    </div>
  );
};

export default App;
