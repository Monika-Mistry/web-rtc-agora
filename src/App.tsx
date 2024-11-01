import { useEffect, useState } from "react";
import JoinRoom from "./components/JoinRoom";
import { useIsConnected, useJoin } from "agora-rtc-react";
import Channel from "./components/Channel";

const App = () => {
  const [channel, setChannel] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [isJoining, setIsJoining] = useState<boolean>(false);
  const isConnected = useIsConnected();
  const [isError, setIsError] = useState<boolean>(false);

  const leaveChannel = () => setIsJoining(false);

  // Join a channel
  const { error, isLoading } = useJoin(
    {
      appid: import.meta.env.VITE_AGORA_APP_ID,
      channel,
      token,
    },
    isJoining
  );

  const onJoin = (channelToJoin: string, tokenToJoin: string) => {
    setChannel(channelToJoin);
    setToken(tokenToJoin);
    setIsJoining(true);
  };

  useEffect(() => {
    setIsError(!!error);
  }, [error]);

  return (
    <div className="bg-gray-50 h-screen w-screen">
      <div className="grid justify-center gap-5">
        <h1 className="text-lg font-bold text-center">Video Call App</h1>
        {isConnected ? (
          <Channel leaveChannel={leaveChannel} />
        ) : (
          <JoinRoom
            onJoin={onJoin}
            isError={!!error || isError}
            setIsError={setIsError}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
};

export default App;
