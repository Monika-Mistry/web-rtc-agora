import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";
import { PropsWithChildren } from "react";

const Client = ({ children }: PropsWithChildren<{}>) => {
  // Create RTC client
  const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

  return <AgoraRTCProvider client={client}>{children}</AgoraRTCProvider>;
};

export default Client;
