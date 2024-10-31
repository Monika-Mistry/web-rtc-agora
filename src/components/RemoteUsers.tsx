import { RemoteUser, useRemoteUsers } from "agora-rtc-react";

const RemoteUsers = () => {
  // Get all the remote users
  const remoteUsers = useRemoteUsers();

  // Get the audio/video to render for each remote user
  return (
    <div>
      {remoteUsers.map((user) => (
        <div className="w-60 h-52" key={user.uid}>
          <RemoteUser user={user}>
            <samp className="bg-black text-white px-1 text-sm bottom-0 absolute">
              {user.uid}
            </samp>
          </RemoteUser>
        </div>
      ))}
    </div>
  );
};

export default RemoteUsers;
