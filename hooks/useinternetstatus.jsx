import { useState, useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";

const useInternetStatus = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [connectionType, setConnectionType] = useState(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
      setConnectionType(state.type);
      // console.log("Connection type", state.type);
      // console.log("Is connected?", state.isConnected);
    });

    // Cleanup function
    return () => {
      unsubscribe();
    };
  }, []);

  return { isConnected, connectionType };
};

export default useInternetStatus;
