import { SetStateAction, useMemo, Dispatch } from "react";

type JoinRoomProps = {
  channel: string;
  setChannel: Dispatch<SetStateAction<string>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  onJoin: () => void;
};

const JoinRoom = ({
  channel,
  setChannel,
  token,
  setToken,
  onJoin,
}: JoinRoomProps) => {
  const isDisabled = useMemo(() => !channel || !token, [channel, token]);

  return (
    <div>
      <div>
        <label htmlFor="channel-input">Channel Name</label>
        <input
          id="channel-input"
          onChange={(e) => setChannel(e.target.value)}
          placeholder="Enter channel to join"
          value={channel}
        />
      </div>

      <div>
        <label htmlFor="token-input">Token</label>
        <input
          id="token-input"
          onChange={(e) => setToken(e.target.value)}
          placeholder="Enter token to join"
          value={token}
        />
      </div>
      <button disabled={isDisabled} onClick={() => onJoin()}>
        Join Room
      </button>
    </div>
  );
};

export default JoinRoom;
