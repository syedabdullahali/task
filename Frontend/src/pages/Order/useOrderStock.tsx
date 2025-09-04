import { useEffect } from "react";

const useOrderSocket = (onUpdate: (order: any) => void) => {
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:9000/ws/orders/");

    socket.onmessage = (event) => {
      const orderUpdate = JSON.parse(event.data);
      onUpdate(orderUpdate);
    };

    return () => socket.close();
  }, [onUpdate]);
};

export default useOrderSocket;