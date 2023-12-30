import { useEffect, useMemo, useState } from "react";
import io from "socket.io-client";

export const useSocket = (serverPath) => {
  const socket = useMemo(
    () =>
      io.connect(serverPath, {
        transports: ["websocket"],
      }),
    [serverPath]
  );

  const [online, setOnline] = useState(false);

  // Conexion al socket
  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  // Escucha de recuperacion de conexion
  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);

  // Escucha cuando pierde la conexion
  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

  return {
    socket,
    online
  };
};
