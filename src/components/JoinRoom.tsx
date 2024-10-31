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
    <div className="grid gap-2">
      <div className="flex gap-4 justify-between">
        <label htmlFor="channel-input" className="content-center">
          Room
        </label>
        <input
          id="channel-input"
          onChange={(e) => setChannel(e.target.value)}
          placeholder="Enter channel"
          value={channel}
          className="p-2 border rounded"
        />
      </div>

      <div className="flex gap-4 justify-between">
        <label htmlFor="token-input" className="content-center">
          Token
        </label>
        <input
          id="token-input"
          onChange={(e) => setToken(e.target.value)}
          placeholder="Enter token"
          value={token}
          className="p-2 border rounded"
        />
      </div>
      <button
        className="bg-blue-500 disabled:bg-gray-100 disabled:text-black text-white p-2 rounded"
        disabled={isDisabled}
        onClick={() => onJoin()}
      >
        Join Room
      </button>
    </div>
  );
};

export default JoinRoom;
