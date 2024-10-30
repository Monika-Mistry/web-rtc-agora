import { RemoteUser, useRemoteUsers } from "agora-rtc-react";

const RemoteUsers = () => {
  const remoteUsers = useRemoteUsers();
  return (
    <>
      {remoteUsers.map((user) => (
        <RemoteUser key={user.uid}>
          <samp>{user.uid}</samp>
        </RemoteUser>
      ))}
    </>
  );
};

export default RemoteUsers;
